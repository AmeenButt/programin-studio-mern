import React from 'react'
import companiesBarIcon from 'assets/companiesBar.png'
import { Box } from '@mui/material'
export default function Default() {
    return (
        <Box sx={{
            margin: '30px 0px 60px 0px'
        }}>
            <img src={companiesBarIcon} alt='companiesBarIcon' width={'100%'} />
        </Box>
    )
}
