import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Burger.module.css';

const Burger = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  useEffect(() => {
    if (isBurgerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'initial';
    }
  }, [isBurgerOpen]);

  return (
    <>
      <button className={css.burger__open} onClick={handleBurgerOpen}></button>
      <div
        className={css.burger__menu}
        style={
          isBurgerOpen
            ? { opacity: 1, transform: 'translate(0)' }
            : { opacity: 0, transform: 'translate(-100%)' }
        }
      >
        <ul className={css.burger__list}>
          <li className={css.burger__item}>
            <Link className={css.burger__link}>Activities</Link>
          </li>
          <li className={css.burger__item}>
            <Link className={css.burger__link}>Technology</Link>
          </li>
          <li className={css.burger__item}>
            <Link className={css.burger__link}>R&D</Link>
          </li>
          <li className={css.burger__item}>
            <Link className={css.burger__link}>Community</Link>
          </li>
          <li className={css.burger__item}>
            <Link className={css.burger__link}>Career</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Burger;
