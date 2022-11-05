import React from 'react';
import styles from './header.css';
import { Search } from './Search';
import { Title } from './Title';

export function Header() {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingLeft: '2%',
        paddingRight: '2%'
      }}>
      <Title />
      <Search />
    </header>
  );
}
