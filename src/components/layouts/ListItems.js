import React from 'react'

import { Link } from 'react-router-dom'

import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import BubbleChartIcon from '@material-ui/icons/BubbleChart'
import HelpIcon from '@material-ui/icons/Help'
import GitHubIcon from '@material-ui/icons/GitHub'

export const mainListItems = (
  <div>
    <ListItem to="/" component={Link} button>
      <ListItemIcon>
        <ViewModuleIcon />
      </ListItemIcon>
      <ListItemText primary="Memory Verses" />
    </ListItem>

    <ListItem to="/randomize" component={Link} button>
      <ListItemIcon>
        <BubbleChartIcon />
      </ListItemIcon>
      <ListItemText primary="Randomize" />
    </ListItem>

    <ListItem to="/about" component={Link} button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </div>
)

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <GitHubIcon />
      </ListItemIcon>
      <ListItemText primary="Github" />
    </ListItem>
  </div>
)
