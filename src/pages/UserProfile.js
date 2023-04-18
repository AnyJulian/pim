import React from "react";
import LoginButton from "../ressouces/buttonLogin";
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function UserProfile() {
  const photoURL = LoginButton.photoURL;
  
  return (
    <div>
      <Typography>User Profile Page</Typography>
      <Box sx={{ typography: 'h3' }}>
      <Avatar size='xs' alt="Julian Giraud" src={photoURL} sx={{fontFamily:'Public Sans'}} />
      </Box>
    </div>
  );
}

export default UserProfile;
