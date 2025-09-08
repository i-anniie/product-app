import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { useFetchProducts } from "@/hooks/useFetchProducts";

const Product = () => {
  const { data, isLoading, error, refetch } = useFetchProducts(10);
  return (
    <>
      <SEO title="Products — Top 10" />
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-8 flex items-end justify-between">
            <div className="space-y-1">
              <h1 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
                Featured Products
              </h1>
              <p className="text-sm text-gray-300">
                Browse a curated list from DummyJSON
              </p>
            </div>
            <button
              onClick={() => void refetch()}
              className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            >
              Refresh
            </button>
          </header>

          {isLoading && <p className="text-gray-300">Loading...</p>}
          {error && <p className="text-red-400">Failed to load products.</p>}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.products?.map((p, idx) => (
              <ProductCard key={p.id} product={p} isPriority={idx < 2} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
