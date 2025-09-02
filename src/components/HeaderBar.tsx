import { useNavigate } from "react-router-dom";
import type { ReactNode } from "react";

type HeaderBarProps = {
    title?: ReactNode;
    showBack?: boolean;
    onBack?: () => void;
    right?: ReactNode;
    className?: string;
};

export default function HeaderBar({
    title,
    showBack = true,
    onBack,
    right,
    className = "",
}: HeaderBarProps) {
    const nav = useNavigate();
    const handleBack = onBack ?? (() => nav(-1));

    return (
        <header className={`sticky top-0 z-20 bg-transparent ${className}`}>
            {/* 상태바 높이 확보 */}
            <div className="h-[54px] w-full pointer-events-none" aria-hidden />

            {/* 실제 헤더 */}
            <div className="flex items-center justify-between h-[54px] px-3">
                {/* Left: 뒤로가기 */}
                <div className="flex items-center justify-start">
                    {showBack && (
                        <button
                            aria-label="back"
                            onClick={handleBack}
                            className="ml-[19px] bg-transparent border-0 p-0 flex items-center justify-center"
                            style={{ width: "35px", height: "35px" }} // ✅ 아이콘 박스 사이즈 고정
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="35"
                                viewBox="0 0 35 35"
                                fill="none"
                                className="flex-shrink-0"
                            >
                                <path
                                    d="M15.75 17.5L22.4583 24.2083L20.4166 26.25L11.6666 17.5L20.4166 8.75L22.4583 10.7917L15.75 17.5Z"
                                    fill="#285100"
                                />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Center: 제목 */}
                <h1
                    className="flex-1 min-w-0 text-center text-[20px] font-bold leading-[1.2] tracking-normal text-emerald-900/90 overflow-hidden text-ellipsis"
                    style={{ fontFamily: '"Hahmlet", serif' }}
                >
                    {title}
                </h1>

                {/* Right: 메뉴 */}
                <div className="flex items-center justify-end">
                    {right ?? (
                        <button
                            aria-label="menu"
                            className="mr-[33px] bg-transparent border-0 p-0 flex items-center justify-center"
                            style={{ width: "35px", height: "34px" }} // ✅ 아이콘 박스 크기 고정
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="35"
                                height="34"
                                viewBox="0 0 35 34"
                                fill="none"
                                className="flex-shrink-0"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.05243 29.092C7.18811 31.1666 10.6254 31.1666 17.5001 31.1666C24.3747 31.1666 27.8121 31.1666 29.9477 29.092C32.0834 27.0173 32.0834 23.6782 32.0834 17C32.0834 10.3217 32.0834 6.98263 29.9477 4.90797C27.8121 2.83331 24.3747 2.83331 17.5001 2.83331C10.6254 2.83331 7.18811 2.83331 5.05243 4.90797C2.91675 6.98263 2.91675 10.3217 2.91675 17C2.91675 23.6782 2.91675 27.0173 5.05243 29.092ZM27.3438 22.6666C27.3438 23.2534 26.8541 23.7291 26.2501 23.7291H8.75008C8.14602 23.7291 7.65633 23.2534 7.65633 22.6666C7.65633 22.0798 8.14602 21.6041 8.75008 21.6041H26.2501C26.8541 21.6041 27.3438 22.0798 27.3438 22.6666ZM26.2501 18.0625C26.8541 18.0625 27.3438 17.5868 27.3438 17C27.3438 16.4132 26.8541 15.9375 26.2501 15.9375H8.75008C8.14602 15.9375 7.65633 16.4132 7.65633 17C7.65633 17.5868 8.14602 18.0625 8.75008 18.0625H26.2501ZM27.3438 11.3333C27.3438 11.9201 26.8541 12.3958 26.2501 12.3958H8.75008C8.14602 12.3958 7.65633 11.9201 7.65633 11.3333C7.65633 10.7465 8.14602 10.2708 8.75008 10.2708H26.2501C26.8541 10.2708 27.3438 10.7465 27.3438 11.3333Z"
                                    fill="#285100"
                                />
                            </svg>
                        </button>
                    )}
                </div>



            </div>
        </header>
    );
}
