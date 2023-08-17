import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { StatisticsSection, Title, StatList } from './Statistics.styled';
import { getRandomHexColor } from '../helpers/random-color';

export const Statistics = ({ items = [], title }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}
      <StatList>
        {items.map(item => (
          <StatisticsItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
            color={getRandomHexColor()}
          />
        ))}
      </StatList>
    </StatisticsSection>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
