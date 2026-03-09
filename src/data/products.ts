import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Elden Ring',
    description: 'Épico RPG de ação com mundo aberto do criador de Dark Souls',
    longDescription:
      'Elden Ring é um jogo épico de RPG de ação com um mundo aberto vasto e desafiador. Desenvolvido por FromSoftware em colaboração com George R.R. Martin, oferece uma experiência imersiva com combate intenso, exploration gratificante e história envolvente.',
    price: 199.9,
    image: 'https://cdn.steamstatic.com/steam/apps/1245620/library_600x900_2x.jpg',
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
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg/600px-The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg',
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
    image: 'https://cdn.steamstatic.com/steam/apps/1091500/library_600x900_2x.jpg',
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
    image: 'https://cdn.steamstatic.com/steam/apps/2322010/library_600x900_2x.jpg',
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
    image: 'https://cdn.steamstatic.com/steam/apps/1716740/library_600x900_2x.jpg',
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
    image: 'https://cdn.steamstatic.com/steam/apps/367520/library_600x900_2x.jpg',
    console: 'Nintendo Switch',
    releaseYear: 2017,
    condition: 'Usado',
    rating: 4.7,
    reviews: 1204,
    inStock: true,
    slug: 'hollow-knight',
  },
  {
    id: '7',
    title: 'Diablo III: Eternal Collection',
    description: 'Action RPG clássico com foco em loot, builds e coop local/online',
    longDescription:
      'Diablo III: Eternal Collection traz a experiência completa de Diablo III com expansão Reaper of Souls e pacote Rise of the Necromancer. Ideal para quem gosta de progressão de personagem, dungeons e combate frenético.',
    price: 139.9,
    image: 'https://upload.wikimedia.org/wikipedia/en/8/80/Diablo_III_cover.png',
    console: 'Nintendo Switch',
    releaseYear: 2018,
    condition: 'Usado',
    rating: 4.5,
    reviews: 980,
    inStock: true,
    slug: 'diablo-3-eternal-collection',
  },
  {
    id: '8',
    title: 'The Witcher 3: Wild Hunt - Complete Edition',
    description: 'RPG de mundo aberto com narrativa densa, agora também no Switch',
    longDescription:
      'The Witcher 3: Wild Hunt - Complete Edition coloca você no papel de Geralt de Rivia em uma jornada épica com escolhas impactantes, missões marcantes e um vasto mundo aberto. A versão para Nintendo Switch inclui expansões e campanha completa.',
    price: 219.9,
    image: 'https://cdn.steamstatic.com/steam/apps/292030/library_600x900_2x.jpg',
    console: 'Nintendo Switch',
    releaseYear: 2019,
    condition: 'Novo',
    rating: 4.9,
    reviews: 2875,
    inStock: true,
    slug: 'the-witcher-3-switch',
  },
  {
    id: '9',
    title: 'Super Mario Odyssey',
    description: 'Plataforma 3D criativo com exploração e fases cheias de segredos',
    longDescription:
      'Super Mario Odyssey é uma aventura 3D vibrante e inovadora com mundos variados, mecânicas criativas usando Cappy e grande foco em exploração. Um dos títulos mais icônicos do Nintendo Switch.',
    price: 299.9,
    image:
      'https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Super_Mario_Odyssey.jpg/600px-Super_Mario_Odyssey.jpg',
    console: 'Nintendo Switch',
    releaseYear: 2017,
    condition: 'Novo',
    rating: 4.8,
    reviews: 3412,
    inStock: true,
    slug: 'super-mario-odyssey',
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
 * @param slug
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
