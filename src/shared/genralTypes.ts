import type { informationBlockLayoutProps } from "./components/informationBlockLayout";
import type { sectionContentProps } from "./components/SectionContent";

export interface generalDataProps extends  Omit<sectionContentProps, 'children'> {
    benefits: informationBlockLayoutProps[];
}