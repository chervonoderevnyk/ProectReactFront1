import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


export default function CustomizedRating() {
    return (
        <Box
            sx={{'& > legend': {mt: 0.6},}}>

            <Typography component="legend"></Typography>
            <Rating name="customized-10" defaultValue={0.6} max={10}
                    getLabelText={(value) => `${value} 
            Heart${value !== 1 ? 's' : ''}`} precision={0.1}/>
        </Box>
    );
}
