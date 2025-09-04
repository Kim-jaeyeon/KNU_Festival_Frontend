import React from 'react';

const BoothAndFoodTruck: React.FC = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#285100] mb-3">부스 정보</h3>
            <p className="text-gray-600">각 부스의 상세 정보가 여기에 표시됩니다.</p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold text-[#285100] mb-3">푸드트럭 정보</h3>
            <p className="text-gray-600">푸드트럭 메뉴와 위치 정보가 여기에 표시됩니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoothAndFoodTruck;
