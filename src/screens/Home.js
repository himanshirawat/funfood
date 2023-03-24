import React from 'react'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
        <div><Header /></div>
        <div><Carousal /></div>
        <div className='m-3'>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div><Footer /></div>
    </div>
  )
}
