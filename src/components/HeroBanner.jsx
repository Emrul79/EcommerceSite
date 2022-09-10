import React from 'react'
import { Box, Stack, Typography,Button } from '@mui/material'

import HeroBannerImage from "../asstes/assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: "212px", xs: "70px" },
                ml: { sm: "50px" },

            }}
            position="relative"
            p="20px"
        >
            <Typography color="#ff2625" fontWeight="600" fontSize="26px">
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize:{lg:"50px", sm:"40px" ,xs:"30px"}
                }}

            >
                Sweat,Smile <br /> and Repeat
            </Typography>
            <Typography
            fontSize="24px"
            lineHeight="35px"
            mb="25px"
            mt="30px"
            >
                Checkout the most effective exiercise
            </Typography>
            <Button variant="contained" color="error"
            sx={{
                backgroundColor:"#ff2625",
                padding:"15px"
            }}
            
            >Explore Exercise</Button>


            <Typography 
            fontWeight={600}
            color="#f2625"
            sx={{
                opacity:"0.1",
                display:{lg:"block",xs:"none"}
            }}
            fontSize="190px"
            >
                Exercise
            </Typography>
            <img src={HeroBannerImage} alt="banner" className='hero-banner-img'/>
        </Box>
    )
}

export default HeroBanner