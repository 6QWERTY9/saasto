import { Header } from '@widgets/header';
import css from './index.module.scss';
import { Footer } from '@widgets/footer';

export const Layoutpage = ({children}: {children: React.ReactNode}) =>  {
  return (
    <div className={css.container}>
      <Header/>
      <main className={css.main}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
