import PropTypes from 'prop-types';
import { Item } from "./Statistics.styled";


export const StatisticsItem = ({ label, percentage, color }) => {
  return  <Item style={{background: color}} >
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
       </Item>
}

StatisticsItem.propTypes ={
  label : PropTypes.string.isRequired,
  percentage : PropTypes.number.isRequired
} 