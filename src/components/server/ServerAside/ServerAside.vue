<template>
  <div
    class="server-aside"
  >
    <router-link
      v-for="(channel, key) in server.channels"
      :key="key"
      :to="`/server/${route.params.uid}/${channel.id}`"
    >
      {{ channel.name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router';
import {useServerListStore} from '@/stores/server-list.ts';

const route = useRoute();
const server = useServerListStore().getServer(+route.params.uid);

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