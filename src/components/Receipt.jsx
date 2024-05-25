import ReceiptHeader from './ReceiptHeader.jsx';
import ReceiptFooter from './ReceiptFooter.jsx';
import ReceiptItems from './ReceiptItems.jsx';
import products from '../data/products.js';

const Receipt = () => {
  return (
    <div>
      <table>
        <ReceiptHeader />
        <ReceiptItems allProducts={products} />
        <ReceiptFooter allProducts={products} />
      </table>
    </div>
  );
};

export default Receipt;
