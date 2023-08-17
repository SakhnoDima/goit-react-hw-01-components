import { PropTypes } from 'prop-types';
import { TableListItem } from './Transaction.styled';

export const TransactionItem = ({ type, amount, currency, bool }) => {
  return (
    <tr style={{ background: `${bool ? 'white' : 'lightgrey'}` }}>
      <TableListItem>{type}</TableListItem>
      <TableListItem>{amount}</TableListItem>
      <TableListItem>{currency}</TableListItem>
    </tr>
  );
};

TransactionItem.propTypes = {
  bool: PropTypes.bool,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
