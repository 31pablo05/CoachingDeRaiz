import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

// ============================================
// REEMPLAZAR CON LOS DATOS DEL PROYECTO SANITY
// ============================================
export default defineConfig({
  name: 'coaching-de-raiz',
  title: 'Coaching de Raíz — Panel de Contenido',
  projectId: 'reemplazar-con-project-id',   // ← REEMPLAZAR
  dataset: 'production',                    // ← REEMPLAZAR si corresponde
  plugins: [structureTool()],
  schema: { types: schemaTypes },
})
