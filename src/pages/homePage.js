import React from 'react'
import Booklist from '../components/booklist'
import Header from '../components/header'
import ShopCartTable from '../components/shop-cart-table'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Booklist/>
      <ShopCartTable/>
    </div>
  )
}

export default HomePage