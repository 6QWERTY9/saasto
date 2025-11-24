import clsx from 'clsx';
import type { informationBlockLayoutProps } from '../model/types';
import css from './index.module.scss';
import { IconWrapper } from '@shared/components/IconWrapper';


export const Informationblocklayout: React.FC<informationBlockLayoutProps> = ({iconProps, direction, background, title, description}) => {
  const style = {
    background
  }

  return (
    <div className={clsx(css.info_block_layout, css[direction])} style={style}>
      <div>
        <IconWrapper background={iconProps.background} size={iconProps.size} src={iconProps.src} />
      </div>
      <div className={css.text_content}>
        <h3 className={css.title}>{title}</h3>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  )
}
