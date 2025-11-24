import { Informationblocklayout } from "@shared/components/informationBlockLayout"
import { SectionContent } from "@shared/components/SectionContent"
import { benefitsData } from "../model"

import css from './index.module.scss';


export const Benefitssection = () => {
  return (
    <section className={css.benefits_section}>
      <SectionContent
        title={benefitsData.title}
        paragraph={benefitsData.paragraph}
      >

        <div className={css.benefits_wrapper}>
          {benefitsData.benefits.map((benefit, index) => (
            <Informationblocklayout
              key={index}
              title={benefit.title}
              description={benefit.description}
              direction={benefit.direction}
              background={benefit.background}
              iconProps={benefit.iconProps}
            />
          ))}
        </div>

      </SectionContent>
    </section>
  )
}

/* 
      <SectionContent 
        title="Some excellent features for you" 
        paragraph="An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula "
      >
        <Informationblocklayout
          iconProps={{size:'medium', background: '#FFFFFF80', src: '/task_list.svg' }}
          direction="column"
          title="Preset List of Task"
          description="Make bill payments easily using the wallet app"
          background="#70D0DC"
        />
      </SectionContent>
*/
