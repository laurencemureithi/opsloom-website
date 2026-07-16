import { useState } from 'react';
import { Play, X, Clock, ArrowRight, ListVideo } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import Reveal from '../components/Reveal';
import { videos, eabcModules, featuredPlaylist, VideoItem, VideoModule } from '../data/videos';

function VideoModal({ video, onClose }: { video: VideoItem | VideoModule; onClose: () => void }) {
  const videoId = 'videoId' in video ? video.videoId : '';
  const title = video.title;
  const description = video.description;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors flex items-center gap-2 text-sm"
        >
          Close <X size={18} />
        </button>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-sm text-white/70 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Videos() {
  const [selected, setSelected] = useState<VideoItem | VideoModule | null>(null);

  return (
    <div>
      <PageHero
        badge="Video Library"
        title={<>Learn manufacturing, <span className="gradient-text">visually</span></>}
        subtitle="Watch demos, tutorials, and insights on manufacturing digital transformation, AI, maintenance management, and operational excellence."
      />

      {/* Featured Playlist */}
      <section className="py-12 lg:py-16">
        <div className="container-max section-padding">
          <Reveal>
            <div className="flex items-center gap-2 mb-6">
              <ListVideo size={22} className="text-ops-blue" />
              <h2 className="text-xl font-bold text-ops-black dark:text-white">Featured Playlist</h2>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-ops-blue/5 to-ops-blue-light/5 border border-ops-blue/20">
              <button
                onClick={() => setSelected({ videoId: featuredPlaylist.videoId, title: featuredPlaylist.title, description: featuredPlaylist.description, thumbnail: featuredPlaylist.thumbnail, id: 'pl', duration: '', category: '' } as VideoItem)}
                className="group relative aspect-video rounded-2xl overflow-hidden bg-ops-gray-100 dark:bg-ops-gray-800"
              >
                <img
                  src={featuredPlaylist.thumbnail}
                  alt={featuredPlaylist.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-ops-blue group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Play size={28} className="text-ops-blue group-hover:text-white ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/70 text-white text-2xs font-semibold flex items-center gap-1.5">
                  <ListVideo size={11} /> Playlist
                </div>
              </button>
              <div className="flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-ops-black dark:text-white mb-3">{featuredPlaylist.title}</h3>
                <p className="text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-6">{featuredPlaylist.description}</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={featuredPlaylist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Watch on YouTube <ArrowRight size={16} />
                  </a>
                  <button
                    onClick={() => setSelected({ videoId: featuredPlaylist.videoId, title: featuredPlaylist.title, description: featuredPlaylist.description, thumbnail: featuredPlaylist.thumbnail, id: 'pl', duration: '', category: '' } as VideoItem)}
                    className="btn-secondary"
                  >
                    Play First Video
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="py-12 lg:py-16">
        <div className="container-max section-padding">
          <Reveal>
            <h2 className="text-xl font-bold text-ops-black dark:text-white mb-6">Featured Videos</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <Reveal key={video.id} delay={(i % 3) * 80}>
                <div className="group rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden card-hover">
                  <button
                    onClick={() => setSelected(video)}
                    className="relative w-full aspect-video overflow-hidden bg-ops-gray-100 dark:bg-ops-gray-800"
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-ops-blue group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Play size={24} className="text-ops-blue group-hover:text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                    {video.duration && (
                      <div className="absolute bottom-3 right-3 px-2 py-1 rounded-md bg-black/70 text-white text-2xs font-medium flex items-center gap-1">
                        <Clock size={10} /> {video.duration}
                      </div>
                    )}
                  </button>
                  <div className="p-5">
                    <span className="px-2 py-0.5 rounded-full bg-ops-blue/10 text-ops-blue text-2xs font-semibold mb-3 inline-block">
                      {video.category}
                    </span>
                    <h3 className="text-base font-semibold text-ops-black dark:text-white mb-2 leading-snug">{video.title}</h3>
                    <p className="text-sm text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed mb-4 line-clamp-2">{video.description}</p>
                    <button
                      onClick={() => setSelected(video)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-ops-blue hover:gap-2.5 transition-all"
                    >
                      Watch Video <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EABC System Modules */}
      <section className="py-12 lg:py-24 bg-ops-gray-50 dark:bg-ops-gray-950 border-y border-ops-gray-200 dark:border-ops-gray-800">
        <div className="container-max section-padding">
          <Reveal>
            <div className="max-w-2xl mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ops-blue/10 text-ops-blue text-xs font-semibold mb-4">
                EABC System Modules
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-ops-black dark:text-white leading-tight">
                Explore the EABC Manufacturing Management System, module by module
              </h2>
              <p className="mt-4 text-base text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed">
                Each module of the EABC system addresses a specific manufacturing operations need. Watch the demonstrations to see how they work together.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {eabcModules.map((mod, i) => (
              <Reveal key={mod.id} delay={(i % 4) * 70}>
                <div className="group rounded-2xl bg-white dark:bg-ops-gray-900 border border-ops-gray-200 dark:border-ops-gray-800 overflow-hidden card-hover">
                  <button
                    onClick={() => setSelected(mod)}
                    className="relative w-full aspect-video overflow-hidden bg-ops-gray-100 dark:bg-ops-gray-800"
                  >
                    <img
                      src={mod.thumbnail}
                      alt={mod.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:bg-ops-blue group-hover:scale-110 transition-all duration-300 shadow-lg">
                        <Play size={20} className="text-ops-blue group-hover:text-white ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 w-7 h-7 rounded-lg bg-ops-blue text-white text-xs font-bold flex items-center justify-center shadow-lg">
                      {mod.order}
                    </div>
                  </button>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-ops-black dark:text-white mb-1.5 leading-snug">{mod.title}</h3>
                    <p className="text-xs text-ops-gray-500 dark:text-ops-gray-400 leading-relaxed line-clamp-2 mb-3">{mod.description}</p>
                    <button
                      onClick={() => setSelected(mod)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-ops-blue hover:gap-2 transition-all"
                    >
                      Watch <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ops-blue to-ops-blue-dark" />
        <div className="absolute inset-0 hero-grid opacity-10" />
        <div className="container-max section-padding relative">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Want a personalized demo?</h2>
            <p className="text-white/80 mb-8">See our solutions in action, tailored to your specific manufacturing challenges.</p>
            <Link to="/book-a-demo" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-ops-blue font-semibold text-sm hover:bg-ops-gray-100 transition-all duration-300 hover:-translate-y-0.5 shadow-lg">
              Book a Demo <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {selected && <VideoModal video={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}
