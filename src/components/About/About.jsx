import css from './About.module.css';
import aboutImage from '../../images/about/image-1.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
  return (
    <section className={css.about}>
      <div className="container">
        <h2 className={css.about__title}>about us</h2>
        <h3 className={css.about__subtitle}>Global technologies</h3>
        <div className={css.about__content}>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            duration={1.5}
            style={{ 'transition-duration': '1500ms' }}
            animateOnce={false}
          >
            <img src={aboutImage} alt="diagram" className={css.about__image} />
          </ScrollAnimation>
          <div className={css.about__text}>
            <p className={css.about__text__title}>Level 1</p>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              duration={1.5}
              style={{ 'transition-duration': '1500ms' }}
              animateOnce={false}
            >
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
            </ScrollAnimation>
            <button type="button" className={css.about__button}>
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
