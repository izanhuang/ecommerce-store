import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './product-card.css'

export default function ProductCard({ product }) {
  return (
    <Card className="md:w-15rem h-20rem">
      <div className="flex flex-column justify-space-between gap-2">
        <div className="image-wrapper">
          <img alt="Card" src={product.image} className="image" />
        </div>
        <div className="header-wrapper flex justify-space-between align-items-center gap-4">
          <div className="flex flex-column">
            <span className="title">{product.title}</span>
          </div>
          <span className="price">{product.price}</span>
        </div>
        <Button label="Add to cart" icon="pi pi-shopping-cart" />
      </div>
    </Card>
  )
}