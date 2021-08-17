import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Toolbar, Box, Paper, TextField, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
    },
}));

export default function CenteredGrid(props) {
    const classes = useStyles();

    const [value, setValue] = React.useState('');
    const onChange = (event) => setValue(event.target.value);

    return (
        <div className={classes.root}>
            <Grid container spacing={2} className={classes.root}>
                <Grid item xs={2}>
                    <Paper className={classes.paper}>
                        <Typography variant='h6'>
                            Original Token
                        </Typography>

                        <TextField
                            select
                            label='Original Network'
                        >
                            <MenuItem
                                value='Ethereum'
                            >
                                Ethereum
                            </MenuItem>
                        </TextField>

                        <TextField
                            type='number'
                            label='Token Amount'
                        />
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}
