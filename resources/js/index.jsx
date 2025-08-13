import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./**/index.jsx', { eager: true })
    return pages[`./${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <App {...props} />
    )
  },
})