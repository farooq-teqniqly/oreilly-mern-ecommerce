import { Row, Col } from "react-bootstrap";
import { Product } from "../types/types";
import ProductCard from "./ProductCard";

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
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductList;
