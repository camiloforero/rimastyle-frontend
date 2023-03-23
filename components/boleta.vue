<template>
  <div v-if="userData">
    <canvas ref="canvasBoleta" width="543" height="888"></canvas>
    <h1>Hola, {{ userData.nombres }}</h1>
    <p>Tu boleta de Rima$style está activa</p>
    <p>Te esperamos este 31 de marzo!</p>
  </div>
</template>

<script setup lang="ts">
import QRCode from 'qrcode'
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
console.log(window.location.href)
const canvasBoleta = ref(null)
const qrCodeDataUrlPromise = QRCode.toDataURL(window.location.href)


async function dibujarBoleta() {
  console.log(canvasBoleta)
  const ctx = canvasBoleta.value.getContext('2d')
  const boleta = new Image()
  boleta.src = '/boleta_rimastyle.png'
  boleta.onload = () => ctx.drawImage(boleta, 0, 0)

  // Dibujar el QR
  const qr = new Image()
  qr.src = await qrCodeDataUrlPromise
  console.log(qr)
  qr.onload = () => ctx.drawImage(qr, 160, 160, 235, 235)
}
onMounted(dibujarBoleta)



</script>

<style scoped>

</style>
