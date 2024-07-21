import {computed, defineProps, inject, onMounted, onUnmounted} from 'vue';
import {useForm} from '@/assets/composable/form/useForm.ts';

export function useInput() {
  const props = defineProps<{
    modelValue: string,
    rules: object[]
  }>();

  const uiForm: ReturnType<typeof useForm> = inject('ui-form');

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void
  }>();


  const innerValue = computed({
    get() {
      return props.modelValue;
    },
    set(value: string) {
      emit('update:modelValue', value);
    }
  });

  onMounted(() => {});
  onUnmounted(() => {});


  return {
    innerValue
  };
}