import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ ...rest }: InputProps) => {
  return (
    <input
      className="rounded-full border px-4 py-1.5 text-2xl placeholder:text-2xl"
      {...rest}
    />
  )
}
