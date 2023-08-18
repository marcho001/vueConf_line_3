<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
    <input type="text" value="請輸入...">
</template>

<style scoped>
input {
  padding: 5px 10px;
  font-size: 16px;
  background: rgb(75 84 95 / 66%);;
  color: #fff;
  line-height: 24px;
  border: 0px;
}
input:focus {
  outline: none;
  animation-name: focus_effect;
  animation-duration: 1.5s;
  background: rgb(255 0 0 / 52%);
}

@keyframes focus_effect {
  from {
    background: rgb(75 84 95 / 66%);;
  }
  to {
    background: rgb(255 0 0 / 52%);
  }
}
</style>
