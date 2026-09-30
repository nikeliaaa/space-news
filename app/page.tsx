import { ArticleCard } from "@/components/article-card";
import { getArticles } from "@/lib/api";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Космические новости | Главная",
  description: "Свежие новости космонавтики, запусков и исследований",
  openGraph: {
    title: "Космические новости",
    description: "Свежие новости космонавтики, запусков и исследований",
    type: "website",
  },
};

export default async function HomePage() {
  const data = await getArticles();

  return (
    <main className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold tracking-tight">
            Космические новости
          </h1>

          <p className="mt-2 text-muted-foreground">
            Свежие новости космонавтики, запусков и исследований
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.results.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </main>
  );
}
