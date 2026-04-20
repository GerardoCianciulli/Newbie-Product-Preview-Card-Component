import ProductPreviewCard from "./components/ProductPreviewCard";
import "./App.css";
import desktopImage from "./assets/image-product-desktop.jpg";
import mobileImage from "./assets/image-product-mobile.jpg";

const data = {
  type: "Perfume",
  title: "Gabrielle Essence Eau De Parfum",
  description:
    "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
  salePrice: 149.99,
  price: 169.99,
  desktopImage: desktopImage,
  mobileImage: mobileImage,
};

function App() {
  return (
    <main>
      <h1 className="bold">Product Preview Card Component</h1>
      <ProductPreviewCard
        type={data.type}
        title={data.title}
        description={data.description}
        salePrice={data.salePrice}
        price={data.price}
        desktopImage={data.desktopImage}
        mobileImage={data.mobileImage}
      />
    </main>
  );
}

export default App;
