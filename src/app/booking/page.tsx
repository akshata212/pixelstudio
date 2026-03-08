
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Calendar as CalendarIcon, Clock, ShieldCheck } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Please enter a valid phone number.' }),
  eventType: z.string({ required_error: 'Please select an event type.' }),
  date: z.string().min(1, { message: 'Please select a date.' }),
  message: z.string().optional(),
});

export default function BookingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // In a real app, this would save to Firestore
    setIsSubmitted(true);
    toast({
      title: 'Booking Inquiry Sent!',
      description: "We've received your request and will get back to you within 24 hours.",
    });
  }

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-24 min-h-screen flex items-center justify-center px-6">
        <div className="max-w-lg w-full glass p-12 rounded-[3rem] text-center animate-fade-in-up">
          <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 text-white shadow-xl shadow-primary/20">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-4xl font-headline font-bold mb-4">Thank You!</h2>
          <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
            Your booking request for a <strong>{form.getValues('eventType')}</strong> on <strong>{form.getValues('date')}</strong> has been sent successfully. Our studio coordinator will contact you shortly via phone or email.
          </p>
          <Button onClick={() => window.location.href = '/'} className="rounded-full px-10 py-6 h-auto text-lg">
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 min-h-screen bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold mb-8">Book Your <span className="text-primary">Shoot</span></h1>
          <p className="text-muted-foreground text-xl mb-12 leading-relaxed">
            Fill out the form to check availability and get a personalized quote for your session. We'd love to work with you!
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-primary">
                <CalendarIcon size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Check Availability</h4>
                <p className="text-muted-foreground">Select your preferred date and we'll confirm if we're free.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Fast Response</h4>
                <p className="text-muted-foreground">Our team typically responds to all inquiries within 2-4 business hours.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm text-accent">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-bold text-xl mb-2">Secure Booking</h4>
                <p className="text-muted-foreground">Your details are safe with us and will only be used for coordination.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[2.5rem] border-none shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="rounded-xl h-12 bg-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} className="rounded-xl h-12 bg-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} className="rounded-xl h-12 bg-white/50" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="eventType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Shoot Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="rounded-xl h-12 bg-white/50">
                            <SelectValue placeholder="Select event type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Wedding">Wedding</SelectItem>
                          <SelectItem value="Maternity">Maternity</SelectItem>
                          <SelectItem value="Baby">Baby / Newborn</SelectItem>
                          <SelectItem value="Portrait">Portrait</SelectItem>
                          <SelectItem value="Event">Event / Gala</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} className="rounded-xl h-12 bg-white/50" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Message (Optional)</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us more about your requirements..." 
                        className="rounded-xl bg-white/50 min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full rounded-full py-8 text-xl font-bold bg-accent hover:bg-accent/90 shadow-lg shadow-accent/20">
                Send Inquiry
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
