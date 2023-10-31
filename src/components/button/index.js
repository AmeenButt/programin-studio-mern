import { Button } from '@mui/material'
import React from 'react'

export default function Default(props) {
    const { variant } = props
    return (
        <Button
            variant='contained'
            style={{
                fontSize: '12px',
                borderRadius: '10px',
                padding: variant == 'large' && '12px 25px',
                backgroundColor: '#0039BF',
                ':& hover': {
                    backgroundColor: '#0039BF'
                }
            }}>{props.children}</Button>
    )
}
