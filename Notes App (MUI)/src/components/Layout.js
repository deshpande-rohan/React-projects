import React from 'react'
import { styled } from '@mui/system';
import { format } from 'date-fns/esm';
import { useHistory, useLocation } from 'react-router-dom';
import { Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, AppBar, Toolbar, Avatar } from '@mui/material';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const drawerWidth = 240;

// -------- STYLED COMPONENTS IN MUI
const Page = styled('div')(({theme}) => ({ 
    background: '#f9f9f9',
    width: '100%',
    padding: theme.spacing(3)
}));
const Root = styled('div')({ 
    display: 'flex',
});

//------ ACCESSING THEME & PROPS IN A STYLED COMPONENTS
const TypographyComp = styled(Typography)(({ theme, textColor }) => ({
    padding: theme.spacing(3),
    color: textColor,
}));
const AppBarComp = styled(AppBar)(({ theme }) => ({
    width: `calc(100% - ${drawerWidth}px)`,
}));

// ACCESSING MIXINS DEFINED IN MATERIAL UI
const ToolbarWrap = styled('div')(({ theme }) => theme.mixins.toolbar);

const Layout = ({ children }) => {
    const history = useHistory();
    const location = useLocation();
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlinedIcon color="secondary" />,
            path: '/',
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlinedIcon color="secondary" />,
            path: '/create',
        }
    ];

    return (
        <Root>
            <AppBarComp elevation={0}>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>
                        Today is the { format(new Date(), 'do MMMM yyyy')}
                    </Typography>
                    <Typography>Rohan</Typography>
                    <Avatar
                        sx={{ backgroundColor: 'yellowgreen', width: 30, height: 30, margin: '0 6px' }}
                        alt="Rohan"
                    >
                        R
                    </Avatar>
                </Toolbar>
            </AppBarComp>
            <Drawer
                sx={{
                    width: drawerWidth,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <div>
                    <TypographyComp textColor='#3070dd' variant="h5">
                        Ninja Notes
                    </TypographyComp>
                </div>
                <List>
                    {
                        menuItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                onClick={() => history.push(item.path)}
                                sx={{ backgroundColor: location.pathname === item.path && '#f4f4f4' }}
                            >
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText secondary>{item.text}</ListItemText>
                            </ListItem>
                        ))
                    }
                </List>
            </Drawer>
            <Page>
                <ToolbarWrap />
                {children}
            </Page>
        </Root>
    )
}

export default Layout