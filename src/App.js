import React from 'react'
import { AppBar, Container, Toolbar, IconButton, MenuItem, Typography, Box, Button, makeStyles, Paper, Grid, Card, CardMedia,  CardActionArea, CardContent, CardActions, } from '@material-ui/core';
import { Layers } from '@mui/icons-material';



const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),

    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(6),
    marginTop: theme.spacing(8)
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundOverlay: "rgba (0,0,0,.3"
  }
}))
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {

  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-laabel="menu" className={classes.menuButton}>
              <MenuItem>YO</MenuItem>

            </IconButton>
            <Typography variant="h6" className={classes.title}>Web Dev</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">Log in</Button>
            </Box>
            <Button color="secondary" variant="contained">Sign in</Button>
          </Toolbar>

        </Container>

      </AppBar>
      <main>
        <Paper classname={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://artworld.ru/images/cms/content/catalog2/romm_osennij_pejzazh_maslom_zakat_stupaya_tiho_solncu_vsled_ar190307.jpg)` }}>
          <Container fixed>
            <div classname={classes.overlay} />
            <Grid container>
              <Grid item md={6}>

                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Web Devel
                  </Typography>
                  <Typography
                    variant="h5"
                    color="inherit"
                    paragraph
                  >
                    Web Devel    Web Devel
                    Web Devel Web DevelWeb DevelWeb Devel
                    Web DevelWeb DevelWeb DevelWeb DevelWeb Devel
                    Web DevelWeb DevelWeb DevelWeb Devel
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>

                </div>
              </Grid>
            </Grid>
          </Container>


        </Paper>
        <div className={classes.mainContent}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              WebDeveloperBlog
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              WebDeveloperBlog   WebDeveloperBlog
              WebDeveloperBlog    WebDeveloperBlog
              WebDeveloperBlog   WebDeveloperBlog
            </Typography>
            <div className={classes.mainButtons}>
              <Grid container
                spacing={2}
                justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" >Start</Button>


                </Grid>
                <Grid item>

                  <Button variant="outlined" color="primary" > Learn more</Button>

                </Grid>

              </Grid>


            </div>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container spacing={4}>
                {cards.map((card) => {
                  <Grid item key={card} xs={12} sm={6} md={4}>
<Card className={classes.card}>
  <CardMedia
  classesName={classes.cardMedia}
  image="https://oir.mobi/uploads/posts/2021-06/1623086922_44-oir_mobi-p-stilizovannii-peizazh-priroda-krasivo-foto-47.jpg"
  title="Image title"/>
<CardContent className={classes.cardContent}>
<Typography variant="h5" gutterBottom>
  Blog Post
</Typography>
<Typography>
  Blog Post Description
</Typography>
</CardContent>
<CardActions>
  <Button size="small" color="primary">
View
  </Button>
  <Button size="small" color="primary">
    Edit
    </Button>
    <Layers/>
    
</CardActions>
</Card>
                  </Grid>
                })}
              </Grid>
            </Container>
          </Container>
        </div>
      </main>
    </>
  );
}

export default App;
