import { Link } from 'react-router-dom';
import css from './Hero.module.css';
import sprite from '../../images/sprite.svg';

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className="container">
        <p className={css.hero__uptitle}>crypto trading</p>
        <h1 className={css.hero__title}>
          Engineers Meet <span className={css.hero__title__span}>Traders</span>
        </h1>
        <p className={css.hero__subtitle}>
          Advanced crypto algorithmic trading and efficient cross-chain
          execution, at scale.
        </p>
        <div className={css.hero__link__block}>
          <Link className={css.hero__link}>
            Learn More
            <span className={css.hero__icon__block}>
              <svg width="20" height="10" className={css.hero__icon}>
                <use href={sprite + '#bottom-arrow-icon'}></use>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
