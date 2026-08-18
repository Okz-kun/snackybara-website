import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const menuItems = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/menuItems' }),
  schema: ({ image }) =>
    z.object({
      name:        z.string(),
      category:    z.enum([
        'Snacky Bites',
        'Rice Meals',
        'Pasta',
        'Cozy Coffee',
        'Frappes',
        'Milkteas',
        'Bara Bundles',
        'Desserts',
      ]),
      description: z.string(),
      image:       image(),
      badge:       z.string().optional(),
      available:   z.boolean().default(true),
    }),
});

export const collections = { menuItems };
