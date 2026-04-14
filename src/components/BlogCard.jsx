import React from 'react'
import { urlFor } from '../lib/sanity'

const categoryLabels = {
  'liderazgo': 'Liderazgo',
  'equipos': 'Equipos',
  'coaching-ontologico': 'Coaching Ontológico',
  'organizaciones': 'Organizaciones',
  'desarrollo-personal': 'Desarrollo Personal',
}

const BlogCard = ({ post, featured = false }) => {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(featured ? 800 : 600).height(featured ? 480 : 320).url()
    : null

  const date = new Date(post.publishedAt).toLocaleDateString('es-AR', {
    year: 'numeric', month: 'long', day: 'numeric'
  })

  if (featured) {
    return (
      <a
        href={`/blog/${post.slug.current}/`}
        className="group block lg:grid lg:grid-cols-5 gap-0 bg-white rounded-2xl overflow-hidden border border-[#5a7458]/15 hover:border-[#5a7458]/40 hover:shadow-xl transition-all duration-500"
      >
        <div className="lg:col-span-3 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={post.mainImage?.alt || post.title}
              className="w-full h-56 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          ) : (
            <div className="w-full h-56 lg:h-full bg-gradient-to-br from-[#5a7458] to-[#7a9477] flex items-center justify-center">
              <span className="text-white/50 text-5xl">🌱</span>
            </div>
          )}
        </div>
        <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-semibold text-white bg-[#5a7458] px-3 py-1 rounded-full">
              Destacado
            </span>
            <span className="text-xs font-medium text-[#5a7458] bg-[#e8f0e4] px-3 py-1 rounded-full">
              {categoryLabels[post.category] || post.category}
            </span>
          </div>
          <h2 className="text-xl lg:text-2xl font-bold text-[#235649] mb-3 leading-snug group-hover:text-[#56854e] transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-sm text-gray-600 mb-5 leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#c8dbc4] flex items-center justify-center text-[#3B6D11] font-semibold text-xs">
                LV
              </div>
              <span className="text-gray-500">Lucía Vallejo</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{date}</span>
              <span>·</span>
              <span>{post.readTime} min</span>
            </div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={`/blog/${post.slug.current}/`}
      className="group block bg-white rounded-2xl overflow-hidden border border-[#5a7458]/15 hover:border-[#5a7458]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <div className="overflow-hidden h-48">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={post.mainImage?.alt || post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#a8c4a0] to-[#7a9477] flex items-center justify-center">
            <span className="text-white/50 text-4xl">🌱</span>
          </div>
        )}
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-[#5a7458] bg-[#e8f0e4] px-3 py-1 rounded-full">
          {categoryLabels[post.category] || post.category}
        </span>
        <h3 className="text-base font-bold text-[#235649] mt-3 mb-2 leading-snug group-hover:text-[#56854e] transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between pt-3 border-t border-[#5a7458]/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#c8dbc4] flex items-center justify-center text-[#3B6D11] font-semibold text-xs">
              LV
            </div>
            <span className="text-xs text-gray-400">Lucía Vallejo</span>
          </div>
          <span className="text-xs text-gray-400">{post.readTime} min lectura</span>
        </div>
      </div>
    </a>
  )
}

export default BlogCard
