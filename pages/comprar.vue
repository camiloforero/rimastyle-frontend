<template>
  <div style="max-width: 420px">
    <v-img src="/logo_rimastyle.png" />
    <br />
    <p>Para comprar la boleta, puedes consignar al Nequi <b>3017618898</b></p>
    <br />
    <RegistrationForm v-if="!registered" @register="registered=true"/>
    <p v-else>Tu inscripción a Rima$tyle ha sido exitosa. En breve estaremos verificando tu pago y enviándote tu boleta virtual</p>
  </div>
</template>

<script setup lang="ts">
const registered = ref(false)

</script>

<style scoped>

</style>
