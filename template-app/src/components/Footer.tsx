import React, { FC, ReactElement } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'

export const Footer: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        backgroundColor: 'secondary.main',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography color="black" variant="h5">
              Template App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography color="textSecondary" variant="subtitle2">
                {`${new Date().getFullYear()} | React | Material UI | React Router`}
              </Typography>
            </Box>
            <Typography color="textSecondary" variant="subtitle2">
              This site has been designed using resources from Flaticon.com |
              Template icons created by Eucalyp
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
