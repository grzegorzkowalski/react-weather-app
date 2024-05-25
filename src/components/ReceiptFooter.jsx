import PropTypes from 'prop-types';

const ReceiptFooter = ({ allProducts }) => {
  return (
    <tfoot>
      <tr>
        <td>Razem</td>
        <td>-</td>
        <td>-</td>
        <td>{allProducts.reduce((prev, cur) => prev + cur.single_price * cur.qty, 0).toFixed(2)} zł</td>
      </tr>
    </tfoot>
  );
};

ReceiptFooter.propTypes = {
  allProducts: PropTypes.array.isRequired,
};

export default ReceiptFooter;
