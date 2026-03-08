'use server';
/**
 * @fileOverview An AI content generator for creating engaging descriptions and captions.
 *
 * - adminContentGenerator - A function that handles the content generation process.
 * - AdminContentGeneratorInput - The input type for the adminContentGenerator function.
 * - AdminContentGeneratorOutput - The return type for the adminContentGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AdminContentGeneratorInputSchema = z.object({
  itemType: z
    .enum(['image', 'service'])
    .describe('The type of item to generate content for (e.g., "image" or "service").'),
  itemTitle: z.string().describe('The title of the item (e.g., "Sunset Couple Photo", "Wedding Photography Package").'),
  itemDetails: z
    .string()
    .describe(
      'Detailed information about the item, including key aspects, emotions, and any specific keywords to include.'
    ),
});
export type AdminContentGeneratorInput = z.infer<typeof AdminContentGeneratorInputSchema>;

const AdminContentGeneratorOutputSchema = z.object({
  description: z.string().describe('An elegant and engaging description for the item.'),
  caption: z.string().describe('A concise and catchy caption suitable for social media or quick previews.'),
});
export type AdminContentGeneratorOutput = z.infer<typeof AdminContentGeneratorOutputSchema>;

export async function adminContentGenerator(
  input: AdminContentGeneratorInput
): Promise<AdminContentGeneratorOutput> {
  return adminContentGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'adminContentGeneratorPrompt',
  input: {schema: AdminContentGeneratorInputSchema},
  output: {schema: AdminContentGeneratorOutputSchema},
  prompt: `You are an AI-powered content generator for PixelStudio, a premium photo studio. Your task is to create engaging marketing copy.

Generate an elegant description and a concise, catchy caption for the following item. The tone should be premium, attractive, and vibrant, reflecting PixelStudio's brand with a colorful aesthetic.

Item Type: {{{itemType}}}
Item Title: {{{itemTitle}}}
Item Details: {{{itemDetails}}}

Ensure the generated content is high-quality, professional, and highlights the key aspects provided in the details.`,
});

const adminContentGeneratorFlow = ai.defineFlow(
  {
    name: 'adminContentGeneratorFlow',
    inputSchema: AdminContentGeneratorInputSchema,
    outputSchema: AdminContentGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
