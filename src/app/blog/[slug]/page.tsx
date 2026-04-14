import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowLeft, Lightbulb } from "lucide-react";
import {
  blogPosts,
  getBlogPost,
  type ContentBlock,
} from "@/data/blogPosts";
import { getPlantById } from "@/utils/plants";
import { toSlug } from "@/utils/slug";
import { getPlantImageUrl } from "@/utils/imageUrl";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: `${post.title} | Ta Pravá`,
      description: post.metaDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      ...(post.heroImage && {
        images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }],
      }),
    },
  };
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function PlantListBlock({
  heading,
  plantIds,
}: {
  heading?: string;
  plantIds: string[];
}) {
  const plants = plantIds
    .map((id) => {
      const p = getPlantById(id);
      return p ? { plant: p, slug: toSlug(p.nazevCz, p.id) } : null;
    })
    .filter(Boolean) as { plant: NonNullable<ReturnType<typeof getPlantById>>; slug: string }[];

  if (plants.length === 0) return null;

  return (
    <div className="my-8">
      {heading && (
        <h2 className="mb-4 text-xl font-bold text-gray-900">{heading}</h2>
      )}
      <div className="grid gap-3 sm:grid-cols-2">
        {plants.map(({ plant, slug }) => {
          const thumb = getPlantImageUrl(plant.obrazek, plant.obrazekOverride, 200);
          return (
            <Link
              key={plant.id}
              href={`/rostliny/${slug}`}
              className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3 shadow-sm transition hover:border-primary hover:shadow-md"
            >
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-accent-light">
                {thumb ? (
                  <Image
                    src={thumb}
                    alt={plant.nazevCz}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-primary-light opacity-40">
                    <span className="text-2xl">🌿</span>
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <span className="block truncate font-semibold text-gray-900 group-hover:text-primary">
                  {plant.nazevCz}
                </span>
                {plant.nazevLat && (
                  <span className="block truncate text-xs italic text-gray-400">
                    {plant.nazevLat}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "text":
      return (
        <div className="my-6">
          {block.heading && (
            <h2 className="mb-3 text-xl font-bold text-gray-900">
              {block.heading}
            </h2>
          )}
          <div className="text-gray-600 leading-relaxed whitespace-pre-line">{block.body}</div>
        </div>
      );

    case "tip":
      return (
        <div className="my-8 rounded-xl border border-primary/20 bg-accent-light/60 p-5">
          <div className="mb-2 flex items-center gap-2 font-semibold text-primary-dark">
            <Lightbulb size={18} className="text-primary" />
            {block.title}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">{block.body}</p>
        </div>
      );

    case "image":
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-accent-light">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              className="object-cover"
              quality={80}
            />
          </div>
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-400">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "plantList":
      return (
        <PlantListBlock heading={block.heading} plantIds={block.plantIds} />
      );
  }
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    author: { "@type": "Organization", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Ta Pravá",
      url: "https://taprava.cz",
    },
    mainEntityOfPage: `https://taprava.cz/blog/${post.slug}`,
    ...(post.heroImage && { image: `https://taprava.cz${post.heroImage}` }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <section className="relative overflow-hidden">
        <Image
          src={post.heroImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          quality={80}
          priority
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/30"
          >
            <ArrowLeft size={14} />
            Zpět na blog
          </Link>
          <div className="mb-3 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <CalendarDays size={14} />
              {formatDate(post.date)}
            </span>
            <span>•</span>
            <span>{post.author}</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        {post.content.map((block, i) => (
          <ContentBlockRenderer key={i} block={block} />
        ))}

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <p className="text-sm text-gray-500">
              Líbil se vám článek? Prozkoumejte náš katalog a najděte
              tu pravou rostlinu pro sebe.
            </p>
          </div>
          <Link
            href="/rostliny"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
          >
            Procházet katalog
          </Link>
        </div>
      </article>
    </>
  );
}
