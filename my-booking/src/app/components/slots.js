import { React, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { 
    Card,
    CardContent,
    CardActions,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    TextField,
    DialogActions,
} from "@mui/material";


const Slots = ({time, setReserveSlot}) => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setReserveSlot(user, time);
        setUser("");
        handleClose();
    };

    const handleChange = (event) => {
        setUser(event.target.value === " " ? "" : event.target.value);
    };

    function reserveSlot() {
    }

    return (
        <>
            <Container
                sx={{
                    width: 225,
                    height: 200,
                }}
            >
                <Card sx={{backgroundColor: '#c5e1a5'}}>
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
                        <Button variant='contained' size="small" onClick={handleClickOpen}>Reserve</Button>
                    </CardActions>
                </Card>
            </Container>

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Reserve Slot</DialogTitle>
                <DialogContent sx={{ paddingBottom: 0 }}>
                    <DialogContentText>
                        Please enter your Name to reserve {time} slot.
                    </DialogContentText>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="user"
                            name="text"
                            label="Name"
                            type="text"
                            value={user}
                            onChange={handleChange}
                            fullWidth
                            variant="standard"
                        />
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button variant='outlined' type="submit">Subscribe</Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Slots