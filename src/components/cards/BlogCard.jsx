import React from 'react';
import { Card } from '../common/Card';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

export function BlogCard({ post, onReadPost }) {
  return (
    <Card padding="p-0" className="overflow-hidden flex flex-col h-full group hover:border-brand-coral-300">
      {/* Blog Image */}
      <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-display font-semibold bg-white/90 backdrop-blur-md text-brand-slate px-3 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Metas */}
        <div className="flex items-center gap-3 text-xs text-brand-muted mb-2.5">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-brand-coral-500" />
            {post.date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-brand-teal-600" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg text-brand-slate mb-2 group-hover:text-brand-coral-500 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-brand-charcoal/80 leading-relaxed mb-5 line-clamp-2">
          {post.excerpt}
        </p>

        {/* Read More Link */}
        <div className="mt-auto pt-3 border-t border-stone-100 flex items-center justify-between">
          <span className="text-xs font-medium text-brand-muted">
            By {post.author}
          </span>
          <button
            onClick={() => onReadPost(post)}
            className="inline-flex items-center gap-1.5 text-xs font-display font-bold text-brand-coral-500 group-hover:text-brand-coral-600 group-hover:translate-x-1 transition-all"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </Card>
  );
}
