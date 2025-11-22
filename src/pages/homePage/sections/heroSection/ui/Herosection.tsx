import clsx from 'clsx';
import css from './index.module.scss';
import { Contentwrapper } from '@shared/components/contentWrapper';
import { getAssetPath } from '@shared/lib';


export const Herosection = () => {
  return (
    <section className={css.hero_section_wrapper}>
        <div className={clsx(css.hero_section_content)}>
          <div className={css.hero_section_content_text}>
            <h1>A collaborative  Time Tracking that you Need</h1>
            <p>An enim nullam tempor sapien gravida donec enim ipsum porta justo  congue magna at pretium purus pretium ligula </p>
            <button className={css.cta_btn}>Start 14 Days Trial</button>
          </div>
        </div>
      <div className={css.download_stats}>
        <div>
          <DownloadStatsCard
            statistics='15k+'
            preTitle='Active user'
          />
          <DownloadStatsCard
            statistics='30k'
            preTitle='Total Download'
          />
          <DownloadStatsCard
            statistics='10k'
            preTitle='Customer'
          />

        </div>
      </div>
        <img src={getAssetPath('/Mobile_Screen_1.svg')} alt="desing image mobile screen" className={css.mobile_icon} width={'337px'} height={'679px'}/>
        <img src={getAssetPath('/Mobile_Screen_2.png')} alt="desing image mobile screen" className={css.second_mobile_icon}width={'337px'} height={'679px'}/>
        <img src={getAssetPath('/Alarm_Clock.svg')} alt="desing image alarm clock"  className={css.clock_icon} width={'125px'} height={'157px'}/>
        <img src={getAssetPath('/CLIPBOARD_VERIFIED.png')} alt="desing image clipboard" className={css.clipboard_icon} width={'125px'} height={'157px'}/>
      
    </section>
  )
}


const DownloadStatsCard = ({statistics, preTitle }: {statistics:string , preTitle: string }) => {
  return (
    <div className={css.download_stat_card}>
      <h2>{statistics}</h2>
      <span>{preTitle}</span>
    </div>
  )
}