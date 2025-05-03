export const tecnologias = [
  {
    id: 1,
    titulo: 'React',
    descricao: 'Biblioteca JavaScript para construção de interfaces de usuário.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    id: 2,
    titulo: 'JavaScript',
    descricao: 'Linguagem de programação para desenvolvimento web e mobile.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    id: 3,
    titulo: 'Redux',
    descricao: 'Biblioteca para gerenciamento de estado em aplicações JavaScript.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    id: 4,
    titulo: 'MySQL',
    descricao: 'Sistema de gerenciamento de banco de dados relacional.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    id: 5,
    titulo: 'Git',
    descricao: 'Sistema de controle de versão distribuído.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    id: 6,
    titulo: 'HTML5',
    descricao: 'Linguagem de marcação para estruturação de páginas web.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    id: 7,
    titulo: 'CSS3',
    descricao: 'Linguagem de estilo para design e layout de páginas web.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    id: 8,
    titulo: 'Bootstrap',
    descricao: 'Framework CSS para desenvolvimento de interfaces responsivas.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    id: 9,
    titulo: 'Angular',
    descricao: 'Framework para construção de aplicações web dinâmicas.',
    src: 'https://img.icons8.com/?size=80&id=6SWtW8hxZWSo&format=png',
  },
  {
    id: 10,
    titulo: 'NextJs',
    descricao: 'Framework React para renderização no lado do servidor.',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },

  {
    id: 11,
    titulo: 'NodeJS',
    descricao: 'Ambiente de execução JavaScript para backend.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    id: 12,
    titulo: 'Express',
    descricao: 'Framework para construção de APIs em Node.js.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    id: 13,
    titulo: 'MongoDB',
    descricao: 'Banco de dados NoSQL orientado a documentos.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    id: 14,
    titulo: 'Docker',
    descricao: 'Plataforma para criação e gerenciamento de containers.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    id: 15,
    titulo: 'Sequelize',
    descricao: 'ORM para Node.js que facilita o uso de bancos de dados.',
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  },
  {
    id: 16,
    titulo: 'PHP',
    descricao: 'Linguagem de programação para desenvolvimento web com suporte ao framework Laravel.',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    id: 17,
    titulo: 'Java',
    descricao: 'Linguagem de programação com suporte ao framework Spring Boot.',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  },
  {
    id: 18,
    titulo: 'Python',
    descricao: 'Linguagem de programação versátil para diversas aplicações.',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    id: 19,
    titulo: 'C#',
    descricao: 'Linguagem de programação com suporte ao framework .NET Core.',
    src: 'https://cdn-icons-png.flaticon.com/128/6132/6132221.png',
  },
  {
    id: 21,
    titulo: 'Firebase',
    descricao: 'Plataforma de backend como serviço para desenvolvimento de aplicativos.',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-original.svg',
  },
];


export const techFrntend = tecnologias.filter((tech) => tech.id <= 10);
export const techBackend = tecnologias.filter((tech) => tech.id >= 11);
