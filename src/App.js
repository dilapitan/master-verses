import React, { useState } from 'react'

import { BrowserRouter as Router } from 'react-router-dom'

import MainLayout from './components/layouts/MainLayout'
import MainContent from './components/layouts/MainContent'

import { Container, CssBaseline, Paper } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import { useStyles } from './styles/MainLayoutStyles'

import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import Brightness4Icon from '@material-ui/icons/Brightness4'

function App() {
  const classes = useStyles()
  const [isLight, setIsLight] = useState(true)

  const theme = createMuiTheme({
    palette: {
      type: isLight ? 'light' : 'dark',
    },
  })

  let lightThemeIcon
  lightThemeIcon = isLight ? <BrightnessHighIcon /> : <Brightness4Icon />

  const handleChangeTheme = () => {
    setIsLight(!isLight)
  }

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <div className={classes.root}>
          <CssBaseline />
          <Router>
            <MainLayout
              lightThemeIcon={lightThemeIcon}
              handleChangeTheme={handleChangeTheme}
            />
            <main className={classes.content}>
              <div className={classes.appBarSpacer} />
              <Container maxWidth="lg" className={classes.container}>
                <MainContent />
              </Container>
            </main>
          </Router>
        </div>
      </Paper>
    </ThemeProvider>
  )
}

export default App
