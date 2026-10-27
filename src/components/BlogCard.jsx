import React from 'react'
import { urlFor } from '../lib/sanity'

const categoryLabels = {
  'liderazgo': 'Liderazgo',
  'equipos': 'Equipos',
  'coaching-ontologico': 'Coaching Ontológico',
  'organizaciones': 'Organizaciones',
  'desarrollo-personal': 'Desarrollo Personal',
}

const BlogCard = ({ post }) => {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(500).height(500).url()
    : null

  const date = new Date(post.publishedAt).toLocaleDateString('es-AR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  return (
    <a
      href={`/blog/${post.slug.current}/`}
      className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-crema-dark bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
    >
      {/* Imagen */}
      <div className="overflow-hidden h-64 flex-shrink-0">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-crema">
            <span className="font-heading text-3xl text-bosque/40" aria-hidden="true">CDR</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">
        {/* Categoría */}
        <span className="chip mb-3 self-start">
          {categoryLabels[post.category] || post.category}
        </span>

        <h2 className="mb-2 font-heading text-xl font-medium leading-snug text-tinta line-clamp-2 transition-colors duration-300 group-hover:text-terracota">
          {post.title}
        </h2>

        <p className="flex-1 text-sm leading-relaxed text-tinta-soft line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-4 flex items-center justify-between border-t border-crema-dark pt-4">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-crema text-xs font-semibold text-bosque-dark">
              LV
            </div>
            <span className="text-xs text-tinta-soft">Lucía Vallejo</span>
          </div>
          <span className="text-xs text-tinta-soft">{post.readTime} min lectura</span>
        </div>
      </div>
    </a>
  )
}

export default BlogCard
