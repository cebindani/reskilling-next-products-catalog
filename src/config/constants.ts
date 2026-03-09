/**
 * Constantes da Aplicação
 */

export const APP_NAME = 'Garage Games';
export const APP_VERSION = '1.0.0';

export const SITE_METADATA = {
  title: `${APP_NAME} - Catálogo de Jogos de Videogame`,
  description: 'Venda de garagem de jogos para videogames usados e novos',
  author: 'Daniele Maila Cebin',
};

export const APP_ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  LOGIN: '/auth/login',
  PROFILE: '/profile',
};

export const API_ROUTES = {
  PRODUCTS: '/api/products',
  PRODUCT_DETAIL: '/api/products/:id',
};
