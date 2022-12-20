import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { product } from '../../../features/productsSlice';
import { searchStringValue, getValue } from '../../../features/searchString';
import styles from './search.css';

export function Search() {
  const dispatch = useDispatch();
  const products = useSelector(product);
  const searchStr = useSelector(searchStringValue)
  const searchInput = document.getElementById('searchInput');

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
   setTimeout(() => dispatch(getValue(inputValue.toLocaleLowerCase())), 400)
  }, [dispatch, inputValue])

  return (
    <Autocomplete
      id="searchInput"
      sx={{ width: '40%' }}
      inputValue={inputValue}
      options={products.map(item => item.title)}
      renderInput={(params) => <TextField {...params} label='Search product' />}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
    />
  );
}
