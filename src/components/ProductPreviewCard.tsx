import Button from "./Button.tsx"
import CartIcon from "./CartIcon.tsx"

type ProductPreviewCardProps = {
    title: string;
    type: string;
    description: string;
    salePrice: string;
    price: string;
    desktopImage: string;
    mobileImage: string;
}

const ProductPreviewCard = ({ title, type, description, salePrice, price, desktopImage:Desktop, mobileImage:Mobile}: ProductPreviewCardProps) => {
    return (
        <section className="product-preview-card" aria-label={title}>
            <div className="side" >
                <img className="desktop-image" src={Desktop} alt={title} />
                <img className="mobile-image" src={Mobile} alt={title} />
            </div>

            <div className="side">
                <div className="product-details">
                    <div className="product-header">
                        <h2 className="product-type">{type}</h2>
                        <h3 className="product-name bold">{title}</h3>

                        <p className="product-description">
                            {description}
                        </p>
                    </div>

                    <div className="cost-widget">
                        <p className="sale-price bold">{salePrice}</p>
                        <p className="price">{price}</p>
                    </div>

                    <Button text="Add to Cart" icon={CartIcon} />
                </div>
            </div>
        </section>)
}

export default ProductPreviewCard