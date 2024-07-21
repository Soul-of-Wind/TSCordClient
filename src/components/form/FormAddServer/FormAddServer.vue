<template>
  <UiForm
    class="flex flex-col gap-2"
    action="#"
    @submit.prevent="onSubmit"
  >
    <UiInput
      v-model="formData.name"
      placeholder="Имя сервера"
      :rules="generalRules"
    />
    <UiInput
      v-model="formData.url"
      placeholder="Адрес сервера"
      :rules="generalRules"
    />

    <UiInput
      v-model="formData.userName"
      placeholder="Имя пользователя"
      :rules="generalRules"
    />

    <UiButton
      type="submit"
      is-accent
    >
      Войти
    </UiButton>
  </UiForm>
</template>

<script setup lang="ts">
import UiButton from '@/components/ui/UiButton/UiButton.vue';
import UiInput from '@/components/ui/form/UiInput/UiInput.vue';
import {useServerListStore} from '@/stores/server-list.ts';
import {ref, Ref} from 'vue';
import {ServerOptions} from '@/assets/api/server';
import {useRouter} from 'vue-router';
import UiForm from '@/components/ui/form/UiForm/UiForm.vue';
import {defineRule} from '@/components/ui/form/assets/utils';
import {required} from '../../../assets/rules';

const serverStoreList = useServerListStore();

const formData: Ref<Omit<ServerOptions, 'uid'>> = ref({
  url: '',
  userName: '',
  name: ''
});

const generalRules = [
    defineRule(required, 'Поле обязательное')
];

const router = useRouter();

function onSubmit() {
  const { uid } = serverStoreList.create(formData.value);
  router.push(`/server/${uid}`);
}
</script>

<style scoped lang="scss">

</style>