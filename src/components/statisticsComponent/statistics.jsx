
import PropTypes from 'prop-types';
import css from './statistics.module.css';
import { getRandomColor } from '../../components/statistics';

export const Statistics = ({ title, stats }) => {
  return (
    <section
      // key = {stat.id}
      className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item} style={{ backgroundColor: getRandomColor() }} key={stat.id}>
            <span className={css.label}>{stat.label} </span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
}