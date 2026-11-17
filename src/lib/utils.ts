import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

// รวม class แบบมีเงื่อนไข และแก้ conflict ของ Tailwind utilities
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
