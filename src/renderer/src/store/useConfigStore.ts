import { defineStore } from 'pinia'
import { ref } from 'vue'

const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      showSetting: false,
      rounded: false,
      deviceId: '',
      borderWidth: '3px',
      borderColor: '#FFFFFF',
    })
    return { config }
  },
  // ζδΉε
  { persist: true },
)

export default useConfigStore
