import { Link } from 'react-router-dom';
import Media from 'react-media';
import css from './Future.module.css';
import futureIcon from '../../images/future/future-icon.svg';
import futureTopArrow from '../../images/future/top-arrow.svg';
import futureBottomArrow from '../../images/future/bottom-arrow.svg';
import futureBlockMobile from '../../images/future/future-mobile.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Future = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={css.future}>
      <div className="container">
        <div className={css.future__content}>
          <Media
            query="(min-width:769px)"
            render={() => (
              <div data-aos="fade-right">
                <div className={css.future__block}>
                  <ul className={css.block__list__first}>
                    <li className={css.block__item__first}>
                      Artificial Intelligence
                    </li>
                    <li className={css.block__item__first}>Storage Networks</li>
                    <li className={css.block__item__first}>P2P Networks</li>
                  </ul>
                  <ul className={css.future__list__second}>
                    <li className={css.future__item__second}>Public Data</li>
                    <li className={css.future__item__second}>
                      Encrypted Private Data *
                    </li>
                  </ul>
                  <div className={css.future__list__third}>
                    <img
                      src={futureIcon}
                      alt="icon"
                      className={css.future__icon}
                    />
                    <p className={css.future__text}>
                      Easy to use digital service and exclusive personal service
                      for our active traders
                    </p>
                    <p className={css.future__item__third}>Indexing</p>
                    <p className={css.future__item__third}>API</p>
                    <div className={css.future__consumers}>
                      <div className={css.future__arrows}>
                        <div className={css.future__arrow}>
                          <img src={futureBottomArrow} alt="bottom arrow" />
                        </div>
                        <div className={css.future__arrow}>
                          <img src={futureTopArrow} alt="top arrow" />
                        </div>
                      </div>
                      <p className={css.future__consumers__text}>Consumers</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          />
          <Media
            query="(max-width:768px)"
            render={() => (
              <div data-aos="fade-right">
                <img
                  src={futureBlockMobile}
                  alt="mobile"
                  className={css.future__mobile}
                />
              </div>
            )}
          />

          <div data-aos="fade-left">
            <div className={css.future__info}>
              <h2 className={css.future__title}>
                The future <span>of</span> Cryptocurrency trading
                <span> platform</span>
              </h2>
              <p className={css.future__subtitle}>
                Take advantage of time and sales, futures spread orders and
                depth trader — plus, trade directly from charts.
              </p>
              <Link className={css.future__link}>Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
