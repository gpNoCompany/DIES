import { ValidationSchemaType } from '@pages/auth/sign-in/lib'
import { InputHTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'

type InputProps = {
  placeholder: string
  name: 'email' | 'password' | 'login'
  type?: string
  register: UseFormRegister<ValidationSchemaType>
}

export const Input = ({ type, name, placeholder, register}: InputProps) => {
  return (
    <input
      className="rounded-full border px-4 py-1.5 text-2xl placeholder:text-2xl"
      placeholder={placeholder}
      type={type}
      {...register(name)}
    />
  )
}
 