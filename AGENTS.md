# กฎการทำงานของ Repository

## บริบท

- โปรเจกต์ frontend ใช้ React, TypeScript, Vite และ Tailwind CSS v4
- อ่านไฟล์นี้และเอกสารที่เกี่ยวข้องก่อนแก้ไขโค้ด
- รักษาไฟล์หรือข้อมูลเดิมใน repository ที่ไม่เกี่ยวข้องกับแอปไว้

## แนวทางพัฒนา

- ใช้ TypeScript ที่ระบุชนิดข้อมูลชัดเจน และแบ่ง UI เป็น component เมื่อช่วยให้อ่านหรือใช้ซ้ำได้ดีขึ้น
- ใช้ Tailwind utility classes เป็นหลัก; design tokens กลางกำหนดใน `src/index.css` และอธิบายใน `DESIGN.md`
- รักษา responsive layout, contrast ที่อ่านง่าย, focus state ที่มองเห็นได้ และ semantic HTML
- ข้อความ UI ของหน้า demo ใช้ภาษาไทย ส่วนศัพท์เทคนิคและชื่อ API คงรูปแบบมาตรฐาน
- ห้ามใส่ token, credential หรือ secret จริงลงใน source, docs หรือ commit

## คำสั่งหลัก

- ติดตั้ง dependencies: `npm install`
- เริ่ม dev server: `npm run dev`
- ตรวจ TypeScript และ production build: `npm run build`
- ตรวจ lint: `npm run lint`

ก่อนสรุปว่างาน build ผ่าน ต้องรัน `npm run build` และตรวจผลลัพธ์จริงในเทอร์มินัล

## shadcn MCP

- ก่อนค้นหา component ผ่าน shadcn MCP ให้อ่าน `components.json` และตรวจ registry ที่ตั้งค่าไว้ด้วย `get_project_registries`; การเชื่อมต่อ MCP สำเร็จไม่ได้แปลว่ามี registry สำหรับค้นหาแล้ว
- ใช้ MCP สำหรับค้นหา ดูรายละเอียด และตัวอย่างของรายการใน registry ที่กำหนดไว้
- MCP ที่ใช้งานในสภาพแวดล้อมนี้ไม่มีคำสั่ง `init_project`; หากต้องตั้งค่าหรือปรับ registry ให้ตรวจ `components.json` เดิมก่อน แล้วใช้ shadcn CLI โดยรักษา style, aliases และการตั้งค่า Tailwind ที่โปรเจกต์ใช้อยู่
