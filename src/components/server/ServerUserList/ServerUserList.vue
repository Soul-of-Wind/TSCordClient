<template>
  <div class="server-user-list">
    <div>Пользователи на сервере: </div>
    <div
      v-for="(item, key) in userList"
      :key="key"
      class="user-card"
    >
      {{ item }}
    </div>
  </div>
</template>

<script setup lang="ts">
const userList = [
    'Kotaro',
    'Panasonic'
];
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