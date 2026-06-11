import kitchenImage from './images/kitchenGuru.jpeg';
import slackImage from './images/slackimage.jpeg';
import epikImage from './images/epikImage.jpeg';
import ChatBotImage from './images/ChatBotImage.jpeg';
import CalcImage from './images/Calcimage.jpeg';
import warrantsImage from './images/warrantsImage.jpeg';

const projects = [
  {
    id: 'auditory',
    title: 'Auditory Learning App',
    subtitle: 'Personal · Ongoing',
    tagline: 'Study on the move — audio-first, spaced repetition built in.',
    role: 'Founder / Designer / Engineer',
    problem:
      'People absorb a surprising amount of information passively — on walks, runs, commutes — but flashcards, lecture clips, and interview prep all assume you are sitting in front of a screen.',
    build: [
      'Conducting user interviews to validate the concept and define the MVP.',
      'Scoping the app to combine exercise with studying through AI voice prompts and real-time feedback.',
      'Anki-compatible spaced repetition plus interview-prep tooling powered by manual and auto-generated flashcards.',
    ],
    stack: ['React Native', 'AI Voice', 'Spaced Repetition', 'Anki'],
    links: [],
    cover: null,
    coverColor: '#f4c95d',
    coverAccent: '#e63946',
    coverLabel: 'NEW',
  },
  {
    id: 'kitchen',
    title: 'Kitchen Guru',
    subtitle: 'Personal',
    tagline: 'Tell it what you have. Get a recipe back.',
    role: 'Full-stack Engineer',
    problem:
      'Recipe sites assume you have every ingredient. Most weeknights you have six things and a deadline.',
    build: [
      'Full-stack Next.js app that uses GROQ AI to save ingredients and dynamically generate personalized recipes.',
      'Inputs include diet and cuisine preferences for virtually unlimited variations.',
      'Launched on Vercel with CI/CD, Firebase for the database, and Google Sign-In for OAuth.',
    ],
    stack: ['Next.js', 'GROQ', 'Firebase', 'Vercel', 'OAuth'],
    links: [{ label: 'Case study', to: '/KitchenGuru' }],
    cover: kitchenImage,
  },
  {
    id: 'epik',
    title: 'AI Conversation Catalyst',
    subtitle: 'The EPIK Project',
    tagline: 'Real-time GPT-4 support for human-trafficking intervention volunteers.',
    role: 'ML Engineer',
    problem:
      'Volunteers were entering high-stakes conversations with no scaffolding. Response latency cost trust.',
    build: [
      'Deployed a GPT-4–powered real-time support tool on Hugging Face for intervention volunteers.',
      'Built an NLP classification pipeline that improved response efficiency by 30%.',
    ],
    stack: ['GPT-4', 'Hugging Face', 'NLP', 'Python'],
    links: [{ label: 'Case study', to: '/AIConversationCatalyst' }],
    cover: epikImage,
  },
  {
    id: 'slack',
    title: 'DEI Slack Bot',
    subtitle: 'Community Health Analytics in Open-Source Software',
    tagline: 'Cuts the time international students hunt for professional language by 70%.',
    role: 'Software Engineer',
    problem:
      'International students were burning hours digging for the "right" professional phrasing on threads and search engines.',
    build: [
      'Built a Bolt.js feedback-learning Slack bot.',
      'Integrated 2 external APIs and 1 custom REST API.',
      'Reduced search time by 70%.',
    ],
    stack: ['Bolt.js', 'Slack API', 'REST'],
    links: [{ label: 'Case study', to: '/SlackBot' }],
    cover: slackImage,
  },
  {
    id: 'calc',
    title: 'Financial Calculator API',
    subtitle: 'Reliance Inc.',
    tagline: 'A standalone calculator service with 10+ REST endpoints.',
    role: 'Software Engineering Intern',
    problem:
      'Live e-commerce store needed financial calculation logic that could be reused across product surfaces without duplicating math.',
    build: [
      'Created a Financial Calculator API with 10+ REST endpoints and shipped it as a standalone service.',
      'Integrated separate features into a live e-commerce platform.',
      'Optimized page load through targeted bug fixes using browser dev tools.',
    ],
    stack: ['REST', 'JavaScript', 'E-commerce'],
    links: [{ label: 'Case study', to: '/FinancialCalculatorAPI' }],
    cover: CalcImage,
  },
  {
    id: 'dsa',
    title: 'DSA ChatBot',
    subtitle: 'Personal',
    tagline: 'A study buddy for data structures and algorithms.',
    role: 'Full-stack Engineer',
    problem: 'Practicing DSA solo means no one to nudge you when you are about to brute-force an O(n²) solution.',
    build: ['Built a chatbot tutor for DSA practice with hint-laddering and topic detection.'],
    stack: ['React', 'OpenAI', 'Node'],
    links: [{ label: 'Case study', to: '/DSA-ChatBot' }],
    cover: ChatBotImage,
  },
  {
    id: 'warrants',
    title: 'Warrants Project',
    subtitle: 'Boston University',
    tagline: 'Visualizing warrant data for a civic transparency project.',
    role: 'Data / Frontend',
    problem: 'Warrant data sits in PDFs and tables that nobody reads.',
    build: ['Built interactive visualizations to surface patterns in the data for non-technical audiences.'],
    stack: ['React', 'D3', 'Data viz'],
    links: [{ label: 'Case study', to: '/Warrants' }],
    cover: warrantsImage,
  },
];

export default projects;
