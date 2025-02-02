import { Injectable } from '@nestjs/common';
import * as sharp from 'sharp';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ImageService {
  async optimizeImage(file: Express.Multer.File) {
    const outputFilename = `${Date.now()}-optimized.webp`;
    const outputPath = path.join(__dirname, '../../uploads', outputFilename);

    await sharp(file.buffer) // Utilise le buffer pour éviter le stockage temporaire
      .resize({ width: 2000 }) // Redimensionne à 1200px max
      .webp({ quality: 80 }) // Compression WebP qualité 80
      .toFile(outputPath);

    return { message: 'Image optimisée avec succès', path: outputPath };
  }
}
