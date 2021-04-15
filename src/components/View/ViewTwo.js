import React from "react";
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography} from "@material-ui/core";
import styled from "styled-components";

const Row = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Background = styled.div`
    background: linear-gradient(to bottom, white, gray)
`;

const Wrapper = styled.div`
    display: block;
    margin: auto;
    padding: 2em;
`

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        maxHeight: 450
    }
})

const ViewTwo = () => {
    const classes = useStyles()

    return (
        <Background>
            <Row>
                <Column>
                    <Wrapper>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Joy Division"
                                height="180"
                                image="https://i2.wp.com/timoelliott.com/blog/wp-content/uploads/2015/04/joy-division-unknown-pleasures-608x433-1.jpg?w=608&ssl=1"
                                title="Unknown Pleasures"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    Joy Division
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                    Designer Peter Saville's decision to go with pulsar radio waves is right up there with Martin Hannett’s spellbinding production in making this album a goth classic. Disney's Mickey Mouse shirt parody four decades later only reaffirmed its legend.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="dark">Share</Button>
                                <Button size="small" color="dark">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Wrapper>
                </Column>
                <Column>
                    <Wrapper>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Dark Side of the Moon"
                                height="180"
                                image="https://static.wikia.nocookie.net/pinkfloyd/images/8/8e/Dsotm1.jpg/revision/latest/scale-to-width-down/1000?cb=20200804221549"
                                title="Dark Side of the Moon" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">Dark Side of the Moon</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">This simple art says so much. The light going through a prism and coming out as a rainbow was meant to convey the band's stage lighting and the album's lyrics. And, as evidenced by the number of t-shirts bearing this image today, the prism has become synonymous with Floyd itself.</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="dark">Share</Button>
                                <Button size="small" color="dark">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Wrapper>
                </Column>
                <Column>
                    <Wrapper>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Abbey Road"
                                height="180"
                                image="https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg"
                                title="Abbey Road" />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">Abbey Road</Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">Does any other album cover on this list stop traffic? It's a testament to the lasting impression of this street-crossing photo that hundreds of fans re-create it every day outside Abbey Road Studios. There's even a webcam live feed of the attraction.</Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="dark">Share</Button>
                                <Button size="small" color="dark">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Wrapper>
                </Column>
            </Row>
        </Background>
    )
}

export default ViewTwo;