<template>
  <div class="view-home">
    <div class="server-list">
      <div>Ваши подключения: </div>
      <router-link
        v-for="(item, key) in serverList"
        :key="key"
        :to="'/server/' + item.uid"
        class="server-list__item"
      >
        {{ item.name }}
      </router-link>
    </div>
    <div style="display: flex; flex-direction: column; align-items: center;">
      <div class="shadow-block">
        <form
          class="login-form"
          action="#"
          @submit.prevent="onSubmit"
        >
          <div>Подключить сервер</div>
          <div>
            Имя сервера
          </div>
          <input
            v-model="formData.name"
            placeholder="Имя сервера"
          >

          <div>
            Ip address
          </div>
          <input
            v-model="formData.url"
            placeholder="Ip address"
          >

          <div>
            Имя пользователя
          </div>
          <input
            v-model="formData.userName"
            placeholder="Name"
          >


          <button class="login-form__button">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import {computed, Ref, ref} from 'vue';
import {useServerListStore} from '@/stores/server-list.ts';
import {ServerOptions} from '@/assets/api/server';

const serverStoreList = useServerListStore();

const serverList = computed(() => serverStoreList.serverList);

const formData: Ref<Omit<ServerOptions, 'uid'>> = ref({
  url: 'http://localhost:3000',
  userName: 'Misha',
  name: 'Любимый сервер'
});

function onSubmit() {
  serverStoreList.create(formData.value);
}

</script>

<style scoped lang="scss">

.view-home {
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 3fr;

  min-width: 100vw;
  min-height: 100vh;
}

.server-list {
  height: 100%;
  border-right: 1px solid #000000;
}

.shadow-block {
  padding: 16px;
  box-shadow: 4px 4px 8px 0 rgba(34, 60, 80, 0.2);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style> 