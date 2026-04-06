// ─────────────────────────────────────────────────────────────
//  PROJECTS DATA  –  Add / edit your projects here
//
//  Each project has:
//    title       : string
//    description : string
//    image       : URL string  (use Unsplash link OR import your own image)
//    liveUrl     : string  (link to live project, use '#' to show "Not Live")
//    githubUrl   : string  (link to GitHub repo, use '#' to show "Private Repo")
//    isPrivate   : boolean (true = hides BOTH live link AND github link entirely)
//    tags        : array of tech stack strings
//    category    : 'Frontend' | 'Fullstack' | 'Backend' | 'Mobile'
//    featured    : boolean  (shows on Home page)
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: 'URL Shortener [Devalyze]',
    description: 'Devalyze is a web application that allows users to shorten long URLs and generate QR codes for easy sharing. It includes user authentication, a personalized dashboard, and efficient link management features, making it a simple and powerful tool for handling digital links.',
    image: 'https://res.cloudinary.com/dr1vm9r8z/image/upload/q_auto/f_auto/v1775464488/devalyze_iekur3.png',
    liveUrl: 'https://devalyze.space',
    githubUrl: '#',
    isPrivate: false,
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    category: 'Fullstack',
    featured: false,
  },
  {
    id: 2,
    title: 'Wyvadot PR',
    description: 'Wyvadot PR is a construction service platform with an integrated e-commerce system. Users can request building services, shop for products, make payments via Paystack, and track their orders through a secure login system.',
    image: 'https://res.cloudinary.com/dr1vm9r8z/image/upload/q_auto/f_auto/v1775461440/wyvadotpr_uq8wb4.png',
    liveUrl: 'https://wyvadotpr.com',
    githubUrl: '#', // client requested private repo
    isPrivate: false,
    tags: ['React', 'Javascript', 'Node js', 'Cloudinary', 'Tailwind CSS', 'MongoDB'],
    category: 'Fullstack',
    featured: true,
  },
  {
    id: 3,
    title: 'Real Estate Listings',
    description: 'PrimeNest Realty A premium real estate agency connecting buyers, sellers, and investors with verified property listings across the nation. Trusted by thousands with over $2.8 billion in closed transactions.',
    image: 'https://res.cloudinary.com/dr1vm9r8z/image/upload/q_auto/f_auto/v1775463299/primenest_q17fmu.png',
    liveUrl: 'https://primenest.vercel.app',  
    githubUrl: 'https://github.com/Yulong-Dev/PrimeNest-Realty', // private client project
    isPrivate: false,
    tags: ['Vite', 'PostgreSQL', 'Node.js', 'JavaScript', 'Tailwind CSS'],
    category: 'Fullstack',
    featured: true,
  },
  {
    id: 4,
    title: 'HVAC Website',
    description: 'ArcticBreeze HVAC Reliable heating and cooling services for homes and businesses in the metro area. Available 24/7 with certified technicians, fast response times, and transparent pricing.',
    image: 'https://res.cloudinary.com/dr1vm9r8z/image/upload/q_auto/f_auto/v1775463289/articbreeze_trcfkm.png',
    liveUrl: 'https://articbreeze.vercel.app',
    githubUrl: 'https://github.com/Yulong-Dev/ArcticBreeze', 
    isPrivate: false,
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Google Maps API'],
    category: 'Frontend',
    featured: false,
  },
  {
    id: 5,
    title: 'Diasworld Artistry',
    description: 'Diasworld Artistry Port Harcourt premier makeup and beauty studio delivering flawless glam, hair installation, wigging, and professional beauty training. Where every look is a transformation.',
    image: 'https://res.cloudinary.com/dr1vm9r8z/image/upload/q_auto/f_auto/v1775463270/diasworld_aw2bcn.png',
    liveUrl: 'https://diasworldartistry.vercel.app',
    githubUrl: 'https://github.com/Yulong-Dev/diasworldartistry',
    isPrivate: false,
    tags: ['Next.js', 'JavaScript','Tailwind CSS', 'Google Maps API','Whatsapp API'],
    category: 'Frontend',
    featured: true,
  },
  {
    id: 6,
    title: 'Restaurant Website',
    description: 'Danny Vibes Shawarma Lagos most talked-about shawarma spot, serving fresh and boldly spiced wraps made to order. Fast, affordable, and packed with flavour that keeps customers coming back.',
    image: 'https://res.cloudinary.com/dr1vm9r8z/image/upload/q_auto/f_auto/v1775463291/dannyvibes_dnsjbp.png',
    liveUrl: 'https://dannyvibesspot.vercel.app',
    githubUrl: 'https://github.com/Yulong-dev/dannyvibes-SS',
    isPrivate: false,
    tags: ['Vite', 'Tailwind CSS', 'JavaScript', 'Google Maps API'],
    category: 'Frontend',
    featured: false,
  },
]

export default projects
