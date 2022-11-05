import { Card, CardContent, CardHeader, CardMedia, Grid, IconButton, Rating, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './productcard.css';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface IProductCard {
  imgUrl: string
  title: string
  category: string
  description: string
  rating: number
  price: number
}

export function ProductCard(props: IProductCard) {

  const styleHandler = (e: React.SyntheticEvent) => {
    const el = e.currentTarget;
    el.classList.toggle(styles.hideText);
  }

  return (
    <Card className={styles.container}>
      <Grid container justifyContent='center' >
        <CardMedia
          component='img'
          image={props.imgUrl}
          alt={props.title}
          style={{ maxHeight: 280, width: 'auto' }}
        />
      </Grid>
      <CardHeader component='h3'
        className={styles.hideText + ' ' + styles.title}
        title={props.title}
        onClick={styleHandler}
      />
      <CardContent>
        <Grid container columns={{ xs: 12 }} spacing={2} justifyContent="space-between" style={{ height: '100%' }}>
          <Grid xs={8} item>
            <Stack spacing={2}>
              <Typography variant='body2' component='p' className={styles.hideText + ' ' + styles.desc} onClick={styleHandler} >
                {props.description}
              </Typography>
              <Rating value={props.rating} readOnly className={styles.rating} />
            </Stack>
          </Grid>
          <Grid xs={4} item>
            <Stack spacing={2}>
              <Typography component='div'>
                {props.price.toFixed(2)}
              </Typography>
              <Typography component='div' className={styles.category + ' ' + styles.hideText} onClick={styleHandler}>
                {props.category}
              </Typography>
            </Stack>
            <IconButton className={styles.addToCart} aria-label="add to shopping cart">
              <AddShoppingCartIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardContent>
    </Card >
  );
}
