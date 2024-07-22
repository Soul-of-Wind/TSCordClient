<template>
  <div>
    <div
      v-if="label || placeholder"
      class="text"
    >
      {{ label || placeholder }}
    </div>
    <input
      v-model="innerValue"
      :placeholder="placeholder || label"
      class="input input-bordered w-full"
    >
    <div
      v-if="invalidMessage"
      class="text text-error"
    >
      {{ invalidMessage }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  computed, ComputedRef,
  onMounted,
  onUnmounted,
  WritableComputedRef
} from 'vue';
import {defineRule} from '@/components/ui/form/assets/utils';
import useInstanceForm from '@/components/ui/form/assets/composable/useInstanceForm.ts';

export interface IInput {
  readonly isValid: ComputedRef<boolean>,
  readonly innerValue: WritableComputedRef<string>
}

type Props = {
  modelValue: string
  rules?: ReturnType<typeof defineRule>[]
  placeholder?: string | undefined
  label?: string | undefined
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  rules: () => ([])
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>();

const innerValue = computed({
  get() {
    return props?.modelValue;
  },
  set(value: string) {
    emit('update:modelValue', value);
  }
});

const uiForm = useInstanceForm();
const isValid = computed(() => !invalidMessage.value);
const invalidMessage = computed(() =>
    props.rules.find(({ check }) => check(innerValue.value) !== true)?.message || ''
);

const object: IInput = {
  isValid: isValid,
  innerValue,
};

onMounted(() => {
  uiForm?.addField(object);
});

onUnmounted(() => {
  uiForm?.removeField(object);
});


</script>
