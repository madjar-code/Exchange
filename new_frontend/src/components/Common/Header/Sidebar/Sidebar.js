import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled, useTheme } from '@mui/material/styles';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Drawer,
  Divider,
  IconButton,
} from '@mui/material'

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import InfoIcon from '@mui/icons-material/Info';

import AuthContext from "../../../../context/AuthContext";

import cl from './Sidebar.module.css'

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const Sidebar = ({open, setOpen}) => {
  let {user, logoutUser} = useContext(AuthContext)

  let navigate = useNavigate()
  const theme = useTheme();
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const navLinkItems = [
    {
      text: 'Доска объявлений',
      path: '/',
      icon: SearchIcon,
    },
    {
      text: 'Мой профиль',
      path: '/my-profile',
      icon: AccountBoxIcon,
    },
    {
      text: 'Хранилище',
      path: '/bs-me',
      icon: LibraryBooksIcon,
    },
    {
      text: 'Справка',
      path: '/info',
      icon: InfoIcon,
    }
  ]

  return (
    <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '100%',
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
      <DrawerHeader>
        <p
          className={cl.sidebarHeader}
        >
          Разделы и действия
        </p>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List>
        {navLinkItems.map((navLinkItem, index) => (
          <ListItem 
            key={index} 
            disablePadding>
            <ListItemButton
              onClick={() => navigate(navLinkItem.path)}>
              <ListItemIcon>
                <navLinkItem.icon/>
              </ListItemIcon>
              <ListItemText primary={navLinkItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
        {user
        ? (
          <ListItem disablePadding>
            <ListItemButton
              onClick={logoutUser}>
              <ListItemIcon>
                <LogoutIcon/>
              </ListItemIcon>
              <ListItemText primary={'Выйти'} />
            </ListItemButton>
          </ListItem>
        )
        : (
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => navigate('/login')}>
              <ListItemIcon>
                <LoginIcon/>
              </ListItemIcon>
              <ListItemText primary={'Войти'} />
            </ListItemButton>
          </ListItem>
        )
        }
      </List>
    </Drawer>
  )
};

export default Sidebar;
