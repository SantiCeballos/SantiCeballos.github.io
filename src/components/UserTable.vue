<script setup>
import { computed } from 'vue'
import { useUserStore } from './../stores/userStore'
import { storeToRefs } from 'pinia'
import { ARROW_ICON_PATH, DIRECTIONS } from '../utils'

const props = defineProps({
  users: {
    type: Array,
    required: true,
  },
})
const emit = defineEmits(['update-sort'])
const userStore = useUserStore()
const { criterias, sortCriteria, sortDirection } = storeToRefs(userStore)

const isRotated = computed(() => {
  return sortDirection.value === DIRECTIONS.DESC
})

const updateSorting = (criteria) => {
  if (criteria === sortCriteria.value) {
    userStore.toggleSortDirection()
  } else {
    sortCriteria.value = criteria
    sortDirection.value = DIRECTIONS.ASC
  }
}
</script>

<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="criteria in criterias" :key="criteria" @click="updateSorting(criteria)">
            <span
              >{{ criteria.toUpperCase() }}
              <img
                v-if="criteria === sortCriteria"
                :src="ARROW_ICON_PATH"
                :class="{ rotated: isRotated }"
                alt="Toggle Arrow"
                class="arrow-icon"
              />
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id" class="user-row">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.profile }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
  margin-top: 10px;
  table-layout: fixed;
}
th {
  font-weight: 700;
  width: 1fr;
  & span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}
th {
  cursor: pointer;
  background-color: #f4f4f4;
}

.arrow-icon {
  width: 1rem;
  transition: transform 0.3s ease;
  &.rotated {
    transform: rotate(180deg);
  }
}
</style>
