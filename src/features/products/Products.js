import { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout"
import ProductCard from "../../components/product-card/ProductCard";
import { getProducts } from "../../services/products/products";

export default function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    // const retrievedProducts = await getProducts();
    // if (retrievedProducts && retrievedProducts.length > 0) {
    //   setProducts(retrievedProducts)
    // }

    getProducts().then(res => setProducts(res.data))

  }, [])

  return (
    <Layout>
      <div className="p-4 flex flex-wrap gap-3">
        {
          products.map(product => (<ProductCard key={product.id} product={product} />))
        }
      </div>
    </Layout>
  )
}