import React, { Suspense, lazy } from 'react';

// Lazy load non-critical components to reduce initial bundle size
const LazyAbout = lazy(() => import('./About'));
const LazyServices = lazy(() => import('./Services'));
const LazyWhatIsCoaching = lazy(() => import('./WhatIsCoaching'));
const LazyContact = lazy(() => import('./Contact'));

// Simple loading component with skeleton UI
const ComponentSkeleton = ({ height = 'h-96' }) => (
  <div className={`animate-pulse bg-white/20 rounded-xl ${height} flex items-center justify-center`}>
    <div className="text-white/60">
      <div className="w-8 h-8 border-2 border-white/40 border-t-white rounded-full animate-spin mx-auto mb-2"></div>
      <p className="text-sm">Cargando...</p>
    </div>
  </div>
);

// Lazy component wrapper with error boundary
const LazyComponentWrapper = ({ children, fallback, errorFallback }) => (
  <Suspense fallback={fallback || <ComponentSkeleton />}>
    {children}
  </Suspense>
);

export {
  LazyAbout,
  LazyServices,
  LazyWhatIsCoaching,
  LazyContact,
  LazyComponentWrapper,
  ComponentSkeleton
};