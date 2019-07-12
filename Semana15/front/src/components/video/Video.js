// import React from 'react'

// export default function Video(props) {
//     return (
//         <div className="card border-primary">
//           <img className="card-img-top" src="holder.js/100px180/" alt=""/>
//           <div className="card-body">
//                 <h4 className="card-title"> {props.video.vid_titu}</h4>
//                 <p className="card-text"> {props.video.vid_link}</p>
//           </div>
//         </div>
//            )
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Video(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} >
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton component={Link} to={`infovideo/${props.video._id}`}>
              <MoreVertIcon/>
            </IconButton>
          }
          title={props.video.vid_titu}
          subheader={props.video.vid_titu}
        />
        <CardMedia
          className={classes.media}
          image={`http://localhost:3700/api/getImagenByName/${props.video.vid_img}`}
          title={props.video.vid_link}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.video.vid_desc}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              {props.video.vid_desc}
            </Typography>
            <Typography paragraph>
            {props.video.vid_desc}
            </Typography>
            <Typography paragraph>
            {props.video.vid_desc}
            </Typography>
            <Typography>
            {props.video.vid_link}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
export default Video;
