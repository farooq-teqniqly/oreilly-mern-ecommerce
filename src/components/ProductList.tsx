import { Row, Col } from "react-bootstrap";
import { Product } from "../types/types";

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  return (
    <>
      <h2>Latest products</h2>
      <Row data-testid="product-list">
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
            <img src={product.image} alt={product.image} data-testid="product-image" />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductList;
