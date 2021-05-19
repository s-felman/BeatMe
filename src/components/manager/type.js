import React , {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Search from "../image/image";
import Faker from "faker";
import {Link} from 'react-router-dom';


const images = [
  {
    url: Faker.image.sports(),
    title: 'חידון',
    width: '40%',
    path: "/edit"
  },
  {
    url: Faker.image.sports(),
    title: 'משימות',
    width: '30%',
    path: "/edit"
  },
  {
    url: Faker.image.city(),
    title: 'פרויקט משותף',
    width: '30%',
    path: "/team"
  },
  {
    url: Faker.image.cats(),
    title: 'תחרות',
    width: '40%',
    path: "/edit"
  },
  {
    url: Faker.image.animals(),
    title: 'משימות',
    width: '30%',
    path: "/edit"
  },
  {
    url: Faker.image.sports(),
    title: 'עבודה',
    width: '30%',
    path: "/edit"
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


export default function ButtonBases() {
  const classes = useStyles();
  const [type1,setType]=useState()
 
  
  return (
    <div className={classes.root}>
      {images.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}
        >
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} /><Link to={image.path} onChange={()=>setType(type1=image.path)} >
          <span className={classes.imageButton}>          
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />  
            </Typography>
          </span> </Link>

        </ButtonBase>
      ))}
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.2/react.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/15.6.2/react-dom.min.js"></script>

<div id="container">

</div>*/}  
 <Search selectedType={useState.type1}></Search>
    </div> 
 
  );
}