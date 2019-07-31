import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import cartReducer from '../Components/Reducers/cartReducer'
import { addToCart } from '../Components/actions/cartActions'



const useStyles = makeStyles({
    mainFeaturedPost: {
        position: 'relative',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        color: "black",
        marginBottom: 50,
        marginTop: 20,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        textAlign: 'center',
        padding: 10,
    }
});

const User = () => {
    const classes = useStyles();

    const [userName, setUsername] = React.useState("");

    function setUser() {
        userName = "Test"
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <Paper className={classes.mainFeaturedPost}>
                    <div className={classes.overlay} />
                    <Grid container>
                        <Grid item md>
                            <div className={classes.mainFeaturedPostContent}>
                                <Typography component="h1" variant="h2" color="inherit" gutterBottom>
                                    Hello {setUser}!
                                </Typography>
                                <Typography variant="h5" color="inherit" paragraph gutterBottom>
                                    Multiple lines of text that form the lede, informing new readers quickly and
                                    efficiently about what's most interesting in this post's contents.
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Paper>
                <Grid item>
                    <div>
                        <Typography variant="h3" gutterBottom>
                            Previously Purchased Packages
                        </Typography>
                        <Grid item xs={6} >
                            <Paper className={classes.mainFeaturedPostContent} variant="h3" gutterBottom>                   

                            </Paper>
                        </Grid>
                    </div>
                </Grid>
            </Container>
        </React.Fragment>
    )
}
export default User;
