import {inject} from 'vue';
import {IForm} from '@/components/ui/form/UiForm/UiForm.vue';

export default function useInstanceForm(): IForm | undefined {
 return inject('ui-form');
}