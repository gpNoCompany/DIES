import IconError404 from '@shared/assets/icons/404.svg'
import IconLogo from '@shared/assets/icons/logo.svg'

export const Error404Page = () => {
  return (
    <div className="flex h-dvh flex-col">
      <header className="min-h-48 border-b px-16 py-8">
        <div className="max-w-96">
          <img src={IconLogo} alt="dies" />
        </div>
      </header>
      <main className="relative flex grow flex-col justify-end p-16 font-unbounded">
        <p className="absolute right-0 top-0 max-w-[1200px] text-[96px] leading-[119px] text-[#D9D9D9]">
          отличная попытка; попробуй еще раз
        </p>
        <h1 className="mb-10">
          <img src={IconError404} alt="404" />
        </h1>
        <p className="max-w-[800px] text-2xl leading-7">
          Страница, которую вы запрашиваете, не существует. Возможно она была
          удалена или адрес не верен; Перейдите на нашу{' '}
          <a href="#" className="text-violet-300 underline">
            главную страницу
          </a>{' '}
          и попробуйте найти необходимую информацию там
        </p>
      </main>
      <footer className="relative flex min-h-28 items-center justify-start px-16 py-8 after:absolute after:left-0 after:top-0 after:h-[1px] after:w-full after:bg-black">
        <p>ООО «Busy Friends» . Все права защищены, 2024</p>
      </footer>
    </div>
  )
}
