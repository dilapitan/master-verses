import React, { useState } from 'react'

import clsx from 'clsx'

import { mainListItems, secondaryListItems } from './ListItems'

import {
  AppBar,
  Drawer,
  Divider,
  IconButton,
  List,
  Toolbar,
  Typography,
} from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

import { useStyles } from '../../styles/MainLayoutStyles'

function MainLayout({ lightThemeIcon, handleChangeTheme }) {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Master Verses
          </Typography>
          <IconButton onClick={handleChangeTheme}>{lightThemeIcon}</IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
    </div>
  )
}

export default MainLayout
