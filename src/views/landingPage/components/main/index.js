import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import landingBackgroound from 'assets/landingBackground.png'
import landingPageImage from 'assets/landingImageRight.png'
import Text from 'components/typography'
import CommonButton from 'components/button'
export default function Default() {
  return (
    <Box style={{
        backgroundImage: `URL(${landingBackgroound})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}>
        <Container sx={{
          paddingTop: '70px'
        }}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Text
                size='60px'
                text="The WordPress
            Team you've been
            looking for"
              >
                The WordPress
                Team you've been
                looking for
              </Text>
              <Text
                size='22px'
              >
                WordPress design, development,
                maintenance, & support since 2011.
              </Text><br /><br />
              <CommonButton
                variant='large'>
                Get a quote
              </CommonButton>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src={landingPageImage} alt='landingPageImage' width={'100%'} />
            </Grid>
          </Grid>

        </Container>
      </Box>
  )
}
