<script setup>
import { ref } from "vue";
</script>

<template>
    <div>
        <input type="text" value="">
        <span>請輸入</span>
    </div>
</template>

<style scoped>
div {
    margin-top: 25px;
}
input {
    padding: 5px 10px;
    font-size: 16px;
    line-height: 24px;
}
span {
    position: absolute;
    pointer-events: none;
    left: 20px;
    top: 30px;
    transition: 0.2s ease all;
}
input:focus ~ span {
    top: 5px;
    bottom: 10px;
    left: 10px;
    font-size: 12px;
    opacity: 1;
}
</style>
