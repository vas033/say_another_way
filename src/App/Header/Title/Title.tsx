import React from 'react';
import { useSelector } from 'react-redux';
import { filterResults } from '../../../features/filteredProductsSlice';
import styles from './title.css';

export function Title() {
  const countProducts = useSelector(filterResults);

  return (
    <h1>{`${countProducts} PRODUCTS`}</h1>
  );
}
