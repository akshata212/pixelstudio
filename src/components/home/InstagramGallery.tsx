
'use client';

import React from 'react';
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function InstagramGallery() {
  return (
    <section className="py-16 bg-muted/20 border-y">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-sm">
          <Instagram size={32} />
        </div>
        <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Follow Our Journey</h2>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl">
          Get behind-the-scenes glimpses, latest shoots, and creative inspiration. Join our community on Instagram for daily updates.
        </p>
        <Button asChild size="lg" className="rounded-full px-10 h-14 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] border-none text-white font-bold shadow-lg hover:opacity-90">
          <a href="https://instagram.com/pixel_studio_31" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Instagram size={20} />
            @pixel_studio_31
          </a>
        </Button>
      </div>
    </section>
  );
}
