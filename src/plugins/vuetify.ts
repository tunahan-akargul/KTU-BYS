import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const light = {
  dark: false,
  colors: {
    primary: '#1565C0',
    secondary: '#00ACC1',
    background: '#F5F7FA',
    surface: '#FFFFFF',
    'on-background': '#1A1A2E',
    'on-surface': '#1A1A2E',
  },
}

const dark = {
  dark: true,
  colors: {
    primary: '#64B5F6',
    secondary: '#4DD0E1',
    background: '#0F172A',
    surface: '#1E293B',
    'on-background': '#F8FAFC',
    'on-surface': '#F8FAFC',
    'surface-variant': '#334155',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light,
      dark,
    },
  },
  defaults: {
    VBtn: {
      rounded: 'lg',
      elevation: 0,
    },
    VCard: {
      rounded: 'lg',
      elevation: 2,
    },
    VTextField: {
      variant: 'outlined',
      density: 'comfortable',
    },
    VTooltip: {
      contentClass: 'bg-secondary',
    },
  },
})

