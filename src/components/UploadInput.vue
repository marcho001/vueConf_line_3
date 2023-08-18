<template>
  <div class="wrapper">
    <div class="tabs">
      <div
        v-for="item of tabItems"
        :key="item"
        :class="{ active: focusTab === item }"
        class="tabs-item"
        @click="handleTabClick(item)"
      >
        {{ item }}
      </div>
    </div>
    <slot v-for="item of tabItems" :name="item"></slot>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const props = defineProps({
  tabItems: { type: Array, default: () => [] }
})
const emit = defineEmits(['update:focusTab', 'tab-changed'])

const focusTab = ref('')

// 預設第一個 tab 為 active
onMounted(() => {
  focusTab.value = props.tabItems[0]
})

const handleTabClick = clickItem => {
  focusTab.value = clickItem
  emit('tab-changed', clickItem)
}
</script>

<style scoped>
.tabs {
  display: flex;
  gap: 0.5rem;
}
.tabs-item {
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.active {
  background-color: #129cb47b;
  color: white;
}
</style>
