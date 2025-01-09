import { defineStore } from 'pinia'
import { DIRECTIONS } from '../utils'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    criterias: ['id', 'name', 'age', 'profile'],
    sortCriteria: 'name',
    sortDirection: DIRECTIONS.ASC,
  }),
  getters: {
    filteredUsers: (state) => (searchQuery) => {
      return state.users
        .filter((user) => user.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .sort((a, b) => {
          if (state.sortCriteria) {
            const direction = state.sortDirection === 'asc' ? 1 : -1
            if (a[state.sortCriteria] < b[state.sortCriteria]) return -1 * direction
            if (a[state.sortCriteria] > b[state.sortCriteria]) return 1 * direction
          }
          return 0
        })
    },
  },
  actions: {
    async loadUsers() {
      try {
        const response = await fetch('/data/hg-be-kata-data.json')
        if (!response.ok) throw new Error('Failed to fetch users')
        const data = await response.json()
        this.users = data.map((user) => ({
          ...user,
          profile:
            user.name.includes('H') || user.name.includes('B')
              ? 'Pollo con Hierbas'
              : 'Pollo Piri Piri',
        }))
      } catch (error) {
        console.error('Error loading users:', error)
      }
    },
    toggleSortDirection() {
      this.sortDirection = this.sortDirection === DIRECTIONS.ASC ? DIRECTIONS.DESC : DIRECTIONS.ASC
    },
    updateSorting(criteria) {
      if (this.sortCriteria === criteria) {
        this.toggleSortDirection()
      } else {
        this.sortCriteria = criteria
        this.sortDirection = DIRECTIONS.ASC
      }
    },
  },
})
