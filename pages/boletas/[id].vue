<template>
  <div v-if="userData">
    <img src="/boleta_rimastyle.png" />
    <h1>Hola, {{ userData.nombres }}</h1>
    <p>Tu boleta de Rima$style está activa</p>
    <p>Te esperamos este 31 de marzo!</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
console.log(route.params.id)


const supabase = useSupabaseClient();

let response = await supabase
  .from('inscritos')
  .select(`*`)
  .eq('id', route.params.id)
  .single()
console.log(response)
const userData = ref(response.data)


</script>

<style scoped>

</style>
