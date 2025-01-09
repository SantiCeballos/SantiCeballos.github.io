<script setup>
import { computed } from 'vue'
import { DIRECTIONS, ARROW_ICON_PATH } from '../utils'

const model = defineModel({ type: String })
const isRotated = computed(() => model.value === DIRECTIONS.DESC)
const toggle = () => {
  updateSortingDirection()
}

const updateSortingDirection = () => {
  model.value = isRotated.value ? DIRECTIONS.ASC : DIRECTIONS.DESC
}
</script>

<template>
  <div @click="toggle" class="arrow-container">
    <img
      :src="ARROW_ICON_PATH"
      :class="{ rotated: isRotated }"
      alt="Toggle Arrow"
      class="arrow-icon"
    />
  </div>
</template>

<style scoped>
.arrow-container {
  width: 1rem;
  display: flex;
  align-self: center;
  cursor: pointer;
}

.arrow-icon {
  transition: transform 0.3s ease;
  &_rotated {
    transform: rotate(180deg);
  }
}

.arrow-icon.rotated {
  transform: rotate(180deg);
}
</style>
