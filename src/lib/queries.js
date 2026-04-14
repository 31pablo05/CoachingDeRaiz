// Query para obtener todos los artículos (para la página de listado)
export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    readTime,
    publishedAt
  }
`

// Query para obtener un artículo por slug (para la página individual)
export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    mainImage,
    category,
    readTime,
    publishedAt,
    body,
    seoTitle,
    seoDescription
  }
`

// Query para obtener solo los slugs (para generar rutas estáticas)
export const ALL_SLUGS_QUERY = `
  *[_type == "post"] {
    "slug": slug.current
  }
`
