export const PERSONAL_INFO = {
  name: 'Nicolas Micuda Becker',
  title: 'Computer Science Student',
  tagline: 'Building elegant solutions through code',
  description: 'Third-year Computer Science student passionate about UX/UI. I specialize in UX/UI design and development and I\'m currently seeking for internship opportunities. I love tackling user experience challenges and building intuitive interfaces.',
  aboutText: `Hi, I'm Nicolas Micuda Becker, a computer science student at Université Paris 8 Vincennes. I'm passionate about web development, algorithms, and system design. Through my projects, I've honed problem-solving skills and adaptability. I'm always eager to learn and take on new challenges.

I'm currently seeking an internship or apprenticeship to gain hands-on experience. Feel free to reach out if you're looking for a motivated team member! Explore my portfolio to learn more about my journey and projects.`,
  
  email: 'nicolas.micuda@gmail.com',
  phone: '0771645615',
  location: 'Paris, France',
  social: {
    github: 'https://github.com/Nicolas-micuda-becker',
    linkedin: 'https://www.linkedin.com/in/nicolas-micuda-becker-6b73a92b1/',
  },
  cvUrl: '/img/CV.pdf',
  photoUrl: '/img/IMG_1829.jpeg',
} as const;

export const STATS = [
  {
    id: 'languages',
    value: '6+',
    label: 'Mastered Languages',
    details: [
      'C',
      'Python/numpy/PyTorch',
      'HTML/CSS',
      'C++',
      'React',
      'JavaScript/TypeScript/Three.js',
    ],
  },
  {
    id: 'studies',
    value: '3+',
    label: 'Years of Studies in Computer Science',
    details: [
      'Université Paris 8 Vincennes',
      'Computer Science (L3)',
      'Focus: Algorithms, Web Development, Cryptography',
    ],
  },
  {
    id: 'experiences',
    value: '6+',
    label: 'Professional Experiences',
    details: [
      'Home to Home - General Assistant',
      'Playtime Paris - Event Staff',
      'Playtime Paris - Storage Manager',
      'Café de la Paix - Receptionist',
      'Louis Vuitton - Host',
      'Cartier - Groom',
    ],
  },
] as const;

export const EXPERIENCES = [
  {
    id: 'Event-Staff-Playtime',
    title: 'Event Staff',
    company: 'Playtime Paris',
    period: '01/2026',
    shortDate: '24/01/2026 - 26/01/2026',
    description: 'During the Playtime Paris event, I was responsible for welcoming and guiding visitors, ensuring a smooth flow of attendees, and providing information about the event. This role enhanced my customer service skills and ability to work in a fast-paced environment.',
  },
  {
    id: 'Storage-Manager-Playtime',
    title: 'Storage Manager',
    company: 'Playtime Paris',
    period: '06/2025',
    shortDate: '27/06/2025 - 1/07/2025',
    description: 'During the Playtime Paris event, I was responsible for managing the storage area, organizing materials, and ensuring efficient logistics. This role improved my organizational skills and ability to work under pressure.',
  },
  {
    id: 'home-to-home',
    title: 'General Assistant',
    company: 'Home to Home la conciergerie',
    period: '05/2024 - 09/2024',
    shortDate: 'Mai-Sept 2024',
    description: 'Welcoming and assisting Airbnb guests, managing check-ins, handing over keys, and presenting the apartments. Resolving various issues (Wi-Fi, hot water, cleaning, keys) and providing quick intervention in case of emergencies. Contributing to the automation of the billing system and creating forms for the registration of new property owners.',
  },
  {
    id: 'Café-de-la-Paix',
    title: 'Receptionist at Café de la Paix',
    company: 'MHBA',
    period: '10/2023 - 12/2023',
    shortDate: 'Oct-Déc 2023',
    description: 'I was responsible for reception and cloakroom duties in Café de la Paix. This role highlighted my adaptability, commitment to high standards, and efficiency in demanding environments.',
  },
  {
    id: 'Louis-Vuitton',
    title: 'Host at Louis Vuitton',
    company: 'DSD Organisation',
    period: '07/2023 - 09/2023',
    shortDate: 'Juil-Sept 2023',
    description: 'At DSD Organisation, I worked as a host in prestigious boutiques such as Louis Vuitton (Champs-Élysées and Place Vendôme). My responsibilities included welcoming clients, serving beverages. This experience allowed me to develop skills in discipline, dynamism, stress management, and teamwork in a demanding environment.',
  },
  {
    id: 'Cartier',
    title: 'Groom at Cartier',
    company: 'DSD Organisation',
    period: '07/2023 - 09/2023',
    shortDate: 'Juil-Sept 2023',
    description: 'At DSD Organisation, I worked as a host in prestigious boutiques such as Cartier. My responsibilities included do groom. This experience allowed me to develop skills in discipline, dynamism, stress management, and teamwork in a demanding environment.',
  },
] as const;

export const PROJECTS = [
  {
    id: 'my-website',
    name: 'React Portfolio Website',
    description: 'Personal portfolio website built with React and Three.js',
    technologies: ['Three.js', 'JavaScript', 'React', 'Web Development'],
    githubUrl: 'https://github.com/Nicolas-micuda-becker/My-portfolio',
    image: '/img/threejs.jpg',
    object3D: {
      type: 'sphere',
      color: '#E91E63',
    },
  },
  {
    id: 'ocaml-compiler',
    name: 'OCaml MIPS Compiler',
    description: 'OCaml compiler that translates imperative mini-language to MIPS assembly',
    technologies: ['OCaml', 'MIPS', 'Assembly', 'Compiler Design'],
    githubUrl: 'https://github.com/Nicolas-micuda-becker/OCaml-MIPS-Compiler',
    liveUrl: null,
    image: '/img/compiler.jpg',
    object3D: {
      type: 'gear',
      color: '#FF6B35',
    },
  },
  {
    id: 'tsp',
    name: 'Travelling Salesman Problem',
    description: 'TSP implementation with 2-opt and Lin-Kernighan heuristics',
    technologies: ['C', 'Algorithms', 'Optimization', 'Graph Theory'],
    githubUrl: 'https://github.com/Nicolas-micuda-becker/Travelling-Salesman-Problem',
    liveUrl: null,
    image: '/img/tsp.jpg',
    object3D: {
      type: 'network',
      color: '#61DAFB',
    },
  },
  {
    id: 'Secure-Voting-System',
    name: 'Secure Voting System',
    description: 'Simulation of a secure electronic voting system using RSA encryption, Paillier cryptosystem, and zero-knowledge proofs',
    technologies: ['Python', 'Cryptodome', 'Collaboration', 'Cryptography'],
    githubUrl: 'https://github.com/Nicolas-micuda-becker/SecureVotingSystem',
    liveUrl: null,
    image: '/img/Voronoi.jpg',
    object3D: {
      type: 'polyhedron',
      color: '#FF9800',
    },
  },
  {
    id: 'huffman',
    name: 'Huffman Compressor',
    description: 'File compression and decompression using Huffman algorithm',
    technologies: ['C', 'Data Structures', 'Compression', 'Binary Trees'],
    githubUrl: 'https://github.com/Nicolas-micuda-becker/Huffman-compressor',
    liveUrl: null,
    image: '/img/Compressor.jpg',
    object3D: {
      type: 'cube',
      color: '#4CAF50',
    },
  },
  {
    id: 'threejs',
    name: 'Three.js 3D Experience',
    description: 'Immersive 3D experience with Three.js - L3 University Project',
    technologies: ['Three.js', 'JavaScript', 'WebGL', '3D Graphics'],
    githubUrl: 'https://github.com/Nicolas-micuda-becker/THREEJS-EXPERIENCE-3D',
    liveUrl: null,
    image: '/img/threejs.jpg',
    object3D: {
      type: 'sphere',
      color: '#E91E63',
    },
  },
  {
    id: 'game-of-life',
    name: 'Game of Life',
    description: 'Turing-complete computer in Logisim running Conway\'s Game of Life',
    technologies: ['Logisim', 'Digital Logic', 'Computer Architecture'],
    githubUrl: 'https://github.com/Nicolas-micuda-becker/Game_of_life',
    liveUrl: null,
    image: '/img/logisim.jpg',
    object3D: {
      type: 'grid',
      color: '#9C27B0',
    },
  },
] as const;

export type Project = typeof PROJECTS[number];
export type Experience = typeof EXPERIENCES[number];
