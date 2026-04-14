import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// ============================================
// REEMPLAZAR CON LOS DATOS DEL PROYECTO SANITY
// Project ID: Pedirle a Lucía el ID del proyecto
// Dataset: normalmente es "production"
// ============================================
export const sanityClient = createClient({
  projectId: 'reemplazar-con-project-id',   // ← REEMPLAZAR con el Project ID de Sanity
  dataset: 'production',                    // ← REEMPLAZAR si el dataset tiene otro nombre
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source) {
  return builder.image(source)
}
