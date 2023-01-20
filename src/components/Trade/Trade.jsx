import { Link } from 'react-router-dom';
import css from './Trade.module.css';
import ScrollAnimation from 'react-animate-on-scroll';

const Trade = () => {
  return (
    <section className={css.trade}>
      <div className="container">
        <ScrollAnimation
          animateIn="animate__fadeInUp"
          duration={1.5}
          style={{ 'transition-duration': '1500ms' }}
          animateOnce={false}
        >
          <ul className={css.trade__list}>
            <li className={css.trade__item}>
              <p className={css.trade__item__uptitle}>Spot & Margin</p>
              <h3 className={css.trade__item__title}>
                Trade <span>200+</span> pairs with up to 10x leverage
              </h3>
              <Link className={css.trade__item__link}>Learn more</Link>
            </li>
            <li className={css.trade__item}>
              <p className={css.trade__item__uptitle}>Derivatives</p>
              <h3 className={css.trade__item__title}>
                <span>40+</span> quarterly futures and contracts
              </h3>
              <Link className={css.trade__item__link}>Learn more</Link>
            </li>
            <li className={css.trade__item}>
              <p className={css.trade__item__uptitle}>Trading Arena</p>
              <h3 className={css.trade__item__title}>
                Prize pools worth up to <span> 1.000.000 USD</span>
              </h3>
              <Link className={css.trade__item__link}>Learn more</Link>
            </li>
            <li className={css.trade__item}>
              <p className={css.trade__item__uptitle}>mobile app</p>
              <h3 className={css.trade__item__title}>
                Trade anytime, <br /> <span>anywhere</span>
              </h3>
              <Link className={css.trade__item__link}>Learn more</Link>
            </li>
          </ul>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Trade;
