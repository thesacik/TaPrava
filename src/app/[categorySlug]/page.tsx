import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Lightbulb, HelpCircle } from "lucide-react";
import { categoryPages, getCategoryBySlug } from "@/data/categoryPages";
import { allPlants } from "@/utils/plants";
import type { Plant } from "@/types/plants";
import { CategoryGrid } from "./CategoryGrid";

export const dynamicParams = false;

export function generateStaticParams() {
  return categoryPages.map((c) => ({ categorySlug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}): Promise<Metadata> {
  const { categorySlug } = await params;
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) return {};
  return {
    title: cat.metaTitle,
    description: cat.metaDescription,
    openGraph: {
      title: cat.metaTitle,
      description: cat.metaDescription,
    },
  };
}

function getPlants(cat: NonNullable<ReturnType<typeof getCategoryBySlug>>): Plant[] {
  return allPlants.filter((p) => {
    if (cat.filterKategorie) return p.kategorie.includes(cat.filterKategorie);
    if (cat.filterUmisteni) return p.umisteni.includes(cat.filterUmisteni);
    return false;
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await params;
  const cat = getCategoryBySlug(categorySlug);
  if (!cat) notFound();

  const plants = getPlants(cat);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-accent-light to-white">
        <div className="mx-auto max-w-5xl px-4 py-14 md:py-20">
          <h1 className="text-3xl font-extrabold tracking-tight text-primary-dark md:text-4xl lg:text-5xl">
            {cat.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
            {cat.intro}
          </p>
          <p className="mt-3 text-sm text-gray-400">
            {plants.length} {plants.length === 1 ? "rostlina" : plants.length < 5 ? "rostliny" : "rostlin"} v katalogu
          </p>
        </div>
      </section>

      {/* About + tips */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <p className="mb-10 max-w-3xl text-gray-600 leading-relaxed">
          {cat.longDescription}
        </p>

        <div className="mb-12">
          <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
            <Lightbulb size={24} className="text-primary" /> Tipy pro pěstování
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {cat.tips.map((tip) => (
              <div
                key={tip.title}
                className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
              >
                <h3 className="mb-2 font-semibold text-gray-900">{tip.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plant grid */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Prohlédněte si {cat.title.toLowerCase()}
          </h2>
          <CategoryGrid plants={plants} />
          <div className="mt-8 text-center">
            <Link
              href={
                cat.filterKategorie
                  ? `/rostliny?kategorie=${cat.filterKategorie}`
                  : `/rostliny?umisteni=${cat.filterUmisteni}`
              }
              className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-6 py-3 font-semibold text-gray-700 transition hover:border-primary hover:text-primary"
            >
              Zobrazit vše v katalogu s filtry
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold text-gray-900">
          <HelpCircle size={24} className="text-primary" /> Časté dotazy
        </h2>
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {cat.faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer items-center justify-between px-5 py-4 font-medium text-gray-900 hover:text-primary">
                {faq.question}
                <span className="ml-4 flex-shrink-0 text-gray-400 transition group-open:rotate-180">
                  ▾
                </span>
              </summary>
              <div className="px-5 pb-4 text-sm leading-relaxed text-gray-600">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* JSON-LD FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: cat.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  );
}
