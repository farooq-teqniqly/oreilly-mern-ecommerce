import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductList from "src/components/ProductList";
import products from "src/data/products";

function HomePage() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to Pro Shop</h1>
          <ProductList products={products} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
