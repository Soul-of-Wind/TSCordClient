import UiExample from '@/components/UiExample/UiExample.vue';
import {Meta, StoryObj} from '@storybook/vue3';
import {ExampleEnum} from '@/components/UiExample/UiExample.types.ts';

/**
 * ### Да это TITLE
 * Короче история одного компонента для проверки всех библиотек которые подключены на проекте.
 */
const meta: Meta<typeof UiExample> = {
    title: 'Ui/UiExample',
    component: UiExample,
    tags: ['autodocs']
};

export default meta;


type Story = StoryObj<typeof meta>;

export const text: Story = {
    // args: {
    //     type: ExampleEnum.text
    // },
    argTypes: {
        type: {
            control: 'radio',
            options: Object.values(ExampleEnum)
        }
    }
};

export const image: Story = {
    args: {
        msg: 'HELP',
        type: ExampleEnum.image
    }
};