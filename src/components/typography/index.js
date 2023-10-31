import { Typography } from '@mui/material'
import React from 'react'

export default function Default(props) {
    const { size, weight } = props
    return (
        <Typography sx={{
            fontSize: size,
            fontWeight: weight,
            fontFamilt: 'Roboto'
        }}>
            {props.children}
        </Typography>
    )
}
