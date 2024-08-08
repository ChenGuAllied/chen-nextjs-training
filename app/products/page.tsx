import React from 'react';
import Link from 'next/link';

const ProductsPage = () => {
  return (
    <div>
      <h1>Products Page</h1>
      <p>This is the products page content.</p>
      <p>products page paragraph 1</p>
      <p>
        <Link href="/">
					Homepage
				</Link>
      </p>
    </div>
  );
};

export default ProductsPage;