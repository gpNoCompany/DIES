import IconLogo from '@shared/assets/icons/logo.svg'
import ImageVk from '@shared/assets/images/vk.png'

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
  return (
    <div className="absolute left-1/2 top-1/2 h-[calc(100dvh-32px)] max-w-[740px] -translate-x-1/2 -translate-y-1/2 rounded-[40px] border bg-violet-100">
      <div className="flex h-full flex-col items-center px-12 py-2 text-2xl">
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
        <form action="" className="mb-10 flex w-full flex-col gap-6">
          <input
            type="text"
            placeholder="E-mail или телефон"
            className="rounded-full border px-4 py-1.5 text-2xl placeholder:text-2xl"
          />
          <input
            type="text"
            placeholder="Пароль"
            className="rounded-full border px-4 py-1.5 text-2xl placeholder:text-2xl"
          />
          <label htmlFor="" className="flex items-center text-base">
            <div className="mr-2.5 h-6 w-12 rounded-full border-2 border-black outline-none" />
            Запомнить меня
          </label>
        </form>
        <button className="mb-16 inline-flex justify-center rounded-full bg-violet-300 px-14 py-1.5 text-center font-bold text-white">
          войти
        </button>
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
