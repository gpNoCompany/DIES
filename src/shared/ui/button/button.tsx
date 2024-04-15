import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  className?: string
  type?: 'button' | 'reset' | 'submit'
  form?: string
}

export const Button = ({ form, label, className, type }: ButtonProps) => {
  return (
    <button
      className={`"inline-flex justify-center rounded-full bg-violet-300 px-14 py-1.5 text-center font-bold text-white ${className}`}
      type={type}
      form={form}
    >
      {label}
    </button>
  )
}
