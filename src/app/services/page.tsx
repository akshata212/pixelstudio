
import React from 'react';
import { Button } from '@/components/ui/button';
import { Camera, Heart, Users, Calendar, Baby, PartyPopper, MessageCircle } from 'lucide-react';

export default function ServicesPage() {
  const whatsappNumber = '919607655428';

  const services = [
    {
      id: 'wedding',
      title: 'Wedding Photography',
      icon: <Heart className="w-10 h-10" />,
      //price: 'Starting from ₹45,000',
      description: 'Comprehensive coverage of your special day, from bridal prep to the final dance. We focus on candid moments and cinematic storytelling.',
      features: ['2 Photographers', 'High-Res Digital Gallery', 'Professional Retouching', 'Engagement Session included'],
      color: 'bg-primary'
    },
    {
      id: 'pre-wedding',
      title: 'Pre-Wedding Shoot',
      icon: <Users className="w-10 h-10" />,
      //price: 'Starting from ₹15,000',
      description: 'Creative and romantic shoots at stunning locations to celebrate your engagement.',
      features: ['Multi-location shoot', '3 Outfits permitted', 'Save-the-date video clip', 'Artistic color grading'],
      color: 'bg-secondary'
    },
    {
      id: 'birthday',
      title: 'Birthday Shoot',
      icon: <PartyPopper className="w-10 h-10" />,
     // price: 'Starting from ₹8,000',
      description: 'Capturing the joy and celebration of life milestones for all ages.',
      features: ['Themed setups', 'Candid celebration shots', 'Digital delivery in 48 hours', 'Print packages available'],
      color: 'bg-accent'
    },
    {
      id: 'maternity',
      title: 'Maternity Shoot',
      icon: <Calendar className="w-10 h-10" />,
      //price: 'Starting from ₹12,000',
      description: 'Ethereal and elegant photography celebrating the beauty of motherhood.',
      features: ['Studio or Outdoor', 'Gown rentals available', 'Husband & Siblings included', 'Soft-touch retouching'],
      color: 'bg-primary'
    },
    {
      id: 'baby',
      title: 'Baby Photography',
      icon: <Baby className="w-10 h-10" />,
      price: '',
      description: 'Newborn and infant photography in a safe, warm, and creative environment.',
      features: ['Safety certified photographer', 'Props and wraps provided', 'Home or Studio sessions', 'Milestone packages'],
      color: 'bg-secondary'
    },
    {
      id: 'event',
      title: 'Event Photography',
      icon: <Camera className="w-10 h-10" />,
      price: '',
      description: 'Professional coverage for corporate events, galas, and community gatherings.',
      features: ['Fast delivery', 'Online gallery for guests', 'Commercial usage rights', 'On-site printing option'],
      color: 'bg-accent'
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold mb-6">Our <span className="text-primary">Expertise</span></h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Choose from our specialized photography packages designed to capture every significant moment in your life.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const message = encodeURIComponent(`Hi PixelStudio! I'm interested in booking the ${service.title} package (${service.price}). Please let me know the availability.`);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

            return (
              <div key={service.id} id={service.id} className="glass p-8 rounded-[2.5rem] flex flex-col border-none shadow-sm hover:shadow-2xl transition-all duration-300">
                <div className={`${service.color} w-20 h-20 rounded-3xl text-white flex items-center justify-center mb-8 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-3xl font-headline font-bold mb-4">{service.title}</h3>
                <p className="text-primary font-bold mb-6 text-xl">{service.price}</p>
                <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-4 mb-10">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm font-medium">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="rounded-full w-full py-6 h-auto text-lg bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center gap-2 border-none">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={20} />
                    Book via WhatsApp
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
