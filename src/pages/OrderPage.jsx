import React from 'react'
import OrderForm from '../component/OrderForm'
import OrderList from '../component/OrderList'

export default function OrderPage() {
  return (
    <>
    <div className='order' id='order'>
        <OrderForm />
        <OrderList />
    </div>
    </>
  )
}
