import React from 'react';
import Container from '@mui/material/Container';
import { 
    Card,
    CardContent,
    Typography
 } from "@mui/material";

const ReservedSlots = ({time}) => {

  return (
    <>
        <Container
            sx={{
                width: 225,
                height: 200,
            }}
        >
            <Card sx={{backgroundColor: '#40c4ff'}}>
                <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Name:
                    </Typography>
                    <Typography variant="h5" component="div">
                        {time.name}
                    </Typography>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        Time:
                    </Typography>
                    <Typography variant="h5" component="div">
                        {time.time}
                    </Typography>
                    <br />
                </CardContent>
            </Card>
        </Container>
    </>
  )
}

export default ReservedSlots