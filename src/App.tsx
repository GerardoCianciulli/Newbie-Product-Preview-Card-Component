import ProductPreviewCard from './components/ProductPreviewCard'
import './App.css'
import desktopImage from './assets/image-product-desktop.jpg'
import mobileImage from './assets/image-product-mobile.jpg'

function App() {
  return (
    <main>
      <ProductPreviewCard type="Perfume" title="Gabrielle Essence Eau De Parfum" description="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
        salePrice="$149.99" price="$169.99" desktopImage={desktopImage} mobileImage={mobileImage} />
    </main>
  )
}

export default App
