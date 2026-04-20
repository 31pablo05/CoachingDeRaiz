import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'coaching-de-raiz',
  title: 'Coaching de Raíz — Panel de Contenido',
  projectId: 'gt2hwif0',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  document: {
    productionUrl: async (prev, { document }) => {
      if (document._type === 'post' && document?.slug?.current) {
        return `https://www.coachingderaiz.com/blog/${document.slug.current}/`
      }
      return prev
    }
  }
})
