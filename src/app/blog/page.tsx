import Link from "next/link";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";

import { buildMetadata } from "@/lib/seo/metadata";
import { BLOG_POSTS } from "@/content/blog-posts";
import { Reveal } from "@/components/interactive/motion/reveal";

export const metadata = buildMetadata({
  title: "Blog & Bilgi Merkezi",
  description: "Soğuk zincir lojistiği, gıda muhafazası ve mobil soğuk hava deposu teknolojileri hakkında faydalı bilgiler, haberler ve ipuçları.",
  path: "/blog",
});

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-gradient-navy px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Blog & <span className="text-gradient-ice">Bilgi Merkezi</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/75">
            Soğuk zincir lojistiği, gıda muhafazası ve mobil soğutma teknolojileri hakkında faydalı
            bilgiler, haberler ve sektör ipuçları.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-frost"
                >
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                      <span className="flex items-center gap-1.5 text-accent">
                        <Tag className="size-3.5" /> {post.category}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="size-3.5" />
                        {new Date(post.date).toLocaleDateString("tr-TR", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="size-3.5" /> {post.readMinutes} dk
                      </span>
                    </div>

                    <h2 className="mt-4 text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6">
                      <span className="inline-flex items-center gap-2 text-sm font-bold text-accent transition-transform group-hover:translate-x-1">
                        Devamını Oku <ArrowRight className="size-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
