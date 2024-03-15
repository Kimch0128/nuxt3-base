<template>
  <div>
    <NuxtWelcome />
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    console.log(process.env.ENV_TYPE)
  },
})
</script>
