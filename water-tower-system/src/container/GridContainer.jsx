import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BarChart from '../components/Humidity';
import BarChart2 from '../components/Precipitation';
import LineChart from '../components/Temperture';
import LineChart2 from '../components/WindVelocity';
import PrecipitationCard from '../components/PrecipitationCard';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



export default function GridContainer() {
  const weather = 'rain'
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={6} padding={4}>
         <Grid item xs={12} md={6} lg={6}>
         <Grid container>
          <Grid item xs={12}>
            <Item>
              <PrecipitationCard condition={weather}>
              </PrecipitationCard></Item>
          </Grid>
          </Grid>  
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Item><BarChart></BarChart></Item>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Item><BarChart2></BarChart2></Item>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Item><LineChart/></Item>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Item><LineChart2/></Item>
        </Grid>

      </Grid>
    </Box>
  );
}