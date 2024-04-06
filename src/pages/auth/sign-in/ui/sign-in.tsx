import { zodResolver } from '@hookform/resolvers/zod'
import IconLogo from '@shared/assets/icons/logo.svg'
import ImageVk from '@shared/assets/images/vk.png'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'
import { useForm } from 'react-hook-form'
import { onSubmit, schema, ValidationSchemaType } from '../lib'

export const SignIn = () => {
  return (
    <div className="flex h-dvh flex-col">
      <header className="min-h-52 border-b px-16 py-8">
        <div className="max-w-96">
          <img src={IconLogo} alt="dies" />
        </div>
      </header>
      <main className="grow">
        <LoginForm />
      </main>
      <footer className="relative flex min-h-28 justify-start px-16 py-8 after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-black">
        <p>ООО «Busy Friends» . Все права защищены, 2024</p>
      </footer>
    </div>
  )
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(schema),
  })

  return (
    <div className="absolute left-1/2 top-1/2 h-[calc(100dvh-32px)] max-w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] border bg-violet-100">
      <div className="flex h-full flex-col items-center px-12 pb-4 pt-16 text-2xl">
        <h2 className="mb-5 text-4xl font-bold">Вход в аккаунт</h2>
        <p className="mb-5">Войти с помощью:</p>
        <ul className="mb-10 flex items-center gap-7">
          <li className="flex flex-col items-center gap-4 text-sm capitalize">
            <img src={ImageVk} alt="vk" />
            VK
          </li>
          <li className="flex flex-col items-center gap-4 text-sm capitalize">
            <img src={ImageVk} alt="vk" />
            яндекс ID
          </li>
          <li className="flex flex-col items-center gap-4 text-sm capitalize">
            <img src={ImageVk} alt="vk" />
            apple ID
          </li>
          <li className="flex flex-col items-center gap-4 text-sm capitalize">
            <img src={ImageVk} alt="vk" />
            google ID
          </li>
        </ul>
        <p className="mb-6">Или заполните поля ниже:</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="login_form"
          className="mb-10 flex w-full flex-col gap-6"
        >
          <Input
            register={register}
            name="email"
            type="text"
            placeholder="E-mail или телефон"
          />
          {errors.email && <span className='text-red-600'>{errors.email.message}</span>}
          <Input
            register={register}
            name="password"
            type="text"
            placeholder="Пароль"
          />
          {errors.password && <span className='text-red-600'>{errors.password.message}</span>}
          <label htmlFor="" className="flex items-center text-base">
            <div className="mr-2.5 h-6 w-12 rounded-full border-2 border-black outline-none" />
            Запомнить меня
          </label>
        </form>
        <Button
          form="login_form"
          type="submit"
          label="войти"
          className="mb-16"
        />
        <div className="flex flex-col items-center">
          <p>Забыли пароль?</p>
          <p>
            Еще нет аккаунта?{' '}
            <a href="#" className="font-bold underline">
              Зарегистрируйся
            </a>
          </p>
        </div>
        <div className="mt-auto">
          <p className="max-w-[562px] text-right text-xl text-gray-400">
            С Политикой в отношении обработки персональных данных ООО «Busy
            Friends» можно{' '}
            <a href="#" className="text-violet-300">
              ознакомиться здесь
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
