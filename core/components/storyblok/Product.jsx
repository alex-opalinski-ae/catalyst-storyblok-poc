'use client';

import { useLocale } from 'next-intl';
import useSWR from 'swr';

import {
  BcProductSchema,
  useBcProductToVibesProduct,
} from '~/lib/makeswift/utils/use-bc-product-to-vibes-product/use-bc-product-to-vibes-product';
import { ProductCard, ProductCardSkeleton } from '~/vibes/soul/primitives/product-card';

export default function Product({ blok, className, badge, ...props }) {
  const bcProductToVibesProduct = useBcProductToVibesProduct();
  const locale = useLocale();
  const { data, isLoading } = useSWR(
    blok.ID ? `/api/products/${blok.ID}?locale=${locale}` : null,
    async (url) =>
      fetch(url)
        .then((r) => r.json())
        .then(BcProductSchema.parse),
  );
  
  if (blok.ID == null || isLoading || data == null) {
    return <ProductCardSkeleton className={className} />;
  }

  const product = bcProductToVibesProduct(data);  
    
  console.log('product',product);

  return (
    <ProductCard
      className={className}
      product={{
        ...product,
      }}
      {...props}
    />
  );
}