<template>
  <div v-if="userData">
    <canvas ref="canvasBoleta" width="543" height="888"></canvas>
    <v-btn @click="downloadCanvasAsImage">Descargar</v-btn>
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
const userData = ref(response.data)
console.log(window.location.href)
const canvasBoleta = ref(null)
const qrCodeDataUrlPromise = QRCode.toDataURL(window.location.href)


async function dibujarBoleta() {
  console.log('onMounted')
  const ctx = canvasBoleta.value.getContext('2d')
  const boleta = new Image()
  boleta.src = '/boleta_rimastyle.png'
  await boleta.decode()
  ctx.drawImage(boleta, 0, 0)

  // Dibujar el QR
  const qr = new Image()
  qr.src = await qrCodeDataUrlPromise
  console.log(qr)
  qr.onload = () => ctx.drawImage(qr, 160, 160, 235, 235)

  // Dibujar el nombre
  ctx.font = "36px sans-serif";
  ctx.textAlign = 'center'
  console.log(userData.value!.nombres)
  ctx.fillText(userData.value!.nombres, 272, 450);
}
onMounted(dibujarBoleta)

function downloadCanvasAsImage(){
  const a = document.createElement("a")
  a.href = canvasBoleta.value.toDataURL()
  a.download = `Boleta Rima$tyle ${userData.value!.nombres}.png`
  a.dispatchEvent(new MouseEvent("click"))
  a.remove()
}



</script>

<style scoped>

</style>
