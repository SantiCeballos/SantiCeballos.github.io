<script setup>
import { ref, computed, onMounted } from 'vue'
import UserTable from './components/UserTable.vue'
import Dropdown from './components/GenericDropdown.vue'
import SortDirection from './components/SortDirection.vue'
import { useUserStore } from './stores/userStore'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { sortCriteria, sortDirection } = storeToRefs(userStore)
const searchQuery = ref('')

const filteredUsers = computed(() => userStore.filteredUsers(searchQuery.value))

onMounted(() => {
  userStore.loadUsers()
})
</script>

<template>
  <div class="app-container">
    <h1>Users Classification</h1>
    <div class="filters-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by name..."
        class="search-input"
      />
      <div class="sort-container">
        <Dropdown
          v-model="sortCriteria"
          :options="userStore.criterias"
          label="Sort by:"
          class="dropdown"
        />
        <SortDirection v-model="sortDirection" />
      </div>
    </div>
    <UserTable :users="filteredUsers" />
  </div>
</template>

<style scoped>
.app-container {
  padding: 1rem;
}

.filters-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.search-input {
  padding: 0.5rem;
  font-size: 1rem;
}

.sort-container {
  display: flex;
  gap: 1rem;
  flex-direction: row;
}

.dropdown {
  display: flex;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (max-width: 800px) {
  .filters-container {
    flex-direction: column;
  }
  .sort-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
