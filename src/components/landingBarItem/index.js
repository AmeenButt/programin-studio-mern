import { Box } from '@mui/material'
import React from 'react'
import Text from 'components/typography'
export default function Default({ heading, text, icon }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{
                border: '1px solid #0039BF',
                backgroundColor: 'rgba(0, 57, 191, 0.06)',
                display: 'flex',
                alignItems: 'center',
                padding: '15px',
                borderRadius: '50%'
            }}>
                <img src={icon} alt='stars' height={'40px'} />
            </Box>
            <Box sx={{
                marginLeft: '15px'
            }}>
                <Text size='40px' weight='700'>{heading}</Text>
                <Text size='14px' weight='400'>{text}</Text>
            </Box>
        </Box>
    )
}
