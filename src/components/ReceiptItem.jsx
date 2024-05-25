import PropTypes from 'prop-types';

const ReceiptItem = ({ product }) => {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.qty}</td>
      <td>{product.single_price} zł</td>
      <td>{(product.qty * product.single_price).toFixed(2)} zł</td>
    </tr>
  );
};

ReceiptItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ReceiptItem;
