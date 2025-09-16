import { createFilter } from 'vite';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// 압축 설정
const COMPRESS_OPTIONS = {
  quality: 80,
  effort: 6,
  lossless: false,
  nearLossless: true,
  smartSubsample: true,
  reductionEffort: 6
};

// 이미지 파일 필터
const imageFilter = createFilter(/\.(png|jpe?g)$/i);

// WebP 파일 생성 함수
async function generateWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp(COMPRESS_OPTIONS)
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const compressedSize = fs.statSync(outputPath).size;
    const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`🖼️  WebP 생성: ${path.basename(inputPath)} (${compressionRatio}% 압축)`);
    return true;
  } catch (error) {
    console.error(`❌ WebP 생성 실패: ${inputPath}`, error.message);
    return false;
  }
}

// Vite 플러그인
export function imageCompressPlugin() {
  return {
    name: 'image-compress',
    buildStart() {
      console.log('🚀 이미지 자동 압축 플러그인이 활성화되었습니다.');
    },
    async load(id) {
      // 이미지 파일인지 확인
      if (!imageFilter(id)) return null;
      
      const parsedPath = path.parse(id);
      const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
      
      // WebP 파일이 없으면 생성
      if (!fs.existsSync(webpPath)) {
        await generateWebP(id, webpPath);
      }
      
      return null;
    }
  };
}
