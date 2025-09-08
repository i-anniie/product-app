import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import SEO from "@/components/SEO";
import { useFetchProductDetail } from "@/hooks/useFetchProductDetail";

export default function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useFetchProductDetail(id as string);

  const title = data ? `${data.title} — $${data.price}` : "Product Details";
  const description = data?.description ?? "Explore product details";

  return (
    <>
      <SEO title={title} description={description} image={data?.thumbnail} />
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div>
            <Link
              href="/"
              className="text-lg text-blue-400 hover:text-blue-300"
            >
              Back to all products
            </Link>
          </div>
          {isLoading && <p className="text-gray-300">Loading...</p>}
          {!isLoading && data && (
            <article className="grid grid-cols-1 gap-8 md:grid-cols-5">
              <div className="md:col-span-2 flex flex-col gap-3">
                <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-white/20 bg-white/5">
                  <Image
                    src={data.thumbnail}
                    alt={`${data.title} image`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {data.images.slice(0, 5).map((src, idx) => (
                    <div
                      key={src + idx}
                      className="relative aspect-square overflow-hidden rounded-lg border border-gray-800"
                    >
                      <Image
                        src={src}
                        alt={`${data.title} ${idx + 1}`}
                        fill
                        sizes="20vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-3 text-gray-200">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {data.title}
                  </h1>
                </div>
                <p className="text-gray-300 text-sm">{data.description}</p>
                <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                  {[
                    {
                      label: "Price",
                      value: `$${data.price}`,
                      valueClass: "text-lg font-semibold text-blue-400",
                      colSpan: "col-span-1",
                    },
                    {
                      label: "Rating",
                      value: data.rating,
                      valueClass: "text-lg font-semibold",
                      colSpan: "col-span-1",
                    },
                    {
                      label: "Brand",
                      value: data.brand,
                      valueClass: "font-medium",
                      colSpan: "col-span-1",
                    },
                    {
                      label: "Category",
                      value: data.category,
                      valueClass: "font-medium",
                      colSpan: "col-span-1",
                    },
                    {
                      label: "Stock",
                      value: data.stock,
                      valueClass: "font-medium",
                      colSpan: "col-span-2",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-lg border border-gray-800 ${item.colSpan}`}
                    >
                      <div className="flex flex-col gap-1 p-4">
                        <span className="text-gray-400">{item.label}</span>
                        <span className={item.valueClass}>{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </section>
    </>
  );
}
