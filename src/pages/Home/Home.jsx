import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import PopularGames from '../../components/PopularGame/PopularGames'
import Newsletter from '../../components/Newsletter/Newsletter'
import FeaturedGames from '../../components/FeaturedGames/FeaturedGames'
import Testimonials from '../../components/Testimonials/Testimonials'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularGames></PopularGames>
      <FeaturedGames></FeaturedGames>
      <Testimonials></Testimonials>
      <Newsletter></Newsletter>
    </div>
  )
}

export default Home
