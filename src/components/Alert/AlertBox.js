import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Button } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CloseIcon from '@material-ui/icons/Close';
import { Error } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { removeError } from '../../features/profile/Profile.slice';

const useStyles = makeStyles((theme) => ({
  alert: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: theme.spacing(2),
    borderRadius: theme.spacing(1),
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  icon: {
    marginRight: theme.spacing(2),
    color: '#4caf50',
  },
  message: {
    fontWeight: 'bold',
    color: '#4caf50',
    marginBottom: theme.spacing(2),
  },
  closeButtonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
  },
  closeButton: {
    marginLeft: theme.spacing(2),
  },
}));

const AlertBox = ({ message, type="info", handleBack }) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(true);
  const { stepOne, isSaved, stepTwo , registerError , errorMsg , profilePicture} = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  const handleClose = () => {
    setIsOpen(false);
   dispatch(removeError())

   if(handleBack !== null) handleBack()
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Box className={classes.alert}>
      {
        type==="info" ?(<CheckCircleOutlineIcon color='primary' className={classes.icon} />):(
          <Error  color='error' />
        )
      }
      <Typography variant="body1" className={classes.message}>
        {message}
      </Typography>
      <Box className={classes.closeButtonRow}>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleClose}
          className={classes.closeButton}
          endIcon={<CloseIcon />}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default AlertBox;
