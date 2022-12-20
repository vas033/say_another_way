import React from 'react';
import { useSelector } from 'react-redux';
import { product } from '../../../features/productsSlice';
import { searchStringValue } from '../../../features/searchString';
// import { filterResults } from '../../../features/filteredProductsSlice';
import styles from './title.css';

export function Title() {
  const searchStr = useSelector(searchStringValue);
  const products = useSelector(product);

  return (
    <h1>{`${products.filter(item => item.title.toLocaleLowerCase().match(searchStr)).length} PRODUCTS`}</h1>
  );
}
