import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import InfoIcon from '@mui/icons-material/Info';

function PhotoUploadDescription() {
  return (
    <Grid container spacing={2} alignItems="center">
      
      <Grid style={{
        backgroundColor:'red', marginTop:20,      }} item xs={12}>
        

        <Typography color={'white'} variant="body2">
          Upload a photo is not mandatory. If you choose not to upload, we will provide a sample image. We prioritize your privacy and security. However, please note that having a profile picture can greatly enhance your profile. We recommend uploading a good quality and smiling face picture. If you wish to have a verified profile, please contact us and provide your front, side, full, and half photos. For more details, please feel free to reach out to us.
        </Typography>
       
      </Grid>
       
    </Grid>
  );
}

export default PhotoUploadDescription;
