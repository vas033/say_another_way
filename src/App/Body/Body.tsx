import { Grid } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { product, productsStatus } from '../../features/productsSlice';
import { searchStringValue } from '../../features/searchString';
import { round } from '../../functions/round';
import styles from './body.css';
import { ProductCard } from './ProductCard';

export function Body() {
  const products = useSelector(product);
  const productState = useSelector(productsStatus);
  const searchStr = useSelector(searchStringValue);

  const [filteredArr, setFilteredArr] = useState(products);

  useEffect(() => {
    !searchStr ? setFilteredArr(products) : setFilteredArr(products.filter(item => item.title.toLowerCase().match(searchStr)));
    console.log(filteredArr)
  }, [searchStr, productState])

  return (
    <Grid spacing={2} container columns={{ xs: 12 }} style={{ maxWidth: 1000, margin: 'auto' }} >
      {
        productState == 'succeeded' &&
        filteredArr.map(item => {
          return (
            <Grid item xs={4} md={10} key={nanoid(6)} >
              <ProductCard 
                imgUrl={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                rating={round(item.rating.rate)}
                price={item.price}
              />
            </Grid>
          )
        })
      }
    </Grid>
  );
}
