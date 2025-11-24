import { SectionContent } from '@shared/components/SectionContent';
import css from './index.module.scss';
import type { priceCardProps } from '../model';

export const Pricesection = () => {
  return (
    <section className={css.price_section}>
      <SectionContent
        title='Flexible work, Simple Price'
        paragraph='Growth your business with using us'
      >
        <div className={css.prices_wrapper}>
          <PriceCard
            title='Free'
            advantages={['1 seat', '2 project']}
            price='0'
          />
          <PriceCard
            title='Premium'
            advantages={['Unlimited Seat', 'Unlimited project']}
            price='30'
          />
        </div>
      </SectionContent>
    </section>
  )
}


const PriceCard: React.FC<priceCardProps> = ({title, advantages, price}) => {
  return (
    <div className={css.price_card}>
      <div className={css.price_card_content}>
        <h3 className={css.price_card_title}>{title}</h3>
        <div className={css.advantages}>
          {advantages.map((item, ind) => (
            <span key={ind} className={css.advantage}>{item}</span>
          ))}
        </div>

        <div className={css.price_wrapper}>
          <span className={css.pretitle}>$</span>
          <span className={css.price}>{price}</span>
          <span className={css.period}>/forever</span>
        </div>
        <button className={css.free_trial}>
          Start 14 Days Trial
        </button>
      </div>
    </div>
  )
}
