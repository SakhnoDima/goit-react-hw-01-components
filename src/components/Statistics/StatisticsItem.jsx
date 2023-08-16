import PropTypes from 'prop-types';

export const StatisticsItem = ({ label, percentage }) => {
  return <>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
      </>
}

StatisticsItem.propTypes ={
  label : PropTypes.string.isRequired,
  percentage : PropTypes.number.isRequired
} 