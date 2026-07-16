import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { blogPosts, blogCategories } from '../data/blog';
import { BlogFeaturedImage } from '../components/IndustrialVisuals';

export default function Insights() {
  const { slug } = useParams();
  const [filter, setFilter] = useState('All');
  const post = slug ? blogPosts.find((p) => p.slug === slug) : null;

  if (slug && post) {
    return (
      <div>
        <article className="pt-32 pb-16">
          <div className="container-max section-padding">
            <Link to="/insights" className="inline-flex items-center gap-2 text-sm text-ops-gray-500 hover:text-ops-blue transition-colors mb-6">
              <ArrowLeft size={16} /> Back to Insights
            </Link>
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold">{post.category}</span>
                <span className="flex items-center gap-1.5 text-xs text-ops-gray-400">
                  <Calendar size={12} /> {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-ops-gray-400">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ops-black dark:text-white leading-tight text-balance">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center gap-3 pb-8 border-b border-ops-gray-200 dark:border-ops-gray-800">
                <div className="w-11 h-11 rounded-full bg-ops-blue/10 flex items-center justify-center text-ops-blue font-semibold text-sm">
                  LM
                </div>
                <div>
                  <p className="text-sm font-semibold text-ops-black dark:text-white">{post.author}</p>
                  <p className="text-xs text-ops-gray-400">Founder & Manufacturing Systems Consultant</p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden mb-8 mt-8">
                <BlogFeaturedImage category={post.category} />
              </div>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                {post.content.split('\n\n').map((para, i) => (
                  <p key={i} className="text-base text-ops-gray-600 dark:text-ops-gray-300 leading-relaxed mb-6">{para}</p>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related posts */}
        <section className="py-16 bg-ops-gray-50 dark:bg-ops-gray-950 border-t border-ops-gray-200 dark:border-ops-gray-800">
          <div className="container-max section-padding">
            <h2 className="text-2xl font-bold text-ops-black dark:text-white mb-8">More Insights</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.filter((p) => p.slug !== slug).slice(0, 3).map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <Link to={`/insights/${p.slug}`} className="group block rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden card-hover">
                    <BlogFeaturedImage category={p.category} />
                    <div className="p-5">
                      <span className="px-2 py-0.5 rounded-full bg-ops-blue/10 text-ops-blue text-2xs font-semibold mb-2 inline-block">{p.category}</span>
                      <h3 className="text-base font-semibold text-ops-black dark:text-white mb-2 group-hover:text-ops-blue transition-colors">{p.title}</h3>
                      <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 line-clamp-2">{p.excerpt}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  const filtered = filter === 'All' ? blogPosts : blogPosts.filter((p) => p.category === filter);
  const featured = blogPosts[0];

  return (
    <div>
      <PageHero
        badge="Insights"
        title={<>Thoughts on <span className="gradient-text">manufacturing transformation</span></>}
        subtitle="Insights on AI, manufacturing, maintenance, automation, and digital transformation — from people who understand the shop floor."
      />

      {/* Featured post */}
      <section className="py-16">
        <div className="container-max section-padding">
          <Reveal>
            <Link to={`/insights/${featured.slug}`} className="group grid lg:grid-cols-2 gap-8 rounded-3xl overflow-hidden bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 card-hover">
              <div className="aspect-video lg:aspect-auto lg:h-full overflow-hidden">
                <BlogFeaturedImage category={featured.category} />
              </div>
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold">Featured</span>
                  <span className="text-xs text-ops-gray-400">{featured.category}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-bold text-ops-black dark:text-white mb-4 group-hover:text-ops-blue transition-colors">{featured.title}</h2>
                <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-ops-gray-400">
                  <span className="flex items-center gap-1.5"><User size={12} /> {featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {featured.readTime}</span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-4">
        <div className="container-max section-padding">
          <div className="flex flex-wrap gap-2 justify-center">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-ops-blue text-white shadow-lg shadow-ops-blue/20'
                    : 'bg-white dark:bg-ops-gray-900 text-ops-gray-600 dark:text-ops-gray-400 border border-ops-gray-200 dark:border-ops-gray-800 hover:border-ops-blue hover:text-ops-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog grid */}
      <section className="py-12 lg:py-16">
        <div className="container-max section-padding">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <Link to={`/insights/${p.slug}`} className="group block rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden card-hover h-full">
                  <BlogFeaturedImage category={p.category} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-ops-blue/10 text-ops-blue text-2xs font-semibold">{p.category}</span>
                      <span className="text-2xs text-ops-gray-400">{p.readTime}</span>
                    </div>
                    <h3 className="text-base font-semibold text-ops-black dark:text-white mb-2 group-hover:text-ops-blue transition-colors leading-snug">{p.title}</h3>
                    <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed line-clamp-3 mb-4">{p.excerpt}</p>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-ops-blue group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight size={14} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
