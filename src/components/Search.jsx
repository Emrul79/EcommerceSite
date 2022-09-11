import React from 'react'

import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { useState } from 'react'

import { fetchDeta, exerciseOptions } from '../utilities/Fetchdeta'

const Search = () => {
    const [search, setSearch] = useState('');
    const [exercise, setexercise] = useState([]);

    console.log(search);
    const handleSearch =async  (e) => {
        
        console.log('hello world');
        if (search) {
            const exercisesDeta = await  fetchDeta('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
            const searchexercise =await exercisesDeta.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                    ||
                    exercise.target.toLowerCase().includes(search)
                    ||
                    exercise.equipment.toLowerCase().includes(search)
                    ||
                    exercise.bodypart.toLowerCase().includes(search)
                
            );
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            setSearch('');
            setexercise(searchexercise);
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
                Should Know moreeee
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
                        width: { lg: "700px", md: "450px", xs: "300px" },
                        backgroundColor: "#ddd",
                        borderRedius: "40px"
                    }}


                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Serch Exercixes"
                    type="text"
                />

                <Button className='search-btn'
                    sx={{
                        bgcolor: "#ff2625",
                        color: "#fff",
                        textTransform: "none",
                        width: { lg: "175px", xs: "80px" },
                        fontSize: { lg: "20px", xs: "14px" },
                        height: "56px",
                        transition: "0.5s all"

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