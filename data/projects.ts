export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'KarmaBot',
    description:
      'An AI-powered chatbot that provides mental wellness guidance based on the teachings of the Bhagavad Gita.',
    logo: '/logos/karma.png',
    link: 'https://github.com/Namit-9504/KarmaBot-Guidance-from-the-Bhagavad-Gita',
    slug: 'KarmaBot',
  },
  {
    title: 'Gemini-Ai-model',
    description:
      'A lightweight project exploring capabilities of Google s Gemini AI model through API integrations and prompt engineering. Focused on building intelligent agents, testing responses, and developing LLM-based utilities',
    logo: '/logos/Gemini.PNG',
    link: 'https://github.com/Namit-9504/Gemini-Ai-model',
    slug: 'Gemini-Ai-model',
  },
  {
    title: 'VSCode Portfolio',
    description:
      'A Visual Studio Code themed developer portfolio built with Next.js and CSS Modules.',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/Namit-9504/namitchaudhari.dev-VS-Code-Themed-Portfolio',
    slug: 'vscode-portfolio',
  },
];
