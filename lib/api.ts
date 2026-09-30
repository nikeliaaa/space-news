import { Article, ArticlesResponse } from "@/types/article";

const BASE_URL = "https://api.spaceflightnewsapi.net/v4";

export async function getArticles(): Promise<ArticlesResponse> {
  const response = await fetch(`${BASE_URL}/articles/?limit=10`);

  if (!response.ok) {
    throw new Error(`Ошибка загрузки новостей`);
  }

  const data: ArticlesResponse = await response.json();

  return data;
}

export async function getArticleById(id: string): Promise<Article> {
  const response = await fetch(`${BASE_URL}/articles/${id}/`);

  if (!response.ok) {
    throw new Error(`Новость не найдена`);
  }

  const data: Article = await response.json();

  return data;
}
