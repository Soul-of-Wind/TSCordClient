<template>
<div class="ui-example">
  {{ msg }}
</div>
</template>

<script setup lang="ts">

defineProps<{
  msg: string
}>()
</script>
