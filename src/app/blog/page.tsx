import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog — rady a tipy pro pěstování rostlin",
  description:
    "Články, rady a tipy pro pěstování rostlin. Návody pro začátečníky, sezónní tipy a inspirace pro vaši zahradu i interiér.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Ta Pravá",
    description:
      "Články, rady a tipy pro pěstování rostlin. Návody pro začátečníky, sezónní tipy a inspirace.",
  },
};

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) =>
    b.date.localeCompare(a.date),
  );

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog — rady a tipy pro pěstování rostlin",
    description:
      "Články, rady a tipy pro pěstování rostlin na TaPrava.cz.",
    numberOfItems: sorted.length,
    itemListElement: sorted.map((post, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: post.title,
      url: `https://taprava.cz/blog/${post.slug}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      <section className="bg-gradient-to-b from-accent-light to-white">
        <div className="mx-auto max-w-4xl px-4 pb-7 pt-14 text-center md:pb-10 md:pt-20">
          <div className="mb-3 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide text-primary">
            <BookOpen size={18} />
            Blog
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
            Rady a tipy pro pěstování
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-gray-600 leading-relaxed">
            Praktické články o pokojových rostlinách, zahradě, balkoně
            i sezónních pracích. Čtěte, inspirujte se a pěstujte s radostí.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] bg-accent-light">
                <Image
                  src={post.heroImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                  quality={75}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="mb-2 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs font-medium text-primary-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mb-2 text-lg font-bold text-gray-900 leading-snug group-hover:text-primary">
                  {post.title}
                </h2>
                <p className="mb-4 flex-1 text-sm text-gray-500 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <CalendarDays size={13} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-primary group-hover:underline">
                    Číst více
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
