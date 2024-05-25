import ReceiptItem from './ReceiptItem.jsx';
import PropTypes from 'prop-types';

const ReceiptItems = ({ allProducts }) => {
  return (
    <tbody>
      {allProducts.map((el) => (
        <ReceiptItem key={el.code} product={el} />
      ))}
    </tbody>
  );
};

ReceiptItems.propTypes = {
  allProducts: PropTypes.array.isRequired,
};

export default ReceiptItems;
