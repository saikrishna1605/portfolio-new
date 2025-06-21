// src/ai/flows/generate-og-image.ts
'use server';

/**
 * @fileOverview Dynamically generates Open Graph (OG) images for projects, using AI to intelligently select technologies to highlight based on project content.
 *
 * - generateOgImage - A function that generates the OG image.
 * - GenerateOgImageInput - The input type for the generateOgImage function.
 * - GenerateOgImageOutput - The return type for the generateOgImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateOgImageInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  projectDescription: z.string().describe('A brief description of the project.'),
  technologiesUsed: z.array(z.string()).describe('An array of technologies used in the project.'),
});
export type GenerateOgImageInput = z.infer<typeof GenerateOgImageInputSchema>;

const GenerateOgImageOutputSchema = z.object({
  ogImageUrl: z.string().describe('The data URI of the generated Open Graph image.'),
});
export type GenerateOgImageOutput = z.infer<typeof GenerateOgImageOutputSchema>;

export async function generateOgImage(input: GenerateOgImageInput): Promise<GenerateOgImageOutput> {
  return generateOgImageFlow(input);
}

const selectTechnologiesTool = ai.defineTool({
  name: 'selectTechnologies',
  description: 'Selects the most relevant technologies to highlight in the OG image based on the project description.',
  inputSchema: z.object({
    projectDescription: z.string().describe('A detailed description of the project.'),
    technologiesUsed: z.array(z.string()).describe('An array of technologies used in the project.'),
  }),
  outputSchema: z.array(z.string()).describe('An array of selected technologies to highlight.'),
}, async (input) => {
  // This is a placeholder implementation; replace with actual logic.
  // In a real application, this would use an LLM to select the technologies.
  // For now, just return the first three technologies.
  return input.technologiesUsed.slice(0, 3);
});

const ogImagePrompt = ai.definePrompt({
  name: 'ogImagePrompt',
  input: {schema: GenerateOgImageInputSchema},
  output: {schema: GenerateOgImageOutputSchema},
  tools: [selectTechnologiesTool],
  prompt: `You are an expert in generating Open Graph images for portfolio projects.

  Given the project title, description, and technologies used, your task is to generate a data URI for an image that will be used as the OG image for the project.
  First, use the selectTechnologies tool to pick the best technologies to display in the image.

  Project Title: {{{projectTitle}}}
  Project Description: {{{projectDescription}}}
  Technologies Used: {{#each technologiesUsed}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  The OG image should highlight the selected technologies in a visually appealing manner.
  Ensure the image is a data URI with the correct MIME type and Base64 encoding.

  {{#each (await selectTechnologiesTool projectDescription technologiesUsed)}}
  Highlight Technology: {{{this}}}
  {{/each}}

  Generate the OG image data URI now:
  `,
});

const generateOgImageFlow = ai.defineFlow(
  {
    name: 'generateOgImageFlow',
    inputSchema: GenerateOgImageInputSchema,
    outputSchema: GenerateOgImageOutputSchema,
  },
  async input => {
    const selectedTechnologies = await selectTechnologiesTool({
      projectDescription: input.projectDescription,
      technologiesUsed: input.technologiesUsed,
    });

    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-exp',
      prompt: [
        {
          text: `Generate a visually appealing Open Graph image for a project titled '${input.projectTitle}'. The project uses the following technologies: ${selectedTechnologies.join(', ')}. The project is described as: ${input.projectDescription}.`,
        },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    return {ogImageUrl: media.url!};
  }
);
