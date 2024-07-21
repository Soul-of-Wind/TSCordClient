<template>
  <form>
    <slot />
  </form>
</template>

<script setup lang="ts">
import {computed, ComputedRef, provide, ref, Ref} from 'vue';
import {IInput} from '@/components/ui/form/UiInput/UiInput.vue';

export interface IForm {
  addField: (field: IInput) => void
  removeField: (field: IInput) => void
  isValid: ComputedRef<boolean>
}

const fields: Ref<IInput[]> = ref([]);

const isValid = computed(() => !fields.value.some(i => !i.isValid));
// const isValid = computed(() => true);
function addField(field: IInput) {
  fields.value.push(field);
}
function removeField(field: IInput) {
  fields.value = fields.value.filter(i => i !== field);
}

const object: IForm = {
  addField,
  removeField,
  isValid: isValid
};

provide('ui-form', object);

</script>