import { Grid } from '@mui/material';
import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import { useSelector } from 'react-redux';
import { searchResults } from '../../features/filteredProductsSlice';
import { product, productsStatus } from '../../features/productsSlice';
import { round } from '../../functions/round';
import styles from './body.css';
import { ProductCard } from './ProductCard';

export function Body() {
  const products = useSelector(searchResults);
  const productState = useSelector(productsStatus);

  return (
    <Grid spacing={2} container columns={{xs: 12}} style={{maxWidth: 1000, margin: 'auto'}} >
      {
      productState == 'succeeded' && 
        products.map(item => {
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
