<template>
  <CHeader position="sticky" class="mb-4">
    <CContainer fluid>
      <CHeaderToggler class="ps-1" @click="$store.commit('toggleSidebar')">
        <CIcon icon="cil-menu" size="lg" />
      </CHeaderToggler>
      <span @click="logout">Logout</span>
    </CContainer>
    <CHeaderDivider />
    <CContainer fluid>
      <AppBreadcrumb />
    </CContainer>
  </CHeader>
</template>

<script>
import AppBreadcrumb from './AppBreadcrumb'
import { logo } from '@/assets/brand/logo'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    const logout = () => {
      store.commit('logoutUser')

      router.push('/login')
    }

    return {
      logo,
      logout,
    }
  },
}
</script>
