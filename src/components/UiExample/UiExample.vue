<template>
  <div class="ui-example">
    <div>{{ msg }}</div>
    <div>{{ count }}</div>
    <div>
      Selected type: {{ type }}
    </div>
    <slot
      name="default"
      :num="count"
    />
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';
import {ExampleEnum} from '@/components/UiExample/UiExample.types.ts';

const count = ref(0);


function addCount(forceCount?: number) {
  count.value = forceCount ?? count.value + 1;
}

defineSlots<{
  /** Тестовое описание слота */
  default(props: { num: string | number }): any;
}>();

defineExpose<{ addCount: (forceCount: number) => void }>({
  addCount
});

defineEmits<{
  /**
   * Описание события
   */
  (e: 'onClick'): void
}>();


withDefaults(defineProps<{
  /** Отображаемое сообщение */
  msg: string,
  type: ExampleEnum
}>(), {
  msg: 'Hello world',
  type: ExampleEnum.text
});
</script>

<style lang="scss">
$color: #66bf3c;

.ui-example {
  color: $color;
}
</style>