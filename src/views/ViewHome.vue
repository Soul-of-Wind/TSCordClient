<template>
  <div class="flex">
    <div class="flex w-full flex-col justify-center items-center">
      <div class="card bg-base-100 w-96 shadow-xl p-4">
        <div class="card-body">
          <div class="card-title">
            Подключиться к серверу
          </div>
          <FormAddServer />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FormAddServer from '@/components/form/FormAddServer/FormAddServer.vue';
</script>