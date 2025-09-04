import React from 'react';

const PhotoFestival: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#285100] mb-3">축제 사진 갤러리</h3>
            <p className="text-gray-600">축제 사진들이 여기에 표시됩니다.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#285100] mb-3">사진 업로드</h3>
            <p className="text-gray-600">사진 업로드 기능이 여기에 표시됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoFestival;
