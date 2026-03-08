
import { HeroSlider } from '@/components/home/HeroSlider';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { Testimonials } from '@/components/home/Testimonials';
import { InstagramGallery } from '@/components/home/InstagramGallery';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSlider />
      
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6">Why Choose <span className="text-primary">PixelStudio</span>?</h2>
        <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-16 leading-relaxed">
          We combine cutting-edge technology with creative artistry to deliver stunning visuals that tell your unique story. From intimate portraits to grand celebrations, we capture the essence of every moment.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { title: 'Premium Quality', desc: 'High-resolution professional grade equipment and post-processing.' },
            { title: 'Expert Team', desc: 'Years of experience across various photography styles and events.' },
            { title: 'Quick Turnaround', desc: 'Delivery of your professionally edited memories in record time.' }
          ].map((feature, i) => (
            <div key={i} className="glass p-10 rounded-3xl hover:translate-y-[-10px] transition-transform duration-300">
              <div className="w-16 h-16 bg-primary/10 text-primary flex items-center justify-center rounded-2xl mx-auto mb-6">
                <span className="text-2xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-2xl font-headline font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <ServicesPreview />
      <Testimonials />
      <InstagramGallery />

      <section className="py-24 bg-secondary text-secondary-foreground text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-8 text-white">Ready to capture your story?</h2>
          <p className="text-white/70 text-lg mb-12">
            Book your session today and let's create something beautiful together. Our slots fill up fast!
          </p>
          <Button asChild size="lg" className="rounded-full bg-accent hover:bg-accent/90 text-white px-12 h-16 text-xl">
            <Link href="/booking">Get a Quote</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
