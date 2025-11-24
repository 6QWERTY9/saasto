import type { iconWrapperProps } from "@shared/components/IconWrapper";

export interface informationBlockLayoutProps {
    iconProps: iconWrapperProps,
    direction: 'row' | 'column',
    background: string,
    title: string,
    description: string,
}