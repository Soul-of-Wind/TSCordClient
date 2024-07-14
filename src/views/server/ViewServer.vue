<template>
  <div class="view-server-home">
    <div class="view-server-home__list">
      <ServerAside />
    </div>
    <div>
      <UiChat />
    </div>
    <div>
      <ServerUserList />
    </div>
  </div>
</template>

<script setup lang="ts">

import ServerAside from '@/components/server/ServerAside/ServerAside.vue';
import UiChat from '@/components/ui/UiChat/UiChat.vue';
import ServerUserList from '@/components/server/ServerUserList/ServerUserList.vue';
</script>

<style lang="scss" scoped>
.view-server-home {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  height: 100dvh;

  & > div {
    border: 1px solid #1f1f1f;
  }
}
</style>