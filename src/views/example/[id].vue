<template>
<div>
<!--  <div>exampleId: {{ $route.params.id }}</div>-->
  <div>
    {{  exampleStore.count }}
  </div>
  <button @click="exampleStore.increment()">
    Добавить count
  </button>
</div>
</template>

<script setup lang="ts">
import {useExampleStore} from "../../stores/example.ts";

const exampleStore = useExampleStore();
</script>

<style scoped>

</style>