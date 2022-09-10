import React from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner'
import Search from '../components/Search'
import Exercises from '../components/Exercises'


const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <Search/>
      <Exercises/>

    </Box>
  )
}

export default Home