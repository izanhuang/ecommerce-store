import ProductCard from "../../components/product-card/ProductCard";

export default function Products({ products }) {
  return (
    <div className="p-4 flex flex-wrap justify-content-center gap-3">
      {
        products && products.length ? products.map(product => (<ProductCard key={product.id} product={product} />)) : null
      }
    </div>
  )
}