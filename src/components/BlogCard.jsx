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
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#5a7458]/15 hover:border-[#5a7458]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
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
          <div className="w-full h-full bg-gradient-to-br from-[#a8c4a0] to-[#7a9477] flex items-center justify-center">
            <span className="text-white/50 text-4xl">🌱</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="flex flex-col flex-1 p-5">
        {/* Categoría */}
        <span className="text-xs font-medium text-[#5a7458] bg-[#e8f0e4] px-3 py-1 rounded-full self-start mb-3">
          {categoryLabels[post.category] || post.category}
        </span>

        {/* Título */}
        <h2 className="text-base font-bold text-[#235649] mb-2 leading-snug group-hover:text-[#56854e] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        {/* Footer: autor + fecha + tiempo */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-[#5a7458]/10">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#c8dbc4] flex items-center justify-center text-[#3B6D11] font-semibold text-xs flex-shrink-0">
              LV
            </div>
            <span className="text-xs text-gray-500">Lucía Vallejo</span>
          </div>
          <span className="text-xs text-gray-400">{post.readTime} min lectura</span>
        </div>
      </div>
    </a>
  )
}

export default BlogCard
