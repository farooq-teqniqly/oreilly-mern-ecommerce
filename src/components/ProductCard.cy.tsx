import { Product } from "src/types/types";
import ProductCard from "./ProductCard";
import {
  assertAttribute,
  assertTextExact,
  getBySelector,
  getByTestId,
} from "../../cypress/support/utilities";
import { get } from "cypress/types/lodash";

const product: Product = {
  _id: 1,
  name: "Airpods Wireless Bluetooth Headphones",
  image: "/images/airpods.jpg",
  description:
    "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
  brand: "Apple",
  category: "Electronics",
  price: 89.99,
  countInStock: 10,
  rating: 4.5,
  numReviews: 12,
};

describe("ProductCard", () => {
  beforeEach(() => {
    cy.mount(<ProductCard product={product} />);
  });

  it("renders the product image", () => {
    const img = getBySelector("img");
    assertAttribute(img, "src", product.image);

    const imageLink = getByTestId("product-image-link");
    assertAttribute(imageLink, "href", `/product/${product._id}`);
  });

  it("renders the product name", () => {
    const link = getByTestId("product-name-link");
    assertAttribute(link, "href", `/product/${product._id}`);

    const title = link.children().get("strong");
    assertTextExact(title, product.name);
  });

  it("renders the product price", () => {
    const price = getBySelector("h3");
    assertTextExact(price, `$${product.price}`);
  });
});
