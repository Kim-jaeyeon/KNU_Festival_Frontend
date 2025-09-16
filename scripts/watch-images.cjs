const chokidar = require('chokidar');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

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
const imageFilter = /\.(png|jpe?g)$/i;

// WebP 파일 생성 함수
async function generateWebP(inputPath) {
  try {
    const parsedPath = path.parse(inputPath);
    const webpPath = path.join(parsedPath.dir, `${parsedPath.name}.webp`);
    
    // WebP 파일이 이미 존재하고 더 최신이면 건너뜀
    if (fs.existsSync(webpPath)) {
      const inputStats = fs.statSync(inputPath);
      const webpStats = fs.statSync(webpPath);
      
      if (webpStats.mtime >= inputStats.mtime) {
        console.log(`⏭️  건너뜀: ${path.basename(inputPath)} (WebP 이미 최신)`);
        return;
      }
    }
    
    const originalSize = fs.statSync(inputPath).size;
    
    await sharp(inputPath)
      .webp(COMPRESS_OPTIONS)
      .toFile(webpPath);
    
    const compressedSize = fs.statSync(webpPath).size;
    const compressionRatio = ((originalSize - compressedSize) / originalSize * 100).toFixed(1);
    
    console.log(`🖼️  WebP 생성: ${path.basename(inputPath)} (${compressionRatio}% 압축)`);
  } catch (error) {
    console.error(`❌ WebP 생성 실패: ${inputPath}`, error.message);
  }
}

// 파일 감시 시작
function startWatching() {
  console.log('👀 이미지 파일 감시를 시작합니다...\n');
  
  const watcher = chokidar.watch('public/assets/**/*.{png,jpg,jpeg}', {
    ignored: /(^|[\/\\])\../, // 숨김 파일 무시
    persistent: true,
    ignoreInitial: false // 초기 스캔도 실행
  });
  
  watcher
    .on('add', (filePath) => {
      if (imageFilter.test(filePath)) {
        console.log(`📁 새 파일 감지: ${path.relative(process.cwd(), filePath)}`);
        generateWebP(filePath);
      }
    })
    .on('change', (filePath) => {
      if (imageFilter.test(filePath)) {
        console.log(`📝 파일 변경 감지: ${path.relative(process.cwd(), filePath)}`);
        generateWebP(filePath);
      }
    })
    .on('error', (error) => {
      console.error('❌ 감시 오류:', error);
    });
  
  // 종료 시 정리
  process.on('SIGINT', () => {
    console.log('\n🛑 이미지 감시를 종료합니다...');
    watcher.close();
    process.exit(0);
  });
}

// 스크립트 실행
if (require.main === module) {
  startWatching();
}

module.exports = { startWatching, generateWebP };
