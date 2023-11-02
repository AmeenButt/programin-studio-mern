import { Typography } from '@mui/material'
import React from 'react'

export default function Default(props) {
    const { size, weight, color, style } = props
    return (
        <Typography sx={{
            fontSize: size,
            fontWeight: weight,
            color:color,
            fontFamily: size?.substring(0, 2) < 24 ? "'Poppins', sans-serif" : "'Crimson Pro', serif",
            ...style
        }}>
            {props.children}
        </Typography>
    )
}
