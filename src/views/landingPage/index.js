import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import MainLanding from 'views/landingPage/components/main'
import LandingBar from 'views/landingPage/components/landingBar'
import CompanyBar from 'views/landingPage/components/companyBar'
import Team from 'views/landingPage/components/team'
import Text from 'components/typography'
import teamIcon from 'assets/teamIcon.png'
import image1 from 'assets/development1.png'
import image2 from 'assets/development2.png'
import image3 from 'assets/development3.png'
import image4 from 'assets/development4.png'
import { useState } from 'react'
export default function Default() {
  const [data, setData] = useState([
    {
      image: image1,
      name: 'Wordpress'
    },
    {
      image: image2,
      name: 'Wordpress'
    },
    {
      image: image3,
      name: 'Wordpress'
    },
    {
      image: image4,
      name: 'Wordpress'
    },
  ])
  const [hoverIndex, setHoverIndex] = useState(null)
  return (
    <>
      <MainLanding />
      <Container>
        <LandingBar />
        <CompanyBar />
        <Team />
      </Container>
      <Box sx={{
        backgroundColor: '#FFFCF5',
        height: '500px'
      }}>
        <Container>
          <center><Box sx={{
            maxWidth: {
              xs: '100%',
              sm: '100%',
              md: '80%',
              lg: '80%',
            }
          }}>

            <Text size='53px' weight='700'>
              Expert WordPress design,
              development, support &
              maintenance
            </Text><br />
            <Text size='18px'>
              Take a look at some of our work
            </Text><br />
            <Text size='18px' color='#0039BF' style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img src={teamIcon} alt='teamIcon' height={'33px'} style={{
                marginRight: '10px'
              }} />Meet the team you'll be working with
            </Text>
          </Box></center><br /><br /><br />
          <Grid container spacing={2}>
            {data?.map((item, index) => (
              <Grid key={index} item xs={12} sm={6} md={3} lg={3} onMouseEnter={()=>{
                setHoverIndex(index)
              }} onMouseLeave={()=>{
                setHoverIndex(null)
              }} sx={{ position: 'relative' }}>
                <img src={item.image} alt='image1' width={'100%'} style={{
                  cursor:'pointer'
                }} />
                <Box sx={{
                  height: '40px',
                  width: {
                    xs:'97%',
                    sm:'97%',
                    md:'94%',
                    lg:'94%',
                  },
                  position: 'absolute',
                  bottom: '1%',
                  left: {
                    xs:'3%',
                    sm:'3%',
                    md:'6%',
                    lg:'6%',
                  },
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: '0px 0px 10px 10px',
                  display: hoverIndex == index ? 'flex' : 'none',
                  alignItems:'center',
                  
                }}>
                  <Text color='white' size='18px' style={{padding:'0px 20px'}}>
                    {item.name}
                  </Text>
                </Box>
              </Grid>))}
          </Grid>
        </Container>
      </Box>
    </>
  )
}
