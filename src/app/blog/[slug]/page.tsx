interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Blog post: {slug}</h1>
      <p className="mt-2 text-muted-foreground">
        This post page is being prepared.
      </p>
    </div>
  );
}