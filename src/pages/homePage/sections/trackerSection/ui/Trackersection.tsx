

import type { generalDataProps } from '@shared/genralTypes';
import css from './index.module.scss';
import { trackerSectionData } from '../model';
import { SectionContent } from '@shared/components/SectionContent';
import { Informationblocklayout } from '@shared/components/informationBlockLayout';
import { getAssetPath } from '@shared/lib';

export const Trackersection = () => {
  const {title, paragraph, benefits}: generalDataProps = trackerSectionData;
  const [timeTracker, expenses, budgetControl] = benefits;
  return (
    <section className={css.tracker_section}>
      <SectionContent
        title={title}
        paragraph={paragraph}
      >
        <div className={css.content_wrapper}>
          <img src={getAssetPath('/statistics.png')} alt="image statistic" className={css.statistics_image}/>
          <div className={css.possibilities}>
              <div className={css.time_tracker}>
                <Informationblocklayout
                  title={timeTracker.title}
                  description={timeTracker.description}
                  direction={timeTracker.direction}
                  background={timeTracker.background}
                  iconProps={timeTracker.iconProps}
                />
              </div>
              <div className={css.expenses}>
                <Informationblocklayout
                  title={expenses.title}
                  description={expenses.description}
                  direction={expenses.direction}
                  background={expenses.background}
                  iconProps={expenses.iconProps}
                />
              </div>
              <div className={css.budget_control}>
                <Informationblocklayout
                  title={budgetControl.title}
                  description={budgetControl.description}
                  direction={budgetControl.direction}
                  background={budgetControl.background}
                  iconProps={budgetControl.iconProps}
                />
              </div>
          </div>
        </div>
      </SectionContent>
    </section>
  )
}
