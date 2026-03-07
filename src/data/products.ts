export interface Product {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  console:
    | 'PlayStation 5'
    | 'Xbox Series X/S'
    | 'Nintendo Switch'
    | 'PC'
    | 'PlayStation 4'
    | 'Xbox One';
  releaseYear: number;
  condition: 'Novo' | 'Usado';
  rating: number;
  reviews: number;
  inStock: boolean;
  slug: string;
}

export type ProductListResponse = {
  products: Product[];
  total: number;
};

export type ProductDetailResponse = {
  product: Product | null;
};

export const products: Product[] = [
  {
    id: '1',
    title: 'Elden Ring',
    description: 'Épico RPG de ação com mundo aberto do criador de Dark Souls',
    longDescription:
      'Elden Ring é um jogo épico de RPG de ação com um mundo aberto vasto e desafiador. Desenvolvido por FromSoftware em colaboração com George R.R. Martin, oferece uma experiência imersiva com combate intenso, exploration gratificante e história envolvente.',
    price: 199.9,
    image: 'https://images.unsplash.com/photo-1538481143235-a9d42016adb5?w=500&h=500&fit=crop',
    console: 'PlayStation 5',
    releaseYear: 2022,
    condition: 'Novo',
    rating: 4.9,
    reviews: 2543,
    inStock: true,
    slug: 'elden-ring',
  },
  {
    id: '2',
    title: 'The Legend of Zelda: Tears of the Kingdom',
    description: 'A sequência esperada do clássico adventure de ação',
    longDescription:
      'The Legend of Zelda: Tears of the Kingdom é a sequência de Breath of the Wild. Link retorna em uma aventura épica com novas mecânicas de puzzle e exploração em um mundo ainda maior e mais detalhado. Essencial para fãs de adventure.',
    price: 349.9,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop',
    console: 'Nintendo Switch',
    releaseYear: 2023,
    condition: 'Novo',
    rating: 4.8,
    reviews: 1876,
    inStock: true,
    slug: 'zelda-tears-kingdom',
  },
  {
    id: '3',
    title: 'Cyberpunk 2077',
    description: 'RPG de ação em primeira pessoa ambientado em um futuro distópico',
    longDescription:
      'Cyberpunk 2077 é um RPG ambientado em Night City, um futuro distópico onde você cria seu próprio personagem e faz escolhas que moldam a história. Com gameplay intenso, diálogos dinâmicos e um mundo vasto para explorar.',
    price: 149.9,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&h=500&fit=crop',
    console: 'Xbox Series X/S',
    releaseYear: 2020,
    condition: 'Usado',
    rating: 4.3,
    reviews: 892,
    inStock: true,
    slug: 'cyberpunk-2077',
  },
  {
    id: '4',
    title: 'God of War Ragnarök',
    description: 'Conclusão épica da saga Norse de Kratos e Atreus',
    longDescription:
      'God of War Ragnarök conclui a jornada nórdica de Kratos e Atreus com uma narrativa épica, combate visceral refinado e personagens memoráveis. Um dos maiores exclusivos do PlayStation 5 com gráficos impressionantes.',
    price: 329.9,
    image: 'https://images.unsplash.com/photo-1534423654285-fb1ff2824eaf?w=500&h=500&fit=crop',
    console: 'PlayStation 5',
    releaseYear: 2022,
    condition: 'Novo',
    rating: 4.9,
    reviews: 3210,
    inStock: true,
    slug: 'god-of-war-ragnarok',
  },
  {
    id: '5',
    title: 'Starfield',
    description: 'Jogo de exploração espacial em primeira pessoa no universo Bethesda',
    longDescription:
      'Starfield é um jogo de RPG em primeira pessoa onde você explora o espaço, descobre novos planetas, recruta companheiros e tem liberdade para personalizador sua nave. Um título ambicioso e imersivo para fãs de sci-fi.',
    price: 279.9,
    image: 'https://images.unsplash.com/photo-1552546154-23182a5f0d08?w=500&h=500&fit=crop',
    console: 'Xbox Series X/S',
    releaseYear: 2023,
    condition: 'Novo',
    rating: 4.6,
    reviews: 1543,
    inStock: false,
    slug: 'starfield',
  },
  {
    id: '6',
    title: 'Hollow Knight',
    description: 'Metroidvania indie desafiador com arte pixel única',
    longDescription:
      'Hollow Knight é um jogo Metroidvania 2D indie que cativa com sua arte em pixel art, ambientes atmosféricos e combate desafiador. Explore o reino subterrâneo de Hallownest resolvendo puzzles e derrotando bosses memoráveis.',
    price: 59.9,
    image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=500&fit=crop',
    console: 'Nintendo Switch',
    releaseYear: 2017,
    condition: 'Usado',
    rating: 4.7,
    reviews: 1204,
    inStock: true,
    slug: 'hollow-knight',
  },
];

/**
 * Obtem produto por ID
 * @param id - ID do produto a ser buscado
 * @returns Produto correspondente ao ID ou undefined se não encontrado
 */
export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id);
}

/**
 * Obtem todos os produtos
 * @returns Lista de todos os produtos
 */
export function getAllProducts(): Product[] | undefined {
  return products;
}

/**
 * Obtem produto por slug
 * @param slug - Slug do produto a ser buscado
 * @returns Produto correspondente ao slug ou undefined se não encontrado
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

/**
 * Função auxiliar para obter todos os slugs (necessário para geração estática)
 */
export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}
