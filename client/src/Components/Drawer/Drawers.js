import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import API from "utils/API";
// import login from "../../pages/Login";
import { Redirect } from 'react-router-dom';
import { Input, FormBtn } from "Components/Form";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    list: {
        width: 250,
       },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        justifyContent: 'flex-start'
    }
});

const TemporaryDrawer = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [alertMessage, setAlertMessage] = React.useState(false);
    const [loggedIn, setLoggedIn] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);

    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (email && password) {
            API.loginUser({
                email: email,
                password: password,
            })
            .then(({ data: user}) => {
                API.localSetUser(user);
                setLoggedIn(true);
                handleDrawerClose()
              })
            .catch(err => {
              alert()
              console.log(err)
            });
        }
    };

    alert = () => {
       setAlertMessage(true);
      }

    if (loggedIn) {
      return <Redirect to = "/users" />;
    }

    if (alertMessage) {
        return <Redirect to = "/login" />;
    }

    const sideList = side => (
        
        <div
            className={classes.list}
            role="presentation"
        >
            <form className="loginForm">
                <span className="material-icons">person_outline</span>
                <Input
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    name="email"
                    placeholder="Email (required)"
                />
                <i className="material-icons">lock</i>

                <Input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    name="password"
                    placeholder="Password (required)"
                    type="password"
                />
                <FormBtn
                    disabled={!(email && password)}
                    onClick={handleFormSubmit}
                >
                    Log in
                  </FormBtn>
            </form>
        </div>
    );

    return (

        <div>
            <Button onClick={handleDrawerOpen}>Login</Button>
            <Drawer variant="persistent" anchor="right" open={open}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                    <i className="material-icons">chevron_right</i>

          </IconButton>
                </div>
                <Divider />
                {sideList('right')}

            </Drawer>

        </div >
    );
}

export default TemporaryDrawer;
