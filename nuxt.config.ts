// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	css: ['@formkit/themes/genesis'],
  modules: [
		// Your other modules
		'./modules/vuetify',
		'@formkit/nuxt',
		'@nuxtjs/supabase',
	],
})
