# Design Tokens

Tokens ชุดเริ่มต้นสำหรับหน้า demo และ UI ที่จะพัฒนาต่อ ปรับค่าได้ตามแบรนด์จริงเมื่อมีข้อกำหนดเพิ่มเติม

## สี

| Token | ค่า | ใช้สำหรับ |
| --- | --- | --- |
| `ink` | `#17252A` | ข้อความหลักและหัวเรื่อง |
| `muted` | `#66777A` | ข้อความรอง |
| `brand` | `#087E75` | ปุ่มหลักและจุดเน้น |
| `brand-dark` | `#075C56` | hover state ของปุ่มหลัก |
| `canvas` | `#F4F7F5` | พื้นหลังหน้า |
| `white` | `#FFFFFF` | พื้นผิวการ์ด |
| `emerald-950/10` | สีเขียวเข้มโปร่งแสง 10% | เส้นขอบบาง |

สี semantic หลักประกาศใน `@theme` ภายใน `src/index.css` และเรียกใช้เป็น utility เช่น `bg-brand`, `text-muted`, `bg-canvas`

## Typography

- Sans: `Inter`, `Noto Sans Thai`, system sans-serif
- Heading ใช้น้ำหนัก `600–700` และขนาด responsive
- Body ใช้ `text-sm` ถึง `text-lg` พร้อม line-height ที่อ่านภาษาไทยได้สะดวก
- Code ใช้ `font-mono` บนพื้นหลังเข้มและข้อความสีอ่อน

## Layout และระยะห่าง

- เนื้อหาหลักจำกัดความกว้าง `max-w-7xl` และจัดกึ่งกลาง
- ใช้ mobile-first breakpoints เช่น `sm:` และ `md:`
- ใช้ spacing scale ของ Tailwind (`gap-4`, `p-5`, `mt-12`) ให้สม่ำเสมอ
- Card ใช้ขอบมน `rounded-2xl` และเส้นขอบบาง; hero ใช้ `rounded-[2rem]`

## Accessibility

- ใช้ HTML landmarks และ heading ตามลำดับ
- ปุ่มกรองแสดงสถานะด้วย `aria-pressed`; focus ใช้ `focus-visible:outline-*`
- ตรวจ contrast ของข้อความและปุ่มเมื่อเปลี่ยนสี token
- พื้นที่กดเป้าหมายควรสูงอย่างน้อย 44px ใน UI ที่พัฒนาต่อ
