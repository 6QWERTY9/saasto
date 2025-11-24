import { SectionContent } from '@shared/components/SectionContent';
import { Informationblocklayout } from '@shared/components/informationBlockLayout';

import { analyticSectionData } from '../model';
import { getAssetPath } from '@shared/lib';

import css from './index.module.scss';

export const AnalyticsSection = () => {
  return (
    <section className={css.analytic_section_wrapper}>
      <SectionContent
        title={analyticSectionData.title}
        paragraph={analyticSectionData.paragraph}
      >
        <div className={css.content_wrapper}>
`        <div className={css.image_wrapper}>
          <img src={getAssetPath('/analytic_mob_screen.png')} alt="sreenshot of mobile app" className={css.mobile_sreen}/>
        </div>
        <div className={css.metrics_data}>
          {analyticSectionData.benefits.map((benefit, index) => (
            <Informationblocklayout
              key={index}
              title={benefit.title}
              description={benefit.description}
              direction={benefit.direction}
              background={benefit.background}
              iconProps={benefit.iconProps}
            />
          ))}
        </div>`
        </div>
      </SectionContent>
    </section>
  )
}
