import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './Context/LanguageContext'
import '../css/app.css'

createInertiaApp({
  title: title => title ? `${title} - صناع الحياة` : 'صناع الحياة - مصر | فرع الإسماعيلية',
  resolve: name => {
    const pages = import.meta.glob('./**/index.jsx', { eager: true })
    return pages[`./${name}.jsx`]
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <LanguageProvider>
        <App {...props} />
      </LanguageProvider>
    )
  },
})