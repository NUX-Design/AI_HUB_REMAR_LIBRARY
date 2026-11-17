import { useState } from 'react'
import { Button } from '@/components/ui/button'

const snippets = [
  { label: 'Layout', code: 'grid grid-cols-1 gap-4 md:grid-cols-3' },
  { label: 'Spacing', code: 'p-6 space-y-4' },
  { label: 'Typography', code: 'text-sm font-medium tracking-tight' },
]

function App() {
  const [activeTab, setActiveTab] = useState('ทั้งหมด')
  const filters = ['ทั้งหมด', 'Layout', 'สีและพื้นหลัง', 'ตัวอักษร']

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-emerald-950/10 bg-white/85">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#main" className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand">
            <span aria-hidden="true" className="grid size-10 place-items-center rounded-xl bg-brand text-lg font-bold text-white">T</span>
            <span className="text-sm font-bold tracking-tight">Tailwind <span className="text-muted">Playground</span></span>
          </a>
          <Button asChild variant="outline" className="h-11 rounded-full px-4 font-semibold text-brand-dark">
            <a href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
              เอกสาร Tailwind <span aria-hidden="true">↗</span>
            </a>
          </Button>
        </div>
      </header>

      <main id="main" className="mx-auto max-w-7xl px-5 pb-16 pt-10 sm:px-8 sm:pt-14">
        <section className="relative overflow-hidden rounded-[2rem] bg-[#123d39] px-6 py-10 text-white shadow-xl shadow-emerald-950/10 sm:px-10 sm:py-14 lg:px-14">
          <div aria-hidden="true" className="absolute -right-12 -top-20 size-72 rounded-full border-[1px] border-white/10 sm:size-96" />
          <div aria-hidden="true" className="absolute -bottom-48 right-24 size-80 rounded-full border-[1px] border-white/10" />
          <div className="relative max-w-3xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-100">
              <span className="size-2 rounded-full bg-lime-300" /> React + TypeScript + Vite
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-6xl">เริ่มต้นสร้าง UI<br className="hidden sm:block" /> ด้วย utility classes</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-emerald-50/80 sm:text-lg sm:leading-8">ตัวอย่างหน้าเว็บที่สร้างด้วย Tailwind CSS v4 พร้อม responsive layout, สี, ระยะห่าง และ states ที่แก้ไขต่อได้ทันที</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#examples" className="rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-emerald-950 transition hover:bg-lime-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">ดูตัวอย่าง utility <span aria-hidden="true">↓</span></a>
              <span className="rounded-xl border border-white/20 px-5 py-3 font-mono text-sm text-white/90">@import "tailwindcss";</span>
            </div>
          </div>
        </section>

        <section aria-label="ภาพรวมโปรเจกต์" className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['01', 'CSS-first', 'ตั้งค่าธีมผ่าน CSS'],
            ['02', 'Responsive', 'เริ่มจากจอเล็กก่อน'],
            ['03', 'Accessible', 'โฟกัสและคอนทราสต์ชัดเจน'],
          ].map(([number, title, detail]) => (
            <article key={title} className="rounded-2xl border border-emerald-950/10 bg-white p-5 shadow-sm shadow-emerald-950/[0.03]">
              <div className="flex items-center justify-between"><span className="text-xs font-bold tracking-[0.16em] text-brand">{number}</span><span aria-hidden="true" className="text-lg text-brand">↗</span></div>
              <h2 className="mt-5 text-lg font-semibold tracking-tight">{title}</h2>
              <p className="mt-1 text-sm leading-6 text-muted">{detail}</p>
            </article>
          ))}
        </section>

        <section id="examples" className="mt-12 scroll-mt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">Utility gallery</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">ลองดูคลาสที่ใช้บ่อย</h2>
              <p className="mt-2 text-sm leading-6 text-muted">เลือกหมวดเพื่อดูตัวอย่างการจัดกลุ่ม utility classes</p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="กรองหมวดตัวอย่าง">
              {filters.map((filter) => (
                <Button key={filter} type="button" variant={activeTab === filter ? 'default' : 'outline'} aria-pressed={activeTab === filter} onClick={() => setActiveTab(filter)} className="h-11 rounded-full px-4 font-semibold">
                  {filter}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {snippets.map((snippet, index) => (
              <article key={snippet.label} className="group overflow-hidden rounded-2xl border border-emerald-950/10 bg-white shadow-sm shadow-emerald-950/[0.03] transition hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-950/[0.08]">
                <div className={`flex h-36 items-center justify-center ${index === 0 ? 'bg-emerald-50' : index === 1 ? 'bg-amber-50' : 'bg-sky-50'}`}>
                  {index === 0 ? <div className="grid grid-cols-3 gap-2 rounded-xl bg-white p-3 shadow-sm"><span className="size-8 rounded-md bg-brand" /><span className="size-8 rounded-md bg-emerald-200" /><span className="size-8 rounded-md bg-lime-300" /></div> : index === 1 ? <div className="rounded-xl bg-white p-4 shadow-sm"><div className="h-3 w-24 rounded bg-amber-200" /><div className="mt-3 h-3 w-32 rounded bg-amber-100" /><div className="mt-3 h-8 w-20 rounded-lg bg-amber-400" /></div> : <div className="space-y-2 rounded-xl bg-white p-4 shadow-sm"><div className="text-lg font-bold tracking-tight text-sky-950">Aa Bb</div><div className="font-mono text-xs text-sky-700">font-medium</div></div>}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between"><h3 className="font-semibold">{snippet.label}</h3><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-brand-dark">{activeTab}</span></div>
                  <p className="mt-2 text-sm leading-6 text-muted">ตัวอย่าง utility ที่ประกอบเป็นรูปแบบนี้</p>
                  <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 px-3 py-2.5 font-mono text-xs leading-5 text-emerald-100">{snippet.code}</code>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-5 rounded-3xl border border-emerald-950/10 bg-white p-6 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
          <div><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">พร้อมใช้งาน</p><h2 className="mt-2 text-xl font-semibold tracking-tight">แก้หน้า demo แล้วเริ่มต่อยอดได้เลย</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-muted">แก้ component ใน <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-xs text-slate-800">src/App.tsx</code> และเพิ่ม utility classes ได้ทันทีโดยไม่ต้องตั้งค่า content paths</p></div>
          <Button asChild size="lg" className="h-11 rounded-xl px-5 font-bold"><a href="https://tailwindcss.com/docs/installation/using-vite" target="_blank" rel="noreferrer">คู่มือติดตั้ง <span aria-hidden="true">↗</span></a></Button>
        </section>
      </main>

      <footer className="border-t border-emerald-950/10 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>Tailwind CSS v4 · React + TypeScript + Vite</span><span>สร้างเพื่อเป็นจุดเริ่มต้นสำหรับโปรเจกต์ใหม่</span></div>
      </footer>
    </div>
  )
}

export default App
