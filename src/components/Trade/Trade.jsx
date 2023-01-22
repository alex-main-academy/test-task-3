import { Link } from 'react-router-dom';
import css from './Trade.module.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Trade = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <section className={css.trade}>
      <div className="container">
        <div data-aos="fade-in">
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
                Prize pools worth up to <span> USD 1.000.000</span>
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
        </div>
      </div>
    </section>
  );
};

export default Trade;
