import IconLogo from '@shared/assets/icons/logo.svg'
import ImageVk from '@shared/assets/images/vk.png'
import { Button } from '@shared/ui/button'
import { Input } from '@shared/ui/input'

export const SignUp = () => {
  return (
    <div className="flex h-dvh flex-col">
      <header className="min-h-52 border-b px-16 py-8" />
      <main className="flex grow items-end justify-start px-16 py-9">
        <div className="w-[700px]">
          <img src={IconLogo} alt="dies" />
        </div>
        <LoginForm />
      </main>
      <footer className="relative flex min-h-28 justify-start px-16 py-8 after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-black">
        <p>ООО «Busy Friends» . Все права защищены, 2024</p>
      </footer>
    </div>
  )
}

export const LoginForm = () => {
  return (
    <div className="absolute right-7 top-1/2 h-[calc(100dvh-32px)] max-w-[740px] -translate-y-1/2 rounded-[40px] border bg-orange-100">
      <div className="flex h-full flex-col items-center px-12 py-8 text-2xl">
        <h2 className="mb-5 text-4xl font-bold">Регистрация</h2>
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
        <form action="" className="mb-10 flex w-full flex-col gap-6">
          <Input type="text" placeholder="Имя" />
          <Input type="text" placeholder="Телефон" />
          <Input type="text" placeholder="E-mail" />
          <Input type="text" placeholder="Пароль" />
          <label htmlFor="" className="flex items-center text-base">
            <div className="mr-2.5 h-6 w-12 rounded-full border-2 border-black outline-none" />
            <p>
              Я даю{' '}
              <a href="#" className="text-violet-300">
                согласие на обработку персональных данных
              </a>
            </p>
          </label>
        </form>
        <Button label="зарегистрироваться" className="mb-4" />
        <div className="flex flex-col items-center">
          <p>
            Есть аккаунт?{' '}
            <a href="#" className="font-bold underline">
              Войти
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
