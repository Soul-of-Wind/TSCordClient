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
      v-if="false"
      class="text text-error"
    >
      error
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed} from 'vue';

const props = defineProps<{
  modelValue: string
  placeholder?: string | undefined
  label?: string | undefined
}>();

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
</script>