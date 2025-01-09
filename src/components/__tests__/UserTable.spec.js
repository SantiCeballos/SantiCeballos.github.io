import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import flushPromises from 'flush-promises'
import UserTable from '../UserTable.vue'
import { useUserStore } from '../../stores/userStore'

describe('UserTable.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders correctly with props', async () => {
    const userStore = useUserStore()

    userStore.loadUsers = vi.fn().mockImplementation(() => {
      userStore.users = [{ id: 1, name: 'John Doe', age: 30, profile: 'Pollo con Hierbas' }]
    })

    await userStore.loadUsers()

    await flushPromises()

    const wrapper = mount(UserTable, {
      props: { users: userStore.users },
      global: {
        plugins: [createPinia()],
      },
    })

    await flushPromises()

    expect(wrapper.text()).toContain('John Doe')
  })
})
