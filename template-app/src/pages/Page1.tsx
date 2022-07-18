import React, { ReactElement, FC } from 'react'
import { Box, Typography } from '@mui/material'

export const Page1: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: 'whitesmoke',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h3">Page 1</Typography>
    </Box>
  )
}
