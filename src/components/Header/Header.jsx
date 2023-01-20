import { Link, NavLink } from 'react-router-dom';
import Media from 'react-media';
import Burger from 'components/Burger/Burger';
import css from './Header.module.css';
import sprite from '../../images/sprite.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="container">
        <div className={css.header__container}>
          <Link className={css.header__logo}>C</Link>
          <Media
            query="(min-width:768px)"
            render={() => (
              <nav>
                <ul className={css.header__list}>
                  <li className={css.header__item}>
                    <NavLink className={css.header__link}>Activities</NavLink>
                  </li>
                  <li className={css.header__item}>
                    <NavLink className={css.header__link}>Technology</NavLink>
                  </li>
                  <li className={css.header__item}>
                    <NavLink className={css.header__link}>R&D</NavLink>
                  </li>
                  <li className={css.header__item}>
                    <NavLink className={css.header__link}>Community</NavLink>
                  </li>
                  <li className={css.header__item}>
                    <NavLink className={css.header__link__active}>
                      Career
                      <svg width="24" height="24">
                        <use href={sprite + '#up-right-arrow-icon'}></use>
                      </svg>
                    </NavLink>
                  </li>
                </ul>
              </nav>
            )}
          />
          <Media query="(max-width:768px)" render={() => <Burger />} />
        </div>
      </div>
    </header>
  );
};

export default Header;
