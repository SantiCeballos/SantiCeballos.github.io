<script setup>
const props = defineProps({
  options: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
})

const model = defineModel({ type: String })
</script>

<template>
  <div>
    <label v-if="label" for="dropdown" class="dropdown-label">{{ label }}</label>
    <select id="dropdown" v-model="model">
      <option v-for="(value, key) in options" :key="key" :value="value">
        {{ value }}
      </option>
    </select>
  </div>
</template>

<style scoped>
.dropdown-label {
  margin-right: 10px;
  font-weight: bold;
  align-self: center;
}
select {
  padding: 0.5rem;
  font-size: 1rem;
}
</style>
