import { SubmitHandler } from 'react-hook-form'
import { z } from 'zod'

export const schema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be contain at least 2 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email('Invalid email address'),
  phone: z
    .string()
    .min(7, { message: 'Number must be contain at least 7 characters' })
    .regex(
      /^([+]?[s0-9]+)?(d{3}|[(]?[0-9]+[)])?([-]?[s]?[0-9])+$/,
      'Invalid Number!',
    ),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters' }),
})

//extract the inferred type from schema
export type ValidationSchemaType = z.infer<typeof schema>

export const onSubmit: SubmitHandler<ValidationSchemaType> = (data) => {
  console.log(data)
}
