<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '複製按鈕',
  },
  copyText: {
    type: String,
    default: '複製的文字',
  },
})
const handleClick = async () => {
  await navigator.clipboard.writeText(props.copyText)
  alert(`已複製{${props.copyText}}`)
}
</script>

<template>
  <button :class="$attrs.class" type="button" @click="handleClick">
    {{ label }}
  </button>
</template>

<style scoped>
button {
  width: 200px;
  height: 50px;
}
</style>
