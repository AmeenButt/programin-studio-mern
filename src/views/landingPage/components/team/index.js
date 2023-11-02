import { Box, Grid } from '@mui/material'
import React from 'react'
import Text from 'components/typography'
import imageBgRings from 'assets/img-background-rings.png'
import person1Image from 'assets/person-image1.png'
import person2Image from 'assets/person-image2.png'
import person3Image from 'assets/person-image3.png'
import teamIcon from 'assets/teamIcon.png'
export default function Default() {
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Text size='18px'>
                        We're a team of 40+, <b>headquartered in the US</b>
                    </Text>
                    <Text size='53px' weight='700'>
                        Real People doing
                        real work, with
                        clients that matter
                    </Text>
                    <Text size='18px' >
                        We understand that an end-result is only as good as the
                        team working on it. That's why we've sought out the most
                        talented group of WordPress project managers, web
                        designers, web developers, and support staff — and
                        brought them together to build the leading WordPress
                        agency.
                    </Text><br/><br/>
                    <Text size='18px' color='#0039BF' style={{display:'flex', alignItems:'center'}}>
                        <img src={teamIcon} alt='teamIcon' height={'33px'} style={{
                            marginRight:'10px'
                        }} />Meet the team you'll be working with
                    </Text>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={5}>
                    <Box sx={{
                        display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'inline-flex',
                            lg: 'inline-flex'
                        }
                    }}>
                        <Box sx={{ position: 'relative', margin: '15px 25px', display: 'flex', justifyContent: 'center' }}>
                            <img src={imageBgRings} alt='imageBgRings' height={'200px'} />
                            <Box sx={{
                                position: 'absolute',
                                top: {
                                    xs: '24%',
                                    sm: '24%',
                                    md: '8%',
                                    lg: '8%',
                                },
                                left: {
                                    xs: '58%',
                                    sm: '58%',
                                    md: '21.5%',
                                    lg: '21.5%',
                                },
                                transform: {
                                    xs: 'translateX(-58%)',
                                    sm: 'translateX(-58%)',
                                    md: 'none',
                                    lg: 'none',
                                }
                            }}>

                                <img src={person1Image} alt='imageBgRings' height={'150px'} />
                            </Box>
                        </Box>
                        <Box sx={{
                            position: 'relative', margin: {
                                xs: '45px 25px',
                                sm: '15px 25px',
                                md: '115px 25px',
                                lg: '115px 25px',
                            }, display: 'flex', justifyContent: 'center'
                        }}>
                            <img src={imageBgRings} alt='imageBgRings' height={'200px'} />
                            <Box sx={{
                                position: 'absolute',
                                top: {
                                    xs: '24%',
                                    sm: '24%',
                                    md: '12%',
                                    lg: '12%',
                                },
                                left: {
                                    xs: '58%',
                                    sm: '58%',
                                    md: '21.5%',
                                    lg: '21.5%',
                                },
                                transform: {
                                    xs: 'translateX(-58%)',
                                    sm: 'translateX(-58%)',
                                    md: 'none',
                                    lg: 'none',
                                }
                            }}>

                                <img src={person2Image} alt='imageBgRings' height={'150px'} />
                            </Box>
                        </Box>
                        <Box sx={{
                            position: 'relative', margin: {
                                xs: '45px 25px',
                                sm: '15px 25px',
                                md: '215px 25px',
                                lg: '215px 25px',
                            }, display: 'flex', justifyContent: 'center'
                        }}>
                            <img src={imageBgRings} alt='imageBgRings' height={'200px'} />
                            <Box sx={{
                                position: 'absolute',
                                top: {
                                    xs: '24%',
                                    sm: '24%',
                                    md: '24%',
                                    lg: '24%',
                                },
                                left: {
                                    xs: '58%',
                                    sm: '58%',
                                    md: '21.5%',
                                    lg: '21.5%',
                                },
                                transform: {
                                    xs: 'translateX(-58%)',
                                    sm: 'translateX(-58%)',
                                    md: 'none',
                                    lg: 'none',
                                }
                            }}>

                                <img src={person3Image} alt='imageBgRings' height={'150px'} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
