import React from 'react'

import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

import { fetchDeta, exerciseOptions } from '../utilities/Fetchdeta'

const Search = () => {
    const [search,setsearch]=useState('')


    const handleSearch=async()=>{
        if(search){
            const exercisesDeta = await fetchDeta('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
            console.log(exercisesDeta);
        }
    } 
    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px">
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: "44px", xs: "30px" }
                }}
                mb="50px"
                textAlign="center"
            >
                Awesome Exercise Your <br />
                Should Know
            </Typography>
            <Box
                position="relative"
                mb="72px"
            >
                <TextField
                    sx={{
                        input: {
                            
                            fontweight: "700",
                            border: "none",
                            borderRedius: "4px"
                        },
                        width: { lg: "700px",md:"450px" ,xs: "300px"  },
                        backgroundColor:"#ddd",
                        borderRedius:"40px"
                    }}


                    height="76px"
                    value={search}
                    onChange={(e) => setsearch(e.target.value.toLowerCase())}
                    placeholder="Serch Exercixes"
                    type="text"
                />

                <Button className='search-btn'
                sx={{
                    bgcolor:"#ff2625",
                    color:"#fff",
                    textTransform:"none",
                    width:{lg:"175px",xs:"80px"},
                    fontSize:{lg:"20px", xs:"14px"},
                    height:"56px",
                    transition:"0.5s all"
            
                }}

                onClick={handleSearch}
                >
                    Search
                </Button>

            </Box>

        </Stack>
    )
}

export default Search