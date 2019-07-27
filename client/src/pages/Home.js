import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { black } from "ansi-colors";
// import drawerImage from "../../resources/images/drawer.jpg";

// const backgroundImage: `url($https:\\thumbs.gfycat.com\NauticalAncientIndianglassfish-size_restricted.gif)`
// *eslint; no-unused-expressions; ["error", { "allowShortCircuit": true}]*
var sectionStyle = {
    backgroundColor: "black",
    backgroundImage: "url(https://thumbs.gfycat.com/NauticalAncientIndianglassfish-size_restricted.gif)"
  };

const Home = () => {
    return (
        <Container maxWidth="lg" style={sectionStyle}>
            <Grid container spacing={3}>
                <Grid item xs={12}>

                    <Paper style={{ marginTop: 30 }}>
                        <Typography variant="h1">
                            Clean your car where you are!!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>

                    <Card style={{ marginTop: 30, }}>
                        <CardActionArea component="a" href="./packages">
                            <CardMedia component="img" style={{ height: 140 }} image ="/static/media/car5.c08def0c.png"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Go Wash KC
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    $50.00
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6}>

                    <Card style={{ marginTop: 30 }}>
                        <CardActionArea component="a" href="./packages">
                            <CardMedia component="img" height="140" image="/static/media/car4.fce70109.png"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    KC Drip
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    $200.00
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12}>

                    <Card style={{ marginTop: 30 }}>
                        <CardActionArea component="a" href="./packages">
                            <CardMedia component="img" height="500" image="/static/media/car1.dcdaadd1.png"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    The Boss
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    $500
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
   )
}

export default Home;
