<template>
  <FormKit
    type="form"
    v-model="form"
    @submit="submit"
    submit-label="Enviar"
    #default="{ value }"
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
      name="documento"
      id="documento"
      label="Documento de identidad"
      placeholder="1010456789"
      validation="required"
    />
    <FormKit
      type="radio"
      name="inscripcionBatalla"
      id="inscripcionBatalla"
      label="Vas a participar en la batalla de free? (16 cupos)"
      :options="TIPOS_INSCRIPCION"
      validation="required"
    />
    <template v-if="value.inscripcionBatalla === 'true'">
      <FormKit
        type="text"
        name="nombreArtistico"
        id="nombreArtistico"
        label="Nombre artístico"
        placeholder="Arkan"
        validation="required"
      />
      <FormKit
        type="file"
        name="fotoArtista"
        id="fotoArtista"
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
    {{ form }}
  </FormKit>
</template>

<script setup lang="ts">
const TIPOS_INSCRIPCION = [
  { label: "Si - 25000", value: "true" },
  { label: "No - 20000", value: "false" },
]
const FORM_VALUES = {
  nombres: null,
  celular: null,
  documento: null,
}

const form = ref(FORM_VALUES)

async function submit(fields) {
  console.log(fields)
}
</script>

<style scoped>

</style>
