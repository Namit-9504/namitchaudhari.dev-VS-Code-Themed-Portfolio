export interface Article {
  id: string;
  title: string;
  description: string;
  images: string[];
  
}

export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export interface Repo {
  id: number;
  name: string;
  description: string;
  language: string;
  watchers: number;
  forks: number;
  stargazers_count: number;
  html_url: string;
  homepage: string;
}

export interface User {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
}
