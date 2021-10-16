import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Drawer,Tooltip} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { useStyles } from "./styles";
import Routing from '../../Routes/Routing';
import mainLogo from './logo.png';
import { useHistory } from 'react-router-dom';
import { useTemplate } from '../../context/templateContext';
import { NavMenu } from './skeleton';




export function Header() {
    const { loggedin, username } = useTemplate();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const history = useHistory();

    const onClickHandler = () => {
        history.push("/login")
    }
    const onMenuClickHandler = (e,url)=>{
        history.push(url)
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                elevation={2}
            // style={{ background: "#000" }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    // style={{ color: "#fede5c" }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ display: "flex", flexGrow: "1" }}>
                        <Typography variant="h6" noWrap style={{ color: "#fff", fontFamily: "Verdana, Arial, Helvetica, sans-serif", letterSpacing: "3px" }} >
                            ASKUS&nbsp;
                        </Typography>
                        <Typography variant="h6" style={{ color: "#0076b5", backgroundColor: "#fff", fontFamily: "Verdana, Arial, Helvetica, sans-serif", letterSpacing: "3px" }} >
                            ANYTIME
                        </Typography>
                    </div>
                    {!loggedin && (<Button color="inherit" onClick={onClickHandler}>Login</Button>)}
                    {loggedin && (<Button color="inherit" >Hi,{username}</Button>)}
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {NavMenu.map(
                        ({ text, icon: Icon,routing, active }, index) => (
                            <Tooltip title={text}>
                                <ListItem
                                    button
                                    key={text}
                                    className="list"
                                    // selected={active}
                                    onClick={(e) => {
                                        onMenuClickHandler(e,routing);
                                    }}
                                >
                                    <ListItemIcon>
                                        <Icon />
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </Tooltip>
                        ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Routing />
            </main>
        </div>
    );
}
