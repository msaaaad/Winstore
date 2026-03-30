import HeroBanner from "@/components/home/HeroBanner"
import CategorySlider from "@/components/home/CategorySlider"
import NewArrivals from "@/components/home/NewArrivals"
import BestDeals from "@/components/home/BestDeals"
import { getCategories, getProducts, getProductsByCategory } from "@/actions/products"

export default async function HomePage() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ])

  // Fetch products for each category in parallel
  const categoryProducts = await Promise.all(
    categories.map((cat) => getProductsByCategory(cat.name))
  )

  // Build a Record<categoryName, Product[]> for BestDeals
  const productsByCategory: Record<string, typeof products> = {}
  categories.forEach((cat, i) => {
    productsByCategory[cat.name] = categoryProducts[i]
  })

  return (
    <div>
      <HeroBanner />
      <CategorySlider categories={categories} />
      <NewArrivals products={products} />
      <BestDeals categories={categories} productsByCategory={productsByCategory} />
    </div>
  )
}