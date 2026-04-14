export const post = {
  name: 'post',
  title: 'Artículo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: Rule => Rule.required().max(80)
    },
    {
      name: 'slug',
      title: 'URL del artículo',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required()
    },
    {
      name: 'excerpt',
      title: 'Resumen (para la card del blog)',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(200)
    },
    {
      name: 'mainImage',
      title: 'Imagen de portada',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo (para SEO)',
          type: 'string',
          validation: Rule => Rule.required()
        }
      ]
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Liderazgo', value: 'liderazgo' },
          { title: 'Equipos', value: 'equipos' },
          { title: 'Coaching Ontológico', value: 'coaching-ontologico' },
          { title: 'Organizaciones', value: 'organizaciones' },
          { title: 'Desarrollo Personal', value: 'desarrollo-personal' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'readTime',
      title: 'Tiempo de lectura (minutos)',
      type: 'number',
      validation: Rule => Rule.required().min(1).max(60)
    },
    {
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Contenido del artículo',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Título H2', value: 'h2' },
            { title: 'Título H3', value: 'h3' },
            { title: 'Cita', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Negrita', value: 'strong' },
              { title: 'Cursiva', value: 'em' },
            ]
          }
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              title: 'Texto alternativo',
              type: 'string'
            },
            {
              name: 'caption',
              title: 'Pie de foto',
              type: 'string'
            }
          ]
        }
      ]
    },
    {
      name: 'seoTitle',
      title: 'Título SEO (opcional, si querés uno diferente al título)',
      type: 'string',
      validation: Rule => Rule.max(60)
    },
    {
      name: 'seoDescription',
      title: 'Descripción SEO',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.max(160)
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      subtitle: 'category'
    }
  }
}
