import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  isPriority?: boolean;
}

export default function ProductCard({
  product,
  isPriority = false,
}: ProductCardProps) {
  return (
    <article className="group rounded-xl border border-gray-800 bg-[#0f172a] shadow-sm transition hover:shadow-lg">
      <Link
        href={`/${product.id}`}
        className="block overflow-hidden rounded-t-xl"
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={product.thumbnail}
            alt={`${product.title} thumbnail`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={isPriority}
          />
        </div>
      </Link>
      <div className="p-4 space-y-2">
        <h3 className="text-base font-semibold text-white line-clamp-1">
          {product.title}
        </h3>
        <p className="text-sm text-gray-300 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-blue-400">
            ${product.price}
          </span>
          <Link
            href={`/product/${product.id}`}
            className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-blue-500"
            aria-label={`View details for ${product.title}`}
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
