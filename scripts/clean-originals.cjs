const fs = require('fs');
const path = require('path');
const { glob } = require('glob');
const { execSync } = require('child_process');

// 삭제할 이미지 확장자
const IMAGE_EXTENSIONS = ['*.png', '*.jpg', '*.jpeg', '*.PNG', '*.JPG', '*.JPEG'];

// assets 디렉토리
const ASSETS_DIR = 'public/assets';

// 통계
let deletedFiles = 0;
let totalDeletedSize = 0;

// 파일 크기 계산
function getFileSize(filePath) {
  return fs.statSync(filePath).size;
}

// 원본 파일 삭제 함수
async function cleanOriginalImages() {
  console.log('🧹 원본 이미지 파일 삭제를 시작합니다...\n');

  // 모든 이미지 파일 찾기 (find 명령어 사용)
  const findCommand = `find ${ASSETS_DIR} -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.PNG" -o -name "*.JPG" -o -name "*.JPEG"`;
  const imageFiles = execSync(findCommand, { encoding: 'utf8' })
    .trim()
    .split('\n')
    .filter(file => file.length > 0);

  console.log(`📁 발견된 원본 이미지 파일: ${imageFiles.length}개\n`);

  // 각 이미지 파일 확인 및 삭제
  for (const imagePath of imageFiles) {
    const parsedPath = path.parse(imagePath);
    const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);

    // WebP 파일이 존재하는지 확인
    if (fs.existsSync(webpPath)) {
      const fileSize = getFileSize(imagePath);

      try {
        fs.unlinkSync(imagePath);
        console.log(`🗑️  삭제됨: ${path.relative(process.cwd(), imagePath)} (${(fileSize / 1024).toFixed(1)}KB)`);
        deletedFiles++;
        totalDeletedSize += fileSize;
      } catch (error) {
        console.error(`❌ 삭제 실패: ${imagePath}`, error.message);
      }
    } else {
      console.log(`⚠️  건너뜀: ${path.relative(process.cwd(), imagePath)} (WebP 파일 없음)`);
    }
  }

  // 결과 출력
  console.log('\n📊 삭제 완료!');
  console.log(`삭제된 파일: ${deletedFiles}개`);
  console.log(`절약된 크기: ${(totalDeletedSize / 1024 / 1024).toFixed(2)}MB`);
}

// 스크립트 실행
if (require.main === module) {
  cleanOriginalImages().catch(console.error);
}

module.exports = { cleanOriginalImages };
