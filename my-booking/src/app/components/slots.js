import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Slots = ({time}) => {

  return (
    <>
        <Container maxWidth="sm" 
            sx={{
                width: 200,
                height: 200,
                border: 'solid',
            }}
        >
            {/* <Box
            sx={{
                width: 100,
                height: 100,
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
            }}
            /> */}
            <Button variant="contained">
            asdasd
            </Button>
            <h1>Time: {time}</h1>
        </Container>

        
    </>
  )
}

export default Slots