
import Link from 'next/link';
import { Camera, Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  const driveUrl = "https://drive.google.com/drive/u/0/mobile/folders/11JfVzUFwxMZgIBDyu6ETCrucGcQ4yXPg";

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg text-primary-foreground">
                <Camera size={24} />
              </div>
              <span className="font-headline font-bold text-2xl tracking-tight text-white">
                Pixel<span className="text-primary">Studio</span>
              </span>
            </Link>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Capturing timeless moments with creativity and passion. Our studio provides high-quality photography services tailored to your needs.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/pixel_studio_31?igsh=aDl1ZzJldWQ3cGZ4" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li>
                <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                  Drive Archive <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services#wedding" className="hover:text-primary transition-colors">Wedding Photography</Link></li>
              <li><Link href="/services#maternity" className="hover:text-primary transition-colors">Maternity Shoot</Link></li>
              <li><Link href="/services#baby" className="hover:text-primary transition-colors">Baby Photography</Link></li>
              <li><Link href="/services#event" className="hover:text-primary transition-colors">Event Coverage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-secondary-foreground/70">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>A/P: Karve Tal: Walwa Dist: Sangali Maharashtra 415401</span>
              </li>
              <li className="flex gap-3 text-secondary-foreground/70">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+91 9607655428</span>
              </li>
              <li className="flex gap-3 text-secondary-foreground/70">
                <Mail className="text-primary shrink-0" size={20} />
                <span>pixelstudio6098@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-foreground/50 text-sm">
          <p>© {new Date().getFullYear()} PixelStudio. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
