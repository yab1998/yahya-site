import type { ImageMetadata } from 'astro';
import { getImage } from 'astro:assets';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{jpg,jpeg,png}', { eager: true });

/** Look up an image in src/assets by its relative path, e.g. "covers/HiatusCoverV1.jpg". */
export function img(path: string): ImageMetadata {
  const m = all['/src/assets/' + path];
  if (!m) throw new Error(`Missing image: src/assets/${path}`);
  return m.default;
}

/** A single optimized URL (for the lightbox / audio covers). */
export async function url(path: string, width = 1400) {
  const r = await getImage({ src: img(path), width, format: 'webp' });
  return r.src;
}
