<template>
  <div>
    <RegistrationForm v-if="!registered" @register="registered=true"/>
    <p v-else>Tu inscripción a Rima$tyle ha sido exitosa. En breve estaremos verificando tu pago y enviándote tu boleta virtual</p>
  </div>
</template>

<script setup lang="ts">
const registered = ref(false)

</script>

<style scoped>

</style>
