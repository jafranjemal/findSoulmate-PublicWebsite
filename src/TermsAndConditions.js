import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';

function TermsAndConditions() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={2}>
        Terms and Conditions
      </Typography>

      <Typography variant="body1" fontWeight="light" mb={2}>
        <Typography component="span" fontWeight="bold">
          1) Profile Deletion:
        </Typography>
        A profile can be deleted immediately if it is at least 1 month old. If a profile is less than 1 month old, you must wait until it reaches the minimum age before deleting it.
      </Typography>

      <Typography variant="body1" fontWeight="light" mb={2}>
        <Typography component="span" fontWeight="bold">
          2) Wedding References:
        </Typography>
        If your wedding was arranged through our find soulmate app, we may keep your basic details for reference purposes. All other details such as login information and membership details will be deleted.
      </Typography>

      <Typography variant="body1" fontWeight="light" mb={2}>
        <Typography component="span" fontWeight="bold">
          3) Platform Description:
        </Typography>
        <b>Find Soulmate PVT LTD </b> are not brokers or intermediaries. Our find soulmate app acts as a platform or search engine for profiles. <b>Find Soulmate PVT LTD </b> do not take responsibility for your search or the outcome of your wedding. <b>Find Soulmate PVT LTD </b> are not liable if your partner deceives you.
      </Typography>

      <Typography variant="body1" fontWeight="light" mb={2}>
        <Typography component="span" fontWeight="bold">
          4) Subscription Expiry:
        </Typography>
        When your subscription period expires, your profile will no longer appear in search results. To keep your profile active, you need an active membership.
      </Typography>

      <Typography variant="body1" fontWeight="light" mb={2}>
        <Typography component="span" fontWeight="bold">
          5) Minimum Registration Age:
        </Typography>
        The minimum age for registration on our app is 18 years.
      </Typography>

      <Typography variant="body1" fontWeight="light" mb={2}>
        <Typography component="span" fontWeight="bold">
          6) Reporting and Suspension:
        </Typography>
        If you encounter any profiles misbehaving or violating the terms, please report them to us. <b>Find Soulmate PVT LTD </b> will take immediate action within 24 hours, such as investigating fake profiles or unauthorized use of personal information.
      </Typography>

      <Typography variant="body1" fontWeight="light" mb={2}>
        <Typography component="span" fontWeight="bold">
          7) Fees:
        </Typography>
        Initial membership charges are applicable. Once you have exhausted your proposal sending limit within an active membership period, you can recharge your heart points without renewing the membership. If your membership is expired, you will need to purchase or renew a new membership package.
      </Typography>

      <Box display="flex" alignItems="center" mt={4}>
        <CheckCircleIcon sx={{ color: 'green', mr: 1 }} />
        <Typography variant="body2">
          By using our find soulmate app, you acknowledge and agree to abide by these terms and conditions.
        </Typography>
      </Box>

      <Box display="flex" alignItems="center" mt={2}>
        <InfoIcon sx={{ color: 'blue', mr: 1 }} />
        <Typography variant="body2">
          Please note that these terms and conditions are subject to change, and it is advisable to review them periodically for any updates.
        </Typography>
      </Box>
    </Box>
  );
}

export default TermsAndConditions;
