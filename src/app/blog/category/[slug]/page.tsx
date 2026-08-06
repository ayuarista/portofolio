interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Category: {slug}</h1>
      <p className="mt-2 text-muted-foreground">
        Category content is being prepared.
      </p>
    </div>
  );
}