import ProductList from "./ProductList";
import { Product } from "../types/types";
import {
  getByTestId,
  assertText,
  assertArrayLength,
  getBySelector,
  assertTestId,
} from "../../cypress/support/utilities";

const products: Product[] = [
  {
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
  },
];

describe("ProductList", () => {
  beforeEach(() => {
    cy.mount(<ProductList products={products} />);
  });

  it("renders the header", () => {
    const h2 = getBySelector("h2");
    assertText(h2, "Latest products");
  });

  it("renders the list of products", () => {
    const children = getByTestId("product-list").children();
    assertArrayLength(children, 1);

    const firstChild = getByTestId("product-list").children().first();
    assertText(firstChild, "Airpods Wireless Bluetooth Headphones");

    const productImages = getBySelector("img");
    assertArrayLength(productImages, 1);
  });

  it("does not render products when there are none", () => {
    cy.mount(<ProductList products={[]} />);

    const children = getByTestId("product-list").children();
    assertArrayLength(children, 0);
  });
});
