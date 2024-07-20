<template>
  <form
    class="flex flex-col gap-2"
    action="#"
    @submit.prevent="onSubmit"
  >
    <UiInput
      v-model="formData.name"
      placeholder="Имя сервера"
    />
    <UiInput
      v-model="formData.url"
      placeholder="Адрес сервера"
    />

    <UiInput
      v-model="formData.userName"
      placeholder="Имя пользователя"
    />

    <UiButton
      type="submit"
      is-accent
    >
      Войти
    </UiButton>
  </form>
</template>

<script setup lang="ts">
import UiButton from '@/components/ui/UiButton/UiButton.vue';
import UiInput from '@/components/ui/UiInput/UiInput.vue';
import {useServerListStore} from '@/stores/server-list.ts';
import {ref, Ref} from 'vue';
import {ServerOptions} from '@/assets/api/server';
import {useRouter} from 'vue-router';

const serverStoreList = useServerListStore();

const formData: Ref<Omit<ServerOptions, 'uid'>> = ref({
  url: '',
  userName: '',
  name: ''
});

const router = useRouter();

function onSubmit() {
  const { uid } = serverStoreList.create(formData.value);
  router.push(`/server/${uid}`);
}
</script>

<style scoped lang="scss">

</style>