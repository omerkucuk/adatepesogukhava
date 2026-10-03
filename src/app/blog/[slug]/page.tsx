import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";

import { buildMetadata } from "@/lib/seo/metadata";
import { BLOG_POSTS, getPostBySlug } from "@/content/blog-posts";
import { Reveal } from "@/components/interactive/motion/reveal";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="bg-gradient-navy px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-white"
            >
              <ArrowLeft className="size-4" /> Tüm Yazılar
            </Link>
          </div>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-primary-foreground/70">
            <span className="flex items-center gap-1.5 text-accent">
              <Tag className="size-4" /> {post.category}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              {new Date(post.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4" /> {post.readMinutes} dk okuma
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/75">
            {post.excerpt}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <Reveal className="mx-auto max-w-3xl">
          <article className="prose prose-lg prose-slate dark:prose-invert max-w-none">
            {post.sections.map((section, idx) => (
              <div key={idx} className="mb-10">
                <h2 className="text-2xl font-bold tracking-tight mb-4">{section.heading}</h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i} className="mb-4 leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
                    {section.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>
        </Reveal>
      </section>
    </>
  );
}
