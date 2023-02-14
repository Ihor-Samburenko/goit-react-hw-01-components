import PropTypes from 'prop-types';
import css from './Statistic.module.css';
import { generateColor } from '../../helpers/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistic}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            className={css.item}
            key={id}
            style={{ backgroundColor: generateColor() }}
          >
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
