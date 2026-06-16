import type { VercelRequest, VercelResponse } from '@vercel/node';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const TAG = 'neicy_gallery';

function buildImageUrl(publicId: string, format: string) {
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/q_auto,f_auto/${publicId}.${format}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    try {
      const result = await cloudinary.search
        .expression(`tags:${TAG}`)
        .sort_by('created_at', 'desc')
        .max_results(500)
        .execute();

      const images = result.resources.map((r: any) => ({
        public_id: r.public_id,
        format: r.format,
        url: buildImageUrl(r.public_id, r.format),
        alt: r.public_id,
      }));

      return res.status(200).json({ images });
    } catch (err) {
      console.error('Cloudinary GET error:', err);
      return res.status(500).json({ error: 'Failed to fetch images' });
    }
  }

  if (req.method === 'DELETE') {
    const { public_id } = req.body as { public_id?: string };
    if (!public_id) {
      return res.status(400).json({ error: 'public_id required' });
    }

    try {
      await cloudinary.uploader.remove_tag(TAG, [public_id]);
      return res.status(200).json({ success: true });
    } catch (err) {
      console.error('Cloudinary DELETE error:', err);
      return res.status(500).json({ error: 'Failed to remove tag' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}