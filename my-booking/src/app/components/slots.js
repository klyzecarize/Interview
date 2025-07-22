import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { 
    Card,
    CardContent,
    CardActions,
    Typography
 } from "@mui/material";

const Slots = ({time, onClick}) => {

    function reserveSlot() {
        onClick(time);
    }

    return (
        <>
            <Container
                sx={{
                    width: 225,
                    height: 200,
                }}
            >
                <Card>
                    <CardContent>
                        <Typography align='center' gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            Time:
                        </Typography>
                        <Typography align='center' variant="h5" component="div">
                            {time}
                        </Typography>
                        <br />
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' size="small" onClick={reserveSlot}>Reserve</Button>
                    </CardActions>
                </Card>
            </Container>
        </>
    )
}

export default Slots