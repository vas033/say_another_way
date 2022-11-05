import React from 'react';
import { useSelector } from 'react-redux';
import { productsCount } from '../../../features/productsSlice';
import styles from './title.css';

export function Title() {
  const countProducts = useSelector(productsCount);

  return (
    <h1>{`${countProducts} PRODUCTS`}</h1>
  );
}
