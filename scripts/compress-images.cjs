const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { execSync } = require('child_process');

// 압축 설정 (최대 압축률)
const COMPRESS_OPTIONS = {
  quality: 60, // WebP 품질 (0-100, 60으로 낮춰서 더 압축)
  effort: 6,   // 압축 노력도 (0-6, 6이 최대 압축)
  lossless: false, // 손실 압축으로 더 작은 파일 크기
  nearLossless: false, // 거의 무손실 비활성화로 더 압축
  smartSubsample: true, // 스마트 서브샘플링
  reductionEffort: 6, // 압축 노력도
  method: 6, // 압축 방법 (0-6, 6이 최대 압축)
  alphaQuality: 60, // 알파 채널 품질
  preset: 'photo' // 사진 최적화 프리셋
};

// 이미지 파일 확장자
const IMAGE_EXTENSIONS = ['*.png', '*.jpg', '*.jpeg', '*.PNG', '*.JPG', '*.JPEG'];

// 압축할 디렉토리
const ASSETS_DIR = 'public/assets';

// 통계
let totalOriginalSize = 0;
let totalCompressedSize = 0;
let processedFiles = 0;
let skippedFiles = 0;

// 디렉토리 생성 함수
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 파일 크기 계산
function getFileSize(filePath) {
  return fs.statSync(filePath).size;
}

// 이미지 압축 함수
async function compressImage(inputPath, outputPath) {
  try {
    const originalSize = getFileSize(inputPath);

    await sharp(inputPath)
      .webp(COMPRESS_OPTIONS)
      .toFile(outputPath);

    const compressedSize = getFileSize(outputPath);
    const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);

    console.log(`✅ ${path.relative(process.cwd(), inputPath)}`);
    console.log(`   ${(originalSize / 1024).toFixed(1)}KB → ${(compressedSize / 1024).toFixed(1)}KB (${compressionRatio}% 압축)`);

    totalOriginalSize += originalSize;
    totalCompressedSize += compressedSize;
    processedFiles++;

    return true;
  } catch (error) {
    console.error(`❌ 압축 실패: ${inputPath}`, error.message);
    return false;
  }
}

// 메인 압축 함수
async function compressAllImages() {
  console.log('🚀 이미지 압축을 시작합니다...\n');

  // 모든 이미지 파일 찾기 (find 명령어 사용)
  const findCommand = `find ${ASSETS_DIR} -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.PNG" -o -name "*.JPG" -o -name "*.JPEG"`;
  const imageFiles = execSync(findCommand, { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  console.log(`📁 발견된 이미지 파일: ${imageFiles.length}개\n`);

  // 각 이미지 압축
  for (const imagePath of imageFiles) {
    const parsedPath = path.parse(imagePath);
    const outputPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

    // WebP 파일이 이미 존재하는지 확인
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  건너뜀: ${path.relative(process.cwd(), imagePath)} (WebP 이미 존재)`);
      skippedFiles++;
      continue;
    }

    await compressImage(imagePath, outputPath);
  }

  // 결과 출력
  console.log('\n📊 압축 완료!');
  console.log(`처리된 파일: ${processedFiles}개`);
  console.log(`건너뛴 파일: ${skippedFiles}개`);
  console.log(`원본 크기: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`압축 크기: ${(totalCompressedSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`절약된 크기: ${((totalOriginalSize - totalCompressedSize) / 1024 / 1024).toFixed(2)}MB`);
  console.log(`전체 압축률: ${(((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100).toFixed(1)}%`);
}

// 스크립트 실행
if (require.main === module) {
  compressAllImages().catch(console.error);
}

module.exports = { compressAllImages, compressImage };
