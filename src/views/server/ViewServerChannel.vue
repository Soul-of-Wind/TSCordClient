<template>
  <div class="server-channel">
    <div>channel </div>
    <div class="chat-history">
      <div
        v-for="(item, key) in messageList"
        :key="key"
        class="chat-history__item"
      >
        {{ item.name }}: {{ item.text }}
      </div>
    </div>

    <div class="input">
      <input
        v-model="message"
        @keydown.enter="sendMessage"
      >
      <button
        type="button"
        @click="sendMessage"
      >
        Отправить
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useServerListStore} from '@/stores/server-list.ts';
import {useRoute} from 'vue-router';
import {Ref, ref} from 'vue';
import {MessageDto} from '@/assets/api/server/dto/MessageDto.ts';

const route = useRoute();
const server = useServerListStore().getServer(+route.params.uid);
const channel = server.getChannelInstance(+route.params.channelId);
const messageList: Ref<MessageDto[]> = ref([]);
channel.fetchMessages().then(res => messageList.value = res);
channel.onMessage((message) => {
  messageList.value.push(message);
});
const message = ref('');
function sendMessage() {
  channel.send(message.value);
  message.value = '';
}
</script>

<style lang="scss" scoped>
.server-channel {
  display: grid;
  grid-template-rows: 1fr auto;
  width: 100%;
  height: 100%;
}

.input {
  display: grid;
  grid-template-columns: 1fr auto;
  width: 100%;
}
</style>