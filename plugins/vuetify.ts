import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({ ssr: process.server })
	nuxtApp.vueApp.use(vuetify)
})