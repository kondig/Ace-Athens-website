import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    margin: '15px 15px',
    width: 240,
    height:200,
    backgroundColor: '#ffffff',
    fontFamily: 'Open Sans, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 200,
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems:'center',
    },
    "&:hover": {
        transform: "translateY(-10px)",
    }
  },
  media: {
      width: 200,
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        width: 180
      },
  },
  content: {
      fontFamily: 'Open Sans, sans-serif',
      color:'#000000',
      fontSize: '1 rem',
      textDecoration: 'none',
  },
  cardactions: {
      display:'flex',
      justifyContent:'space-between',
      backgroundColor: 'transparent'
  },
  container: {
    flexBasis: '100%',
    backgroundColor:'#000000'
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
  ptext: {
      color: "#000000"
  },
  cardlink: {
      flex: "1 1 30%",
  },
  link: {
      textDecoration: 'none',
      color: '#000000'
  }
}));

function Stone(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className={classes.root}>
        {/*<a href={props.link} target="_blank" rel="noopener noreferrer" className="link" >
            <CardMedia
              className={classes.media}
              image={props.imgfile}
              title={props.imgtitle}
              width='100%'
              height='100%'
              component='img'
            />
        </a> */}
      <Link className={classes.link} to={props.link}>
        <CardHeader className={classes.content}
            title={props.title}
            subheader={props.subheader}
        />
      </Link>
      {/*<CardActions disableSpacing className={classes.cardactions}>
          <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
            <FontAwesomeIcon icon={faAngleDown} color="#000000" size="1x" />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph className={classes.ptext}>
          {props.ptext1}
          </Typography>
        </CardContent>
      </Collapse>*/}
    </Card>
  );
}

class Service extends React.Component {
	render() {
    const { title, link, subheader} = this.props;
		return (
			<div>
				<Stone
                  title = { title }
                  subheader = { subheader }
                  link = { link }
                 />
			</div>
		);
	}
}

export {Service};
