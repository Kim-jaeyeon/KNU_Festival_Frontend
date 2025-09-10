import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PhotoUpload: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      alert('사진을 선택해주세요.');
      return;
    }
 
    // 성공 후 포토페스티벌 페이지로 이동
    navigate('/photo-festival');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* 배경 패턴 - 잎사귀 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-4 w-6 h-6 bg-green-300 rounded-full"></div>
        <div className="absolute top-24 right-8 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute top-40 left-12 w-3 h-3 bg-green-200 rounded-full"></div>
        <div className="absolute top-56 right-16 w-5 h-5 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-32 left-8 w-4 h-4 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-20 right-12 w-6 h-6 bg-green-200 rounded-full"></div>
      </div>

      {/* 나비 아이콘들 */}
      <div className="absolute top-24 left-8 w-6 h-6 text-white opacity-70">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
      <div className="absolute top-56 right-12 w-5 h-5 text-white opacity-50">
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>

      {/* 하단 장식 - 정원 테마 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-green-200 to-transparent">
        <div className="absolute bottom-2 left-6 w-8 h-8 bg-green-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-4 right-10 w-6 h-6 bg-green-400 rounded-full opacity-50"></div>
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-green-200 rounded-full opacity-40"></div>
        <div className="absolute bottom-8 right-6 w-4 h-4 bg-green-300 rounded-full opacity-30"></div>
      </div>
      
      {/* HORTUS 로고 */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-green-300 text-xs opacity-70 font-light">
        HORTUS
      </div>

      <div className="relative z-10 pt-20 px-6 pb-8">
        {/* 닉네임 입력 */}
        <div className="mb-6">
          <label className="block text-green-800 font-semibold mb-2 text-sm">
            닉네임
          </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="5글자 내로 입력"
            maxLength={5}
            className="w-full px-4 py-3 bg-white/60 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 text-sm"
          />
        </div>

        {/* 사진 선택 */}
        <div className="mb-6">
          <label className="block text-green-800 font-semibold mb-2 text-sm">
            사진 선택
          </label>
          <div className="relative">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="w-full px-4 py-3 bg-white/80 rounded-2xl text-gray-700 cursor-pointer hover:bg-white/80 focus-within:ring-2 focus-within:ring-green-400 transition-all duration-300 text-sm flex items-center justify-center">
              {imagePreview ? (
                <div className="flex items-center space-x-3">
                  <img src={imagePreview} alt="미리보기" className="w-12 h-12 object-cover rounded-lg" />
                  <span className="text-green-600">사진이 선택되었습니다</span>
                </div>
              ) : (
                <span className="text-gray-500">사진 선택하기</span>
              )}
            </div>
          </div>
        </div>

        {/* 내용 입력 */}
        <div className="mb-8">
          <label className="block text-green-800 font-semibold mb-2 text-sm">
            내용
          </label>
          <textarea
         
            placeholder="사진에 대한 설명을 50자 이내로 입력해주세요"
            rows={4}
            className="w-full px-4 py-3 bg-white/60 rounded-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 resize-none text-sm"
          />
        </div>

        {/* 등록 버튼 */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-white/80  rounded-2xl text-green-800 font-semibold hover:bg-green-200 transition-colors text-sm"
        >
          사진 업로드
        </button>
      </div>
    </div>
  );
};

export default PhotoUpload;
