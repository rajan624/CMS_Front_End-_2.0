import React from 'react'
import Navbar from './Navbar'
import ImageAnimatePresence from './ImageAnimatePresence'
import TrendingLatest from './TrendingLatestCard'
import FeatruredPost from './FeatruredPost'
function Homepage() {
  return (
    <>
    <Navbar/>
    <ImageAnimatePresence/>
    <TrendingLatest/>
    <FeatruredPost/>
    </>
  )
}

export default Homepage