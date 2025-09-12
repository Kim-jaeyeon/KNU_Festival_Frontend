import type { Config } from "tailwindcss";
import lineClamp from "@tailwindcss/line-clamp";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"], // FAQItem 전용
        hssantokki: ['HS산토끼체', 'HS-Santokki'],
      },
    },
  },
  plugins: [
    lineClamp
  ],
} satisfies Config;
