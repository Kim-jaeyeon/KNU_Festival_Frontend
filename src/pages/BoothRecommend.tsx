import React from 'react';

const BoothRecommend: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#285100] mb-3">인기 부스</h3>
            <p className="text-gray-600">추천 부스 목록이 여기에 표시됩니다.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#285100] mb-3">카테고리별 부스</h3>
            <p className="text-gray-600">카테고리별 부스 정보가 여기에 표시됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothRecommend;
