import { Box, Button, Container, Menu, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import logo from 'assets/logo.png'
import routes from 'routes'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import MenuIcon from '@mui/icons-material/Menu';
import CommonButton from 'components/button'
function Default() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event, item) => {
        setAnchorEl(event.currentTarget === anchorEl ? null : event.currentTarget);
    };
    return (
        <Box sx={{
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.04);',
            padding: '20px 0px',
            width: '100%',
            overflow: 'hidden'
        }}>
            <Container sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box sx={{
                    height: '40px',
                }}>
                    <img src={logo} alt='logo' height={'100%'} />
                </Box>
                <Box sx={{
                    display: {
                        xs: 'none',
                        sm: 'none',
                        md: 'none',
                        lg: 'flex',
                    }
                }}>
                    {
                        routes.map((item, index) =>
                            <MenuItem key={index} sx={{
                                fontSize: '12px',
                                fontWeight: '500'
                            }} onClick={handleMenuOpen}>
                                {item.name} {item.subRoutes && ((anchorEl == item) ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />)}
                            </MenuItem>)
                    }
                        <CommonButton>Get a Quote</CommonButton>
                </Box>
                <Box sx={{
                    display: {
                        xs: 'flex',
                        sm: 'flex',
                        md: 'flex',
                        lg: 'none',
                    },
                    alignItems:'center'
                }}>
                    <MenuIcon sx={{
                        cursor:'pointer'
                    }}/>
                </Box>
            </Container>
        </Box>
    )
}

export default Default