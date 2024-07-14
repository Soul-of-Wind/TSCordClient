<template>
  <div class="server-aside">
    Каналы:
    <div
      v-for="(item, key) in channelList"
      :key="key"
      class="server-aside-channel"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const channelList = ref([
    'Текстовый 1',
    'Текстовый 2'
]);
</script>

<style lang="scss">
  .server-aside {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .server-aside-channel {
    padding: 8px;
    border: 1px solid #000000;
    cursor: pointer;

    &:hover {
      background-color: #928d8d;
    }
  }
</style>