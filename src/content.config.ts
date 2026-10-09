import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number(),
    summary: z.string(),           // one-line: what it is + the result
    role: z.string(),
    lane: z.string(),              // what this project proves
    team: z.string().optional(),
    timeline: z.string().optional(),
    tools: z.string().optional(),
    cover: image(),
    coverAlt: z.string(),
    loop: z.string().optional(),
    hover: z.string().optional(),
    heroLoop: z.string().optional(), // case-study header loop (defaults to loop)    // mp4 that plays while the card is hovered     // muted looping mp4 shown over the cover
    status: z.enum(['ready', 'draft', 'soon']).default('draft'),
    description: z.string(),       // meta description
  }),
});

export const collections = { work };
