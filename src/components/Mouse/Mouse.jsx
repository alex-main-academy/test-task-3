import css from './Mouse.module.css';
import mouseIcon from '../../images/mouse/mouse.svg';
import Media from 'react-media';

const Mouse = () => {
  return (
    <Media
      query="(min-width:1170px)"
      render={() => (
        <button type="button" className={css.mouse__button}>
          <img src={mouseIcon} alt="icon" />
        </button>
      )}
    />
  );
};

export default Mouse;
