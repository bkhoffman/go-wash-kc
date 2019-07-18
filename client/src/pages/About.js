import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';



const About = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>

                    <Paper style={{ marginTop: 30 }}>
                        <Typography variant="h1">
                            Cool Catch Phrase Here!!
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6}>

                    <Card style={{ marginTop: 30, }}>
                        <CardActionArea component="a" href="./Packages.js">
                            <CardMedia component="img" style={{ height: 140 }} image ="..images/car5.png"/>
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
                </Grid>
                <Grid item xs={6}>

                    <Card style={{ marginTop: 30 }}>
                        <CardActionArea component="a" href="./Packages.js">
                            <CardMedia component="img" height="140" image="./images/car5.png"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Medium Package
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    $100.00
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12}>

                    <Card style={{ marginTop: 30 }}>
                        <CardActionArea component="a" href="./Packages.js">
                            <CardMedia component="img" height="140" image="./images/car5.png"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Best Package
                                    </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    $150.00
                                    </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;