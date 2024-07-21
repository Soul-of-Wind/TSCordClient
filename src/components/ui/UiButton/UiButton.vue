<template>
  <button
    :type="type"
    :class="innerClass"
    class="btn"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import {computed} from 'vue';
import useInstanceForm from '@/components/ui/form/assets/composable/useInstanceForm.ts';

const form = useInstanceForm();

interface Props  {
  type: 'button' | 'submit'
  isPrimary?: boolean
  isAccent?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button'
});

const innerClass = computed(() => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'btn-primary': props.isPrimary,
  'btn-accent': props.isAccent,
  'btn-disabled': props.disabled || !form?.isValid.value
}));
</script>

<style scoped lang="scss">

</style>