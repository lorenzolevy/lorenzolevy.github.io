import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Lorenzo Levy | Web Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'I aspire to create a more usable web. Reach out to me if you like my work.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Lorenzo Levy',
  subtitle: 'I Aspire to Build a More Usable Web',
  cta: 'Learn About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My journey as a developer began as UX researcher struggling to use python to arrange images and use SDKs so robots would behave properly in studies. I found love for finally solving that problem, or cleaning a console of errors.',
  paragraphTwo: 'After graduating, I knew I wanted to be involved in building products rather than researching interactions with them, so I began making products for individuals and businesses. Below are some projects that I am proud of.',
  paragraphThree: `When I'm not strapped into my chair with extra lumbar support, I enjoy teaching my cat new tricks and attempting to make songs in abelton with my partner.`,
  resume: './LL_resumeV10.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'selah.png',
    title: 'Selah Roofing Corp',
    info: 'Tech: WordPress, ACF, GraphQL, GatsbyJS, Netlify',
    info2: 'The owner of Selah Roofing Corp Calvin Black called me asking if I could bring his website into the 21 century. I was able to deliver a responsive website with perfect lighthouse scores, while maintaining his ability to both post articles and projects to maintain SEO "juice" using a headless WordPress setup.',
    url: 'https://www.selahroofingcorp.com/',
    repo: 'https://github.com/lorenzolevy/selah-roofing', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'alisene.png',
    title: 'Ali Sene Art Portfolio',
    info: 'Tech: GatsbyJS, SASS modules, GraphQL',
    info2: 'Working with Ali Sene was a wonderful opportunity to use JAM stack with a stakeholder to take advantage of the speed, security, and potential SEO enhancements offerred by Gatsby. Ali and I worked together to create an online art portfolio, which resulted in an increase in her bids and eventual employment as a graphic designer.',
    url: 'https://aliseneart.live/',
    repo: 'https://github.com/lorenzolevy/ali-sene', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'lorenzoroccolevy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lorenzolevy/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/lorenzolevy/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
