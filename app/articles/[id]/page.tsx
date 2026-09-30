import Link from "next/link";
import { getArticleById } from "@/lib/api";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = await getArticleById(id);

  return {
    title: `${article.title} | Space News`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [article.image_url],
      type: "article",
      publishedTime: article.published_at,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;

  const article = await getArticleById(id);

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Вернуться к новостям
        </Link>

        <article>
          <h1 className="mb-6 text-4xl font-bold tracking-tight">
            {article.title}
          </h1>

          <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {article.news_site}
            </span>

            <span>{new Date(article.published_at).toLocaleDateString()}</span>
          </div>

          <img
            src={article.image_url}
            alt={article.title}
            className="mb-8 max-h-[500px] w-full rounded-xl object-cover"
          />

          <p className="mb-8 text-lg leading-8 text-muted-foreground">
            {article.summary}
          </p>

          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Перейти к оригиналу
          </a>
        </article>
      </div>
    </main>
  );
}
