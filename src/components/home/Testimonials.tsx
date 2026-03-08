
'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Quote, Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Bride',
      text: 'PixelStudio captured our wedding day perfectly. The photos are vibrant and tell our story better than we could have imagined. Truly professional team!',
      rating: 5
    },
    {
      name: 'David Wilson',
      role: 'Corporate Client',
      text: 'We hired them for our annual gala, and the results were stunning. They captured the atmosphere perfectly without being intrusive.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'New Mother',
      text: 'The newborn session was so gentle and calm. They handled our baby with such care, and the resulting photos are pure art.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-5xl font-headline font-bold mb-20">Voices of Our <span className="text-primary">Happy Clients</span></h2>
        
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="glass border-none h-full p-8 relative">
                  <Quote className="absolute top-6 right-6 text-primary/10 w-20 h-20" />
                  <CardContent className="p-0">
                    <div className="flex gap-1 mb-6">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-lg italic text-muted-foreground mb-8 relative z-10">"{t.text}"</p>
                    <div>
                      <h4 className="font-headline font-bold text-xl">{t.name}</h4>
                      <p className="text-primary font-medium">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-12 gap-4">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
