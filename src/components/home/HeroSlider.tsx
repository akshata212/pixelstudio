
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const slides = PlaceHolderImages.filter(img => img.id.startsWith('hero-'));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.length > 0 ? slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={slide.imageUrl}
            alt={slide.description}
            fill
            className="object-cover"
            priority={index === 0}
            data-ai-hint={slide.imageHint}
          />
        </div>
      )) : (
        <div className="absolute inset-0 bg-muted" />
      )}

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl font-headline font-extrabold mb-6 tracking-tight drop-shadow-2xl animate-fade-in-up">
          Capturing Your <span className="text-primary">Perfect</span> Moments
        </h1>
        <p className="text-white/90 text-lg md:text-2xl max-w-2xl mb-10 font-medium drop-shadow-lg animate-fade-in-up delay-200">
          Professional photography services that bring your vision to life with vibrant colors and artistic precision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
          <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 h-14 text-lg shadow-xl shadow-accent/20">
            <Link href="/booking">Book Your Shoot</Link>
          </Button>
          <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white px-10 h-14 text-lg shadow-xl shadow-primary/20 border-none">
            <Link href="/portfolio">View Portfolio</Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all hidden md:block"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm transition-all hidden md:block"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? 'bg-primary w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
