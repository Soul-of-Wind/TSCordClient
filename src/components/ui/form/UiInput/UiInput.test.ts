import {fireEvent, render, RenderOptions} from '@testing-library/vue';
import UiInput from '@/components/ui/form/UiInput/UiInput.vue';
import {vi} from 'vitest';

describe('Тестирование UiInput.vue',  () => {
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

  it('Лейбл отрисовывается', () => {
    const { getByText } = render(UiInput, options);

    getByText('Label');
  });

  it('Плейсхолдер отрисовывается', () => {
    const { getByPlaceholderText } = render(UiInput, options);

    getByPlaceholderText('Enter text...');
  });

  it('Компонент отображает ошибку', () => {
    const { getByText } = render(UiInput, options);
    getByText('Field is required');
  });

  it('Компонент не отображает ошибку если значение в поле валидно', async () => {
    const screen  = render(UiInput, options);
    const input = screen.getByPlaceholderText('Enter text...');
    console.log(input);
    // fireEvent.input(input, {
    //   target: {
    //     value: 'hello world'
    //   }
    // });

    await fireEvent.update(input, 'Hello world');
    console.log(await screen.findByText('Field is required'));
    

    // const user = userEvent.setup();
    // await user.click(input);
    // await user.keyboard('Hello world');
    // await user.keyboard('{Enter}');
    // await new Promise(resolve => setTimeout(resolve, 0));
    // console.log(screen.queryByText('Hello world'));
    // console.log(screen.html());


  });
});