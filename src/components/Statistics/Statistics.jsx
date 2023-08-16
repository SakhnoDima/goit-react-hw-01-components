import PropTypes from 'prop-types';
import { StatisticsItem } from "./StatisticsItem";


export const Statistics = ({ items = [], title }) => {
return  <section className="statistics">
 {title && <h2 className="title">{title}</h2>}
  <ul className="stat-list">
    {items.map(item =>(
         <li className="item"  key={item.id}>
            <StatisticsItem 
            label={item.label} 
            percentage ={item.percentage}/>
    </li>
    ))}
  </ul>
</section> 
}
Statistics.propTypes ={
    title : PropTypes.string,
     item : PropTypes.arrayOf(PropTypes.shape({
       id : PropTypes.string.isRequired,
    }))
}