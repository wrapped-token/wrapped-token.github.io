import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Toolbar, Typography, TextField, MenuItem, Button, Tooltip } from '@material-ui/core';

import NavBar from './navigation/NavBar';
import Footer from './navigation/Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
        backgroundColor: theme.palette.secondary.main,
        
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        height: 199
    },
}));

const originals = ['Ethereum'];
const wraps = ['Avalanche', 'Binance', 'Counterparty'];

export default function CenteredGrid() {
    const classes = useStyles();

    const [original, setoriginal] = React.useState(originals[0]);
    const [wrapped, setwrapped] = React.useState(wraps[0]);
    const [amount, setamount] = React.useState(0);

    return (
        <div className={classes.root}>
            <Toolbar />
            <Toolbar />

            <Grid container
                spacing={3}
                justifyContent='center'
            >
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        
                        <Typography variant='h6'>
                            Original Token
                        </Typography>

                        <TextField
                            select required
                            label='Original Network'
                            value={original}
                            onChange={event => {
                                setoriginal(event.target.value)
                            }}
                        >
                            {originals.map(value => (
                                <MenuItem
                                    value={value}
                                >
                                    {value}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            type='number' required
                            label='Token Amount'
                            value={amount}
                            onChange={event => {
                                setamount(event.target.value)
                            }}
                        />
                    </Paper>
                </Grid>
                
                <Grid item xs={3}>
                    <Paper className={classes.paper}>
                        
                        <Typography variant='h6'>
                            Wrapped Token
                        </Typography>

                        <TextField
                            select required
                            label='Wrapped Network'
                            value={wrapped}
                            onChange={event => {
                                setwrapped(event.target.value)
                            }}
                        >
                            {wraps.map(value => (
                                <MenuItem
                                    value={value}
                                >
                                    {value}
                                </MenuItem>
                            ))}
                        </TextField>

                        <br /><br />
                        
                        <Tooltip
                            title={`Create ${amount} wrapped ${original} tokens on the ${wrapped} network`}
                        >
                            <Button variant="contained" color="primary">
                                Submit
                            </Button>
                        </Tooltip>
                    </Paper>
                </Grid>
            </Grid>                
            <Toolbar />

        </div>
    );
}
