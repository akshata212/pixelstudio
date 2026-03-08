'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Play, X, ExternalLink } from 'lucide-react';
import placeholderData from '@/app/lib/placeholder-images.json';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('motion-video');
  const [activeVideo, setActiveVideo] = useState<{ title: string; url: string } | null>(null);
  
  const categories = [
    { id: 'motion-video', name: 'Motion Video' },
    { id: 'video', name: 'Ad Video' },
    { id: 'graphics', name: 'Graphics' },
    { id: 'thumbnails', name: 'Thumbnails' },
    { id: 'podcasts', name: 'Podcasts' },
    { id: 'wedding', name: 'Wedding' },
  ];

  const portfolioItems = useMemo(() => {
    const rawData = placeholderData.placeholderImages;
    return rawData.filter((img: any) => img.id.startsWith('port-')).map((img: any) => {
      let category = 'other';
      let isVideo = false;
      
      if (img.id.includes('motion')) {
        category = 'motion-video';
        isVideo = true;
      } else if (img.id.includes('video')) {
        category = 'video';
        isVideo = true;
      } else if (img.id.includes('graphics')) {
        category = 'graphics';
      } else if (img.id.includes('thumb')) {
        category = 'thumbnails';
      } else if (img.id.includes('podcast')) {
        category = 'podcasts';
        isVideo = true;
      } else if (img.id.includes('wedding')) {
        category = 'wedding';
        isVideo = true;
      }

      return {
        id: img.id,
        category,
        title: img.description,
        img: img.imageUrl || null,
        hint: img.imageHint,
        isVideo: isVideo || !!img.videoUrl,
        videoUrl: img.videoUrl || null
      };
    });
  }, []);

  const filteredItems = useMemo(() => {
    return portfolioItems.filter(item => item.category === activeTab);
  }, [activeTab, portfolioItems]);

  const handleItemClick = (item: typeof portfolioItems[0]) => {
    if (item.isVideo && item.videoUrl) {
      setActiveVideo({ title: item.title, url: item.videoUrl });
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-muted/10">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-headline font-extrabold mb-6">Our <span className="text-primary">Portfolio</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Explore our diverse range of creative work across video production, graphics, and photography.
          </p>
          
          <div className="flex justify-center">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl">
              <TabsList className="bg-white p-1 rounded-full shadow-sm border h-auto flex-wrap justify-center gap-1">
                {categories.map((cat) => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    className="rounded-full px-4 sm:px-6 py-2 sm:py-2.5 data-[state=active]:bg-primary data-[state=active]:text-white transition-all font-medium text-xs sm:text-sm md:text-base whitespace-nowrap"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              onClick={() => handleItemClick(item)}
              className="relative group overflow-hidden rounded-3xl break-inside-avoid shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-black"
            >
              {item.isVideo && item.videoUrl ? (
                <div className="relative aspect-video bg-neutral-900 flex items-center justify-center">
                  <video
                    src={item.videoUrl}
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <Play size={40} className="text-white/50 group-hover:text-primary transition-colors" fill="currentColor" />
                  </div>
                </div>
              ) : item.img ? (
                <Image
                  src={item.img}
                  alt={item.title}
                  width={800}
                  height={1000}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110 bg-muted"
                  data-ai-hint={item.hint}
                />
              ) : (
                <div className="w-full aspect-[4/5] bg-muted flex items-center justify-center">
                   <p className="text-muted-foreground">Preview unavailable</p>
                </div>
              )}
              
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-white text-center">
                {item.isVideo && <Play size={48} className="mb-4 text-primary animate-pulse" fill="currentColor" />}
                <h3 className="text-xl sm:text-2xl font-headline font-bold mb-2">{item.title}</h3>
                <span className="bg-primary/80 px-4 py-1 rounded-full text-xs uppercase tracking-widest font-bold">
                  {item.category.replace('-', ' ')}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">
            <p className="text-xl">No projects found in this category yet.</p>
          </div>
        )}

        {/* Drive Link Section - Fully Responsive */}
        <section className="mt-16 sm:mt-24 py-12 sm:py-20 bg-white rounded-3xl sm:rounded-[3rem] border shadow-sm text-center px-4 sm:px-10 animate-fade-in-up">
          <h2 className="text-2xl sm:text-4xl font-headline font-bold mb-4">Want to See the <span className="text-primary">Full Archive</span>?</h2>
          <p className="text-muted-foreground mb-8 sm:mb-12 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
            We maintain a complete library of our high-resolution RAW footage, edited masters, and design source files on Google Drive for our clients to browse.
          </p>
          <Button asChild className="rounded-full w-full sm:w-auto px-6 sm:px-12 h-auto py-5 sm:py-7 text-lg sm:text-xl bg-accent hover:bg-accent/90 text-white font-bold shadow-xl shadow-accent/20 border-none group transition-all">
            <a href="https://drive.google.com/drive/u/0/mobile/folders/11JfVzUFwxMZgIBDyu6ETCrucGcQ4yXPg" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
              <ExternalLink size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              Open Google Drive
            </a>
          </Button>
        </section>
      </div>

      <Dialog open={!!activeVideo} onOpenChange={(open) => !open && setActiveVideo(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-none rounded-2xl sm:rounded-3xl group">
          <button 
            onClick={() => setActiveVideo(null)}
            className="absolute right-4 top-4 sm:right-6 sm:top-6 z-[60] bg-black/60 backdrop-blur-lg text-white p-2 rounded-full hover:bg-primary transition-all shadow-2xl border border-white/20"
            aria-label="Close video"
          >
            <X size={24} />
          </button>

          <DialogHeader className="p-4 sm:p-6 absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <DialogTitle className="text-white font-headline text-lg sm:text-xl pr-12">{activeVideo?.title}</DialogTitle>
          </DialogHeader>
          
          <div className="aspect-video w-full flex items-center justify-center bg-neutral-900">
            {activeVideo && (
              <video 
                src={activeVideo.url} 
                controls 
                autoPlay 
                className="w-full h-full"
              >
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          
          <DialogFooter className="p-4 bg-black/90 sm:justify-center">
            <Button 
              variant="outline" 
              className="rounded-full border-white/20 text-white hover:bg-white/10"
              onClick={() => setActiveVideo(null)}
            >
              Close Video
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
