<template>
  <div class="ui-chat">
    <div class="ui-chat__history">
      <div class="chat-history">
        <div
          v-for="(message, key) in messageList"
          :key="key"
          class="chat-history__item"
        >
          {{ message.user }}: {{ message.body }}
        </div>
      </div>
    </div>
    <div class="ui-chat__panel">
      <input placeholder="Введите сообщение">
    </div>
  </div>
</template>

<script setup lang="ts">
const messageList = [
  {
    user: 'Kotaro',
    uid: new Date(),
    body: 'Привет всем как дела?'
  }
];

</script>

<style scoped lang="scss">
.ui-chat {
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 100%;

  &__panel {
    input {
      width: 100%;
    }
  }
}
</style>