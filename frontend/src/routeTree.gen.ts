/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PrivateImport } from './routes/_private'
import { Route as publicIndexImport } from './routes/(public)/index'
import { Route as PrivateCatalogueIndexImport } from './routes/_private/catalogue/index'
import { Route as PrivateAddMoviesIndexImport } from './routes/_private/add-movies/index'
import { Route as publicMoviesIndexImport } from './routes/(public)/movies/index'
import { Route as publicLoginIndexImport } from './routes/(public)/login/index'
import { Route as publicGenresIndexImport } from './routes/(public)/genres/index'
import { Route as publicMoviesMovieIndexImport } from './routes/(public)/movies/$movie/index'

// Create/Update Routes

const PrivateRoute = PrivateImport.update({
  id: '/_private',
  getParentRoute: () => rootRoute,
} as any)

const publicIndexRoute = publicIndexImport.update({
  id: '/(public)/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PrivateCatalogueIndexRoute = PrivateCatalogueIndexImport.update({
  id: '/catalogue/',
  path: '/catalogue/',
  getParentRoute: () => PrivateRoute,
} as any)

const PrivateAddMoviesIndexRoute = PrivateAddMoviesIndexImport.update({
  id: '/add-movies/',
  path: '/add-movies/',
  getParentRoute: () => PrivateRoute,
} as any)

const publicMoviesIndexRoute = publicMoviesIndexImport.update({
  id: '/(public)/movies/',
  path: '/movies/',
  getParentRoute: () => rootRoute,
} as any)

const publicLoginIndexRoute = publicLoginIndexImport.update({
  id: '/(public)/login/',
  path: '/login/',
  getParentRoute: () => rootRoute,
} as any)

const publicGenresIndexRoute = publicGenresIndexImport.update({
  id: '/(public)/genres/',
  path: '/genres/',
  getParentRoute: () => rootRoute,
} as any)

const publicMoviesMovieIndexRoute = publicMoviesMovieIndexImport.update({
  id: '/(public)/movies/$movie/',
  path: '/movies/$movie/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_private': {
      id: '/_private'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PrivateImport
      parentRoute: typeof rootRoute
    }
    '/(public)/': {
      id: '/(public)/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof publicIndexImport
      parentRoute: typeof rootRoute
    }
    '/(public)/genres/': {
      id: '/(public)/genres/'
      path: '/genres'
      fullPath: '/genres'
      preLoaderRoute: typeof publicGenresIndexImport
      parentRoute: typeof rootRoute
    }
    '/(public)/login/': {
      id: '/(public)/login/'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof publicLoginIndexImport
      parentRoute: typeof rootRoute
    }
    '/(public)/movies/': {
      id: '/(public)/movies/'
      path: '/movies'
      fullPath: '/movies'
      preLoaderRoute: typeof publicMoviesIndexImport
      parentRoute: typeof rootRoute
    }
    '/_private/add-movies/': {
      id: '/_private/add-movies/'
      path: '/add-movies'
      fullPath: '/add-movies'
      preLoaderRoute: typeof PrivateAddMoviesIndexImport
      parentRoute: typeof PrivateImport
    }
    '/_private/catalogue/': {
      id: '/_private/catalogue/'
      path: '/catalogue'
      fullPath: '/catalogue'
      preLoaderRoute: typeof PrivateCatalogueIndexImport
      parentRoute: typeof PrivateImport
    }
    '/(public)/movies/$movie/': {
      id: '/(public)/movies/$movie/'
      path: '/movies/$movie'
      fullPath: '/movies/$movie'
      preLoaderRoute: typeof publicMoviesMovieIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

interface PrivateRouteChildren {
  PrivateAddMoviesIndexRoute: typeof PrivateAddMoviesIndexRoute
  PrivateCatalogueIndexRoute: typeof PrivateCatalogueIndexRoute
}

const PrivateRouteChildren: PrivateRouteChildren = {
  PrivateAddMoviesIndexRoute: PrivateAddMoviesIndexRoute,
  PrivateCatalogueIndexRoute: PrivateCatalogueIndexRoute,
}

const PrivateRouteWithChildren =
  PrivateRoute._addFileChildren(PrivateRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof PrivateRouteWithChildren
  '/': typeof publicIndexRoute
  '/genres': typeof publicGenresIndexRoute
  '/login': typeof publicLoginIndexRoute
  '/movies': typeof publicMoviesIndexRoute
  '/add-movies': typeof PrivateAddMoviesIndexRoute
  '/catalogue': typeof PrivateCatalogueIndexRoute
  '/movies/$movie': typeof publicMoviesMovieIndexRoute
}

export interface FileRoutesByTo {
  '': typeof PrivateRouteWithChildren
  '/': typeof publicIndexRoute
  '/genres': typeof publicGenresIndexRoute
  '/login': typeof publicLoginIndexRoute
  '/movies': typeof publicMoviesIndexRoute
  '/add-movies': typeof PrivateAddMoviesIndexRoute
  '/catalogue': typeof PrivateCatalogueIndexRoute
  '/movies/$movie': typeof publicMoviesMovieIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_private': typeof PrivateRouteWithChildren
  '/(public)/': typeof publicIndexRoute
  '/(public)/genres/': typeof publicGenresIndexRoute
  '/(public)/login/': typeof publicLoginIndexRoute
  '/(public)/movies/': typeof publicMoviesIndexRoute
  '/_private/add-movies/': typeof PrivateAddMoviesIndexRoute
  '/_private/catalogue/': typeof PrivateCatalogueIndexRoute
  '/(public)/movies/$movie/': typeof publicMoviesMovieIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/'
    | '/genres'
    | '/login'
    | '/movies'
    | '/add-movies'
    | '/catalogue'
    | '/movies/$movie'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/'
    | '/genres'
    | '/login'
    | '/movies'
    | '/add-movies'
    | '/catalogue'
    | '/movies/$movie'
  id:
    | '__root__'
    | '/_private'
    | '/(public)/'
    | '/(public)/genres/'
    | '/(public)/login/'
    | '/(public)/movies/'
    | '/_private/add-movies/'
    | '/_private/catalogue/'
    | '/(public)/movies/$movie/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  PrivateRoute: typeof PrivateRouteWithChildren
  publicIndexRoute: typeof publicIndexRoute
  publicGenresIndexRoute: typeof publicGenresIndexRoute
  publicLoginIndexRoute: typeof publicLoginIndexRoute
  publicMoviesIndexRoute: typeof publicMoviesIndexRoute
  publicMoviesMovieIndexRoute: typeof publicMoviesMovieIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  PrivateRoute: PrivateRouteWithChildren,
  publicIndexRoute: publicIndexRoute,
  publicGenresIndexRoute: publicGenresIndexRoute,
  publicLoginIndexRoute: publicLoginIndexRoute,
  publicMoviesIndexRoute: publicMoviesIndexRoute,
  publicMoviesMovieIndexRoute: publicMoviesMovieIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_private",
        "/(public)/",
        "/(public)/genres/",
        "/(public)/login/",
        "/(public)/movies/",
        "/(public)/movies/$movie/"
      ]
    },
    "/_private": {
      "filePath": "_private.tsx",
      "children": [
        "/_private/add-movies/",
        "/_private/catalogue/"
      ]
    },
    "/(public)/": {
      "filePath": "(public)/index.tsx"
    },
    "/(public)/genres/": {
      "filePath": "(public)/genres/index.tsx"
    },
    "/(public)/login/": {
      "filePath": "(public)/login/index.tsx"
    },
    "/(public)/movies/": {
      "filePath": "(public)/movies/index.tsx"
    },
    "/_private/add-movies/": {
      "filePath": "_private/add-movies/index.tsx",
      "parent": "/_private"
    },
    "/_private/catalogue/": {
      "filePath": "_private/catalogue/index.tsx",
      "parent": "/_private"
    },
    "/(public)/movies/$movie/": {
      "filePath": "(public)/movies/$movie/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
