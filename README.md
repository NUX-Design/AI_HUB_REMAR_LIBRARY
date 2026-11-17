# React + TypeScript + Vite + Tailwind CSS v4

Starter project ที่ใช้ Vite `react-ts` template พร้อม Tailwind CSS v4 ผ่าน `@tailwindcss/vite` และมีหน้า utility demo ภาษาไทย

## ความต้องการ

- Node.js 20.19+ หรือ 22.12+
- npm

## ติดตั้งและเริ่มพัฒนา

```bash
npm install
npm run dev
```

Vite จะแสดง URL สำหรับเปิดหน้าเว็บในเครื่อง โดยปกติคือ `http://localhost:5173` และรองรับ Hot Module Replacement

## Build และ Preview

```bash
npm run build
npm run preview
```

ไฟล์ production จะอยู่ใน `dist/` หลัง build สำเร็จ

## ตรวจรูปแบบโค้ด

```bash
npm run lint
```

## โครงสร้างหลัก

- `src/App.tsx` — หน้า demo และตัวอย่าง Tailwind utilities
- `src/index.css` — import Tailwind และกำหนด theme tokens ผ่าน CSS
- `src/main.tsx` — entry point ที่ import CSS หลัก
- `vite.config.ts` — เปิดใช้ React และ Tailwind Vite plugins
- `DESIGN.md` — สีและแนวทาง design tokens เบื้องต้น
- `AGENTS.md` — กฎการทำงานใน repository
- `MEMORY.md` — context และ workflow เฉพาะโปรเจกต์

## Environment variables

ห้าม commit ค่า secret จริง ใช้ไฟล์ `.env.example` สำหรับชื่อตัวแปรตัวอย่างที่ไม่มี credential ได้ ส่วนไฟล์ `.env` และ secrets จะถูกละเว้นโดย Git
