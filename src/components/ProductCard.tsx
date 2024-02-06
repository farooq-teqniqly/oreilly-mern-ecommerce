import { Card } from "react-bootstrap";
import { Product } from "src/types/types";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`} data-testid="product-image-link">
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body data-testid="card-body">
        <a href={`/product/${product._id}`} data-testid="product-name-link">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
