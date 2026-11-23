import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductBySlug, PRODUCTS } from "@/data/awakenData";
import { ProductDetailClient } from "@/components/ProductDetailClient";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) {
    return { title: "Product Not Found | Awaken Bakery" };
  }
  return {
    title: `${product.title} | Awaken Bakery — 100% Gluten Free`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Awaken Bakery`,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  // Pick 3 related products from the same category (never the current product)
  const sameCategory = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  );
  const related = sameCategory.slice(0, 3);

  return <ProductDetailClient key={product.id} product={product} relatedProducts={related} />;
}
