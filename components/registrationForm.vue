<template>
  <FormKit
    type="form"
    @submit="submit"
    submit-label="Enviar"
    #default="{ value }"
    style="width: 450px"
  >
    <FormKit
      type="text"
      name="nombres"
      id="nombres"
      label="Nombre y apellido"
      placeholder="Manuela Sastoque"
      validation="required"
    />
    <FormKit
      type="tel"
      name="celular"
      id="celular"
      label="Número de celular"
      placeholder="3016178063"
      validation="required"
    />
    <FormKit
      type="text"
      name="documento_identidad"
      id="documento_identidad"
      label="Documento de identidad"
      placeholder="1010456789"
      validation="required"
    />
    <FormKit
      type="radio"
      name="inscrito_batalla"
      id="inscrito_batalla"
      label="Vas a participar en la batalla de free? (16 cupos)"
      :options="TIPOS_INSCRIPCION"
      validation="required"
    />
    <template v-if="value.inscrito_batalla === 'true'">
      <FormKit
        type="text"
        name="nombre_artistico"
        id="nombre_artistico"
        label="Nombre artístico"
        placeholder="Arkan"
        validation="required"
      />
      <FormKit
        type="file"
        name="foto_artista"
        id="foto_artista"
        label="Foto"
        accept="image/*"
        validation="required"
        help="Asegurate de que sea una buena foto, ya que la utilizaremos en nuestro material publicitario"
      />
    </template>
    <FormKit
      type="file"
      name="comprobante"
      id="comprobante"
      label="Comprobante de pago"
      accept="image/*,.pdf"
      validation="required"
    />
  </FormKit>
</template>

<script setup lang="ts">

const TIPOS_INSCRIPCION = [
  { label: "Si - $25000", value: "true" },
  { label: "No - $20000", value: "false" },
]

const supabase = useSupabaseClient()
const emit = defineEmits(['register'])

async function submit(fields) {
  const { comprobante, foto_artista, ...supabaseForm } = fields
  const filesToUpload = [comprobante[0]]
  if (foto_artista) filesToUpload.push(foto_artista[0])
  try {
    const [comprobante_url, foto_artista_url] = await Promise.all(filesToUpload.map((file) => uploadFile(file, fields.nombres)))
    
    let { error } = await supabase.from('inscritos').insert({ ...supabaseForm, comprobante_url, foto_artista_url }, {
      returning: 'minimal', // Don't return the value after inserting
    })
    if (error) throw error
    emit('register')
  }
  catch(e) {
    console.log(e)
  }
}

async function uploadFile(file: File, salt: string) {
  const [fileName, fileExt] = file.name.split('.')
  const filePath = `${salt}-${fileName}-${Date.now()}.${fileExt}`
  let { error: uploadError } = await supabase.storage.from('inscritos-comprobantes').upload(filePath, file)
  
  if (uploadError) throw uploadError
  return filePath
}
</script>

<style scoped>
</style>
