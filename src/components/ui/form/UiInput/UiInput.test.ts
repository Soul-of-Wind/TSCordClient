import {fireEvent, render, RenderOptions} from '@testing-library/vue';
import UiInput from '@/components/ui/form/UiInput/UiInput.vue';
import {expect, vi} from 'vitest';

describe('Test UiInput.vue',  () => {
  let options: RenderOptions<typeof UiInput>;
  const uiForm = {
    addField: vi.fn(),
    removeField: vi.fn(),
    isValid: false
  };

  beforeEach(() => {
    options = {
      props: {
        modelValue: '',
        label: 'Label',
        placeholder: 'Enter text...',
        rules: [
          {
            check: (v) => !!v,
            message: 'Field is required',
          },
        ],
      },
      global: {
        provide: {
          'ui-form': uiForm
        },
      }
    };
  });

  it('Label is drawn', () => {
    const { getByText } = render(UiInput, options);

    getByText('Label');
  });

  it('Placeholder is drawn', () => {
    const { getByPlaceholderText } = render(UiInput, options);

    getByPlaceholderText('Enter text...');
  });

  it('Error is drawn', () => {
    const { getByText } = render(UiInput, options);
    getByText('Field is required');
  });

  it('Validation rule is working.', async () => {
    const screen  = render(UiInput, {
      ...options,
      props: {
        ...options.props,
        'onUpdate:modelValue': (e: string) => {
          screen.rerender({ modelValue: e });
        },
      }
    });

    const input = screen.getByPlaceholderText('Enter text...');
    await fireEvent.update(input, 'Hello world');

    expect(screen.queryByText('Field is required')).toBeNull();
  });
});