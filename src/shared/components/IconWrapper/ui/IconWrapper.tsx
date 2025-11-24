import { getAssetPath } from "@shared/lib";
import type { iconWrapperProps } from "../model"
import css from './index.module.scss';
import clsx from "clsx";

export const IconWrapper: React.FC<iconWrapperProps> = ({background, size, src}) => {
  const style = {
    background
  }
  return (
    <div className={clsx(css.icon_wrapper, css[size])} style={style}>
      <img src={getAssetPath(src)} alt="icon" />
    </div>
  );
}
