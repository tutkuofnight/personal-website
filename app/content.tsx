import {Linkedin , Instagram , Github , Mail} from 'lucide-react'

export const description = "Since 4 years interest with Software Development. Last 3 years of this passed with Web Development. I Graduated in highschool IT and Web Design. I was student at Tekirdag Namık Kemal University Computer Programming but i left after getting job from eQuota GmbH. I worked as Frontend Develoepr 9 months. In this period, i contribute many projects and i made a presentation to other developers about “Writing Test in Frontend”. Currently i continue to develop my own web projects and working at Carbon Interaktif as Frontend Developer."

export const socialMediaLinks = [
  {
    name: 'Github',
    url: 'https://www.github.com/tutkuofnight',
    icon: <Github />
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tutkuucan/',
    icon: <Linkedin />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/tutkuofnight',
    icon: <Instagram />
  },
  {
    name: 'E-Mail',
    url: 'mailto:tutkuucan369@gmail.com',
    icon: <Mail />
  }
]

export const experiences = [
  {
    companyName: 'Carbon Interaktif',
    position: 'Frontend Developer',
    date: {
      started: '10.30.2023',
      ended: 'Present'
    }
  },
  {
    companyName: 'eQuota GmbH',
    position: 'Frontend Developer',
    date: {
      started: '01.02.2023',
      ended: '08.30.2023'
    }
  },
  {
    companyName: 'Freelancer',
    position: 'Full-Stack Web Developer',
    date: {
      started: 'August 2021',
      ended: 'Present'
    }
  },
]

export const projects = [
  {
    name: 'FitProgram',
    description: "Create your fitness workout and diet program as public or private. View other people's public training and diet programs.",
    repoUrl: "https://github.com/tutkuofnight/fitprogram",
    techStack: {
      'Frontend': ['Next.js', 'Redux', 'NextAuth', 'Shadcn UI', 'TailwindCSS'],
      'Backend': ['Prisma' , 'SQLite' , 'Next Server']
    },
  },
  {
    name: 'Pixelist',
    description: "Pixelist is a social pixelart maker app. Make your dreams with pixels and share your works with other pixelists. Also include other works and build pixelarts with your friends or teammates.",
    repoUrl: "https://github.com/tutkuofnight/pixelist",
    techStack: {
      'Frontend': ['Nuxt.js', 'Vuetify', 'TailwindCSS', 'Vuex'],
      'Backend': ['Node.js' , 'Express.js' , 'MongoDB' , 'Passport.js']
    },
  },
]