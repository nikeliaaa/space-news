import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Article } from "@/types/article";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden border-0 ring-0 outline-none shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
      <img
        src={article.image_url}
        alt={article.title}
        className="h-52 w-full object-cover"
      />

      <CardHeader>
        <CardTitle className="text-xl leading-tight">
          <Link
            href={`/articles/${article.id}`}
            className="transition-colors hover:text-primary"
          >
            {article.title}
          </Link>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {article.summary}
        </p>

        <div className="flex items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-medium">{article.news_site}</span>

          <span>{new Date(article.published_at).toLocaleDateString()}</span>
        </div>
      </CardContent>
    </Card>
  );
}
