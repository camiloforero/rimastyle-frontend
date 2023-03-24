import { es } from '@formkit/i18n'
import { DefaultConfigOptions } from '@formkit/vue'

// Tailwind Genesis theme
// import { generateClasses } from '@formkit/themes'
// import { genesisIcons } from '@formkit/icons'
// import genesis from '@formkit/themes/tailwindcss/genesis'

const config: DefaultConfigOptions = {
  locales: { es }, 
  locale: 'es',
  // theme
  // icons: { ...genesisIcons }, 
  // config: { classes: generateClasses(genesis) },
}
export default config
