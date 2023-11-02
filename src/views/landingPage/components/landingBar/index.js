import { Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import stars from 'assets/stars.png'
import person from 'assets/person.png'
import tick from 'assets/tick.png'
import hand from 'assets/hand.png'
import LandingBarItem from 'components/landingBarItem'
export default function Default() {
    const [landingBarData, setLandingBarData] = useState([
        {
          heading: '300+',
          text: '5-Star Google Reviews',
          icon: stars
        },
        {
          heading: '40+',
          text: 'Reliable Experts',
          icon: person
        },
        {
          heading: '100%',
          text: 'Uptime Guarantee',
          icon: tick
        },
        {
          heading: '12+',
          text: 'Years of serving clients',
          icon: hand
        },
      ])
  return (
    <Box sx={{
        boxShadow: '0px 0px 20px 10px rgba(0, 0, 0, 0.08)',
        backgroundColor: 'white',
        padding: '20px 20px',
        margin: '60px 0px'
      }}>
        <Grid container spacing={3}>
          {landingBarData.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <LandingBarItem key={index} heading={item.heading} text={item.text} icon={item.icon} />
            </Grid>
          ))}
        </Grid>
      </Box>
  )
}
