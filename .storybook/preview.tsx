import { StrictMode } from 'react'
import type { Preview } from '@storybook/react-vite'
// โหลด Tailwind + design tokens ชุดเดียวกับแอป (src/main.tsx)
import '../src/index.css'

const preview: Preview = {
  // รักษา provider เดียวกับ src/main.tsx (ตอนนี้มีแค่ StrictMode)
  decorators: [
    (Story) => (
      <StrictMode>
        <Story />
      </StrictMode>
    ),
  ],
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'error' = fail เมื่อพบ a11y violations
      test: 'error',
    },
  },
}

export default preview
