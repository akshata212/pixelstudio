import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ServicesPreview() {
  const services = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      desc: 'Capture the magic of your special day with our cinematic approach.',
      img: PlaceHolderImages.find(img => img.id === 'service-wedding')?.imageUrl || 'https://picsum.photos/seed/default-wedding/800/600'
    },
    {
      id: 'maternity',
      title: 'Maternity Shoot',
      desc: 'Celebrate the beautiful journey of motherhood with elegant portraits.',
      img: PlaceHolderImages.find(img => img.id === 'service-maternity')?.imageUrl || 'https://picsum.photos/seed/default-maternity/800/600'
    },
    {
      id: 'baby',
      title: 'Baby Photography',
      desc: 'Precious moments of your little ones captured forever.',
      img: PlaceHolderImages.find(img => img.id === 'service-baby')?.imageUrl || 'https://picsum.photos/seed/default-baby/800/600'
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-left">
            <h2 className="text-primary font-bold uppercase tracking-widest mb-4">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-headline font-bold">What We Do Best</h3>
          </div>
          <Button asChild variant="link" className="text-primary font-bold text-lg hover:no-underline">
            <Link href="/services">View All Services →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="group relative overflow-hidden rounded-3xl bg-white shadow-lg h-[500px]">
              <Image
                src={service.img}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white transform transition-transform duration-300 translate-y-4 group-hover:translate-y-0">
                <h4 className="text-2xl font-headline font-bold mb-3">{service.title}</h4>
                <p className="text-white/80 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
                <Button asChild variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black">
                  <Link href={`/services#${service.id}`}>Learn More</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
