
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-headline font-extrabold mb-6">Get in <span className="text-primary">Touch</span></h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have questions? We're here to help. Reach out to us through any of the channels below or visit our studio.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Phone</h3>
            <p className="text-muted-foreground mb-2">Mon-Sat: 10am to 8pm</p>
            <p className="text-xl font-bold text-foreground">+91 9607655428</p>
          </div>

          <div className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Email</h3>
            <p className="text-muted-foreground mb-2">General inquiries</p>
            <p className="text-xl font-bold text-foreground">pixelstudio@gmail.com</p>
          </div>

          <div className="glass p-10 rounded-[2.5rem] flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-accent/10 text-accent rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Studio Location</h3>
            <p className="text-muted-foreground mb-2">Visit us at</p>
            <p className="text-lg font-bold text-foreground px-4">A/P: Karve Tal: Walwa Dist: Sangali Maharashtra 415401</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-headline font-bold">Studio Working Hours</h2>
            <div className="space-y-4">
              {[
                { day: 'Monday - Saturday', time: '10:00 AM - 8:00 PM' },
                { day: 'Sunday', time: 'By Appointment Only' }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center p-6 bg-white rounded-2xl shadow-sm">
                  <span className="font-bold flex items-center gap-3">
                    <Clock size={20} className="text-primary" />
                    {item.day}
                  </span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="pt-6">
              <h3 className="text-xl font-headline font-bold mb-6">Follow Our Work</h3>
              <div className="flex gap-4">
                <a href="#" className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm hover:text-primary transition-colors">
                  <Instagram size={20} />
                  <span className="font-bold">Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-sm hover:text-primary transition-colors">
                  <Facebook size={20} />
                  <span className="font-bold">Facebook</span>
                </a>
              </div>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.378931135431!2d74.1923235!3d17.0232454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc17565457ef451%3A0x644c68832a8f331!2sKarve%2C%20Maharashtra%20415401!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
