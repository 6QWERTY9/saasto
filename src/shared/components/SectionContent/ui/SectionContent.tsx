import type { sectionContentProps } from '../model';
import css from './index.module.scss';


export const SectionContent: React.FC<sectionContentProps> = ({title, paragraph, children}) => {
  return (
    <div className={css.section_main_content_wrapper}>
      <div className={css.text_content}>
        <h2 className={css.title}>{title}</h2>
        <p className={css.paragraph}>{paragraph}</p>
      </div>
      {children}
    </div>
  )
}
