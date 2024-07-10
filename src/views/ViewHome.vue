<template>
  <div class="view-home">
    <div class="shadow-block">
      <form
        class="login-form"
        action="#"
        @submit.prevent="onSubmitForm"
      >
        <input
          v-model="formData.address"
          placeholder="Ip address"
        >
        <input
          v-model="formData.name"
          placeholder="Name"
        >
        <button class="login-form__button">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from 'vue';

const formData = ref({
  address: '',
  name: ''
});

function onSubmitForm() {
  console.log('form', formData.value);
}
</script>

<style scoped lang="scss">

.view-home {
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 100vw;
  min-height: 100vh;
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