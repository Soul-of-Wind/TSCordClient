<template>
  <div class="server-user-list">
    <div>Пользователи на сервере: </div>
    <div
      v-for="(item, key) in server.users"
      :key="key"
      class="user-card"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useServerListStore} from '@/stores/server-list.ts';

const route = useRoute();
const server = useServerListStore().getServer(+route.params.uid);
</script>

<style scoped lang="scss">
.server-user-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.user-card {
  padding: 8px;
  border: 1px solid #000000;
}
</style>