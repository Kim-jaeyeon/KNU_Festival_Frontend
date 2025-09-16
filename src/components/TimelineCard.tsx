import React from 'react';

interface TimelineCardProps {
  time: string;
  title: string;
  description: string;
  isCurrent?: boolean;
  artistInfo?: {
    name: string;
    koreanName: string;
    color: 'blue' | 'pink';
  };
}

const TimelineCard: React.FC<TimelineCardProps> = ({ 
  time, 
  title, 
  description, 
  isCurrent = false,
  artistInfo 
}) => {
  return (
    <div className={`space-y-2 mt-1 hover:scale-[1.02] transition-all duration-200 ease-out ${
      !isCurrent ? 'opacity-50' : ''
    }`}>
      {/* 시간 표시 - 별도 박스 */}
      <div className="bg-[#F2FCF3] ring-1 ring-[#285100] ring-opacity-50 rounded-full px-3 py-2 mb-1 shadow-sm border border-gray-200 text-center">
        <span className="text-sm font-bold text-[#285100]">{time}</span>
      </div>
      
      {/* 내용 - 현재 이벤트일 때 하이라이트 */}
      <div className={`rounded-2xl p-4 ring-1 ring-[#285100] ring-opacity-50 shadow-lg transition-all duration-300 ${
        isCurrent ? 'bg-white/60 ring-1 ring-[#285100] ring-opacity-50' : 'bg-white/60'
      }`}>
        <div className="text-center">
          <h3 className="text-base font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
          
          {/* 연예인 정보 (있는 경우) */}
          {artistInfo && (
            <div className="mt-3 flex items-center justify-center space-x-3">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className={`w-full h-full bg-gradient-to-br ${
                    artistInfo.color === 'blue' 
                      ? 'from-blue-100 to-blue-200' 
                      : 'from-pink-100 to-pink-200'
                  } flex items-center justify-center`}>
                    <span className={`text-xs font-medium ${
                      artistInfo.color === 'blue' ? 'text-blue-600' : 'text-pink-600'
                    }`}>
                      {artistInfo.name}
                    </span>
                  </div>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-xs text-yellow-800">▶</span>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-800">{artistInfo.name}</h4>
                <p className="text-xs text-gray-600">{artistInfo.koreanName}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;
