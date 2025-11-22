import css from './index.module.scss';

export default function Contentwrapper({children}: {children: React.ReactNode}) {
  return (
    <div className={css.content_wrapper}>{children}</div>
  )
}
