import css from './About.module.css';
import aboutImage from '../../images/about/image-1.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className={css.about}>
      <div className="container">
        <h2 className={css.about__title}>about us</h2>
        <h3 className={css.about__subtitle}>Global technologies</h3>
        <div className={css.about__content}>
          <div data-aos="fade-up">
            <img src={aboutImage} alt="diagram" className={css.about__image} />
          </div>
          <div data-aos="fade-up">
            <div className={css.about__text}>
              <p className={css.about__text__title}>Level 1</p>

              <ul className={css.about__list}>
                <li className={css.about__item}>
                  Deploy a multi-legged futures strategy by simultaneously
                  placing orders to buy and sell from the same order ticket.
                </li>
                <li className={css.about__item}>
                  Place and manage orders based on the Level 2 order book, which
                  provides a live display of all bids and offers waiting to be
                  executed.
                </li>
              </ul>

              <button type="button" className={css.about__button}>
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
