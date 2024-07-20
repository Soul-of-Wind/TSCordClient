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

interface Props  {
  type: 'button' | 'submit'
  isPrimary?: boolean
  isAccent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button'
});

const innerClass = computed(() => ({
  // eslint-disable-next-line @typescript-eslint/naming-convention
  'btn-primary': props.isPrimary,
  'btn-accent': props.isAccent
}));
</script>

<style scoped lang="scss">

</style>