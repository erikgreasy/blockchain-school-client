<template>
  <div>
    <h1>Vitajte {{ user.first_name }}</h1>
  </div>
</template>

<script>
import { useStore } from "vuex"
import { ref } from "vue"

export default {
  setup() {
    var user = ref({})
    const store = useStore()

    user = store.state.loggedUser

    return {
      user,
    }
  }
}
</script>
