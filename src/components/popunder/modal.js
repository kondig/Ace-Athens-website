import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import FontAwesome from 'react-fontawesome';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles((theme) => ({
    btn: {
        color: '#b73450',
    },
    btnOpen: {
        background: '#b73450',
        color: '#ffffff',
        fontWeight: 700,
        fontSize: '1rem',
        // width: 250px,
        border: 'none',
        padding: '15px',
        outline: 'none',
        "&:hover": {
            backgroundColor: '#ffffff',
            color: '#b73450',
            boxShadow: 'none',
        },
        "&:before": {
            content:'""',
            position:'absolute',
            top:0,
            right:0,
            height:'3px',
            width:0,
            background: '#b73450',
            transition:'400ms ease all',
        },
        "&:after": {
            content:'""',
            position:'absolute',
            top:0,
            right:0,
            height:'3px',
            width:0,
            background: '#b73450',
            transition:'400ms ease all',
            right:'inherit',
            top:'inherit',
            left:0,
            bottom:0,
        },
        "&:hover::before": {
            width:'100%',
            transition:'800ms ease all',
        },
        "&:hover::after": {
            width:'100%',
            transition:'800ms ease all',
        }
    },
    icon: {
        "&:hover": {
            backgroundColor: '#B73450',
            color: '#ffffff',
        }
    },
    title: {
        color: '#b73450',
        fontSize: '2rem',
    },
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Modal(props) {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} className={classes.btnOpen}>
        {props.modaltitle} &nbsp; <FontAwesome className={classes.icon} name='angle-right' spin={false}/>
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle onClose={handleClose} className={classes.title}>
          {props.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            {props.text}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className={classes.btn}>
            ΚΛΕΙΣΙΜΟ
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export {Modal}
