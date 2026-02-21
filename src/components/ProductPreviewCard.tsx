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
        <div className="product-preview-card">
            <div className="section" >
                <img className="desktop-image" src={Desktop} alt={title} />
                <img className="mobile-image" src={Mobile} alt={title} />
            </div>

            <div className="section">
                <div className="product-details">
                    <div className="product-header">
                        <p className="product-type">{type}</p>
                        <p className="product-name bold">{title}</p>

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
        </div>)
}

export default ProductPreviewCard