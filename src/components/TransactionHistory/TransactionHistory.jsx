import { PropTypes} from "prop-types";

import { TransactionItem } from "./TransactionHistoryItem";
import { Table, TableHead, TableHeadItem } from "./Transaction.styled";
import { generateAlternateBoolean } from "../helpers/bool-color";

export const TransactionHistory = ({ items =[] }) => {
    return <Table>
    <thead>
      <TableHead>
        <TableHeadItem>Type</TableHeadItem>
        <TableHeadItem>Amount</TableHeadItem>
        <TableHeadItem>Currency</TableHeadItem>
      </TableHead>
    </thead>
  
    <tbody>
        {items.map((item => {
          const color = generateAlternateBoolean()
          return (
          <TransactionItem 
          key={item.id}
          type={item.type}
          amount={item.amount}
          currency={item.currency}
          bool={color}
          />
         
        )}))}
    </tbody>
  </Table>
} 

TransactionHistory.propTypes ={
    item : PropTypes.arrayOf(PropTypes.shape({
        id : PropTypes.string.isRequired,
    }))
}