import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './app.css';
import { AppDispatch, RootState } from '../store/store'
import { fetchProducts, productsCount, product } from '../features/productsSlice';
import { Header } from './Header';
import { Body } from './Body';
import { getValue } from '../features/filteredProductsSlice';

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  const productsArr = useSelector(product);

  const productsStat = useSelector<RootState>((state) => state.products.status);

  useEffect(() => {
    switch (productsStat) {
      case 'idle':
        dispatch(fetchProducts())
      case 'succeeded':
        dispatch(getValue(productsArr))
    }
  }, [productsStat, dispatch])

  return (
    <div className={styles.container}>
      <Header />
      <Body />
    </div>
  );
}


