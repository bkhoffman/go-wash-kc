import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    catchPhrase: {
        padding: theme.spacing(1),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
    media: {
        height: 140,
      },
}));

const classes = useStyles;

const About = () => {
    return (
        <Container maxWidth="lg">
            <Paper className={classes.catchPhrase} style={{marginTop: 30}}>
                <Typography variant="h1">
                    Cool Catch Phrase Here!!
                </Typography>
            </Paper>
                <Card className={classes.card} style={{marginTop:30}}>
                    <CardActionArea component="a" href="./Packages.js">
                        <CardMedia component="img" height="140" image="./images/car5.png" title="Standard Package"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Standard Package
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   $50.00
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                </Card>
        </Container>
    )
}

export default About;