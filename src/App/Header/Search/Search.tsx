import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getValue } from '../../../features/filteredProductsSlice';
import { Product, product, productsStatus } from '../../../features/productsSlice';
import styles from './search.css';

export function Search() {
  const dispatch = useDispatch();
  const products = useSelector(product);
  const productState = useSelector(productsStatus);

  const [inputValue, setInputValue] = useState('');

  const emptyArr: Product[] = []
  const [filteredProducts, setFilteredProducts] = useState(emptyArr);

  useEffect(() => {
    inputValue == ''
      ? setFilteredProducts(products)
      : setFilteredProducts(products.filter(item => item.title.toLowerCase().match(inputValue)));
  }, [inputValue])

  useEffect(() => { dispatch(getValue(filteredProducts)) }, [filteredProducts, dispatch])

  return (
    <TextField
    style={{width: '40%'}}
      label='Search for product'
      variant='outlined'
      onChange={e => {
        e.preventDefault;
        const input = e.currentTarget.value.toLowerCase();
        setInputValue(input)
      }}
    />
  );
}
