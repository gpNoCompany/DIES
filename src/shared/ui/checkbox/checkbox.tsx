import { InputHTMLAttributes } from 'react'

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({ className }: CheckboxProps) => {
  return (
    <input
      type="checkbox"
      className={`checked:shadow-checkbox relative h-6 w-12 cursor-pointer appearance-none rounded-full border-[3px] border-black bg-transparent outline-none after:absolute after:left-1/2 after:top-1/2 after:h-3.5 after:w-9 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:bg-[#CB7DCD] after:opacity-0 after:transition after:checked:opacity-100 ${className}`}
    />
  )
}
