import type { Meta, StoryObj } from '@storybook/react-vite'
import { expect, fn, userEvent, within } from 'storybook/test'
import { Button } from './button'

const meta = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  args: { children: 'บันทึก', onClick: fn() },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'xs', 'sm', 'lg', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
    },
    disabled: { control: 'boolean' },
    asChild: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ args, canvas }) => {
    const button = canvas.getByRole('button', { name: 'บันทึก' })
    await userEvent.click(button)
    await expect(args.onClick).toHaveBeenCalledTimes(1)
  },
}

export const Outline: Story = { args: { variant: 'outline', children: 'ยกเลิก' } }
export const Secondary: Story = { args: { variant: 'secondary', children: 'รอง' } }
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost' } }
export const Link: Story = { args: { variant: 'link', children: 'ดูเพิ่มเติม' } }
export const Destructive: Story = { args: { variant: 'destructive', children: 'ลบ' } }
export const Large: Story = { args: { size: 'lg', children: 'ขนาดใหญ่' } }

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ args, canvas }) => {
    const button = canvas.getByRole('button', { name: 'บันทึก' })
    await expect(button).toBeDisabled()
    await userEvent.click(button, { pointerEventsCheck: 0 })
    await expect(args.onClick).not.toHaveBeenCalled()
  },
}

export const FocusRing: Story = {
  play: async ({ canvas }) => {
    await userEvent.tab()
    await expect(canvas.getByRole('button', { name: 'บันทึก' })).toHaveFocus()
  },
}

// asChild: ต้องคง semantic ของลิงก์ (<a>) ไว้
export const AsLink: Story = {
  args: { asChild: true, variant: 'outline', onClick: undefined },
  render: (args) => (
    <Button {...args}>
      <a href="https://tailwindcss.com/docs">เอกสาร Tailwind</a>
    </Button>
  ),
  play: async ({ canvasElement }) => {
    const link = within(canvasElement).getByRole('link', { name: 'เอกสาร Tailwind' })
    await expect(link).toHaveAttribute('href', 'https://tailwindcss.com/docs')
  },
}
