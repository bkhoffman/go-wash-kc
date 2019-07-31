import React from "react";
import Grid from '@material-ui/core/Grid';
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Item1 from '../images/car1.png'
import Item5 from '../images/car5.png'
import Item2 from '../images/car2.png'

const Home = () => {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12}>

                    <Paper style={{ marginTop: 30}} id = "paper-header">
                        <Typography id="paper-header-text">
                            BEST MOBILE DETAILING AND CAR WASH IN KC!
                        </Typography>
                    </Paper>
                    <Typography id="paper-header-text">
                        Top Packages!
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Card style={{ marginTop: 30, }}>
                        <CardActionArea component="a" href="./packages">
                            <CardMedia component="img" style={{ height: 140 }} image ={Item1}/>
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
                            <CardMedia component="img" height="140" image={Item2}/>
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
                            <CardMedia component="img" height="200" image={Item5}/>
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

                <Grid item xs={12}>
                    <Typography variant="h5" gutterBottom>
                        ABOUT US
                    </Typography>
                    <Divider />
                </Grid>
                    <Grid item xs></Grid>
                    <Grid item xs={6}>
                        <Typography component="p">
                                <p>Here at Go Wash KC we thrive off shinny things, shinny paint, shinny chrome, shinny consoles, shinny dash, shinny buttons and dials, shinny smiles. We go the extra miles.</p>
                                <p>Go Wash KC offers a money back guarantee on all of our services</p>
                                <p>1. If you are unsatisfied with any of our work and we are not able to fix it to your liking then we will give you your money back.</p>
                                <p>2. Go Wash KC saves you time and money.</p>
                                <p>3. We offer peace of mind and the stress relief of not needing to DIY everything. Relax in the confidence of knowing that your vehicle is being treated with only the highest quality materials by experienced professionals.
                                Go Wash KC lets you have one less thing to have to manage time for in your busy schedule.</p>
                                <p>4. You can go about your normal routine and we will come to you and detail your car while you attend to more important things in life. Save the time you would be spending sitting at a business having your car cleaned and have more time at home, the office, or your favorite recreational activity.</p>
                                <p>Go Wash KC can make your car shinny inside and out, guaranteed to make your smile shine.
                                <p>Thank you for your business! Have a fabulous day!</p>
                                <p>Your friends,</p>
                                <h4>Go Wash KC</h4>
                                <br></br>
                                <br></br>
                                <h6>Fine Print</h6>
                                <p>
                                    1 - Money back guarantee is subject to terms and conditions and may not include a full refund or compensation for all services.
                                </p>
                                <p>
                                2 - Exceptions to refund are made for permanent cosmetic damage (burns, cuts, tears, breaks, deep stains, etc)
                                </p>
                                <p>
                                3 - Savings compared to main competitors in local area or traveling to detailing station/ car wash and paying for services and materials.
                                </p>
                                <p>
                                4 - Go Wash KC is not a schedule assistance or time management program. We offer services that are able to be adaptable with location and time for your convenience.</p>
                                </p>
                        </Typography>
                    </Grid>
                    <Grid item xs></Grid>
            </Grid>
        </Container>
    )
}
export default Home;