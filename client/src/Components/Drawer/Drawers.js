import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import API from "utils/API";
import { Input, FormBtn } from "components/Form";
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles({
    list: {
        width: 250,
    }
});

const TemporaryDrawer = () => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [userName, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (userName && password) {
            API.saveUser({
                userName: userName,
                password: password,
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };


    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
        >
            <form className="loginForm">
                <i className="material-icons">person_outline</i>
                <Input
                    value={userName}
                    onChange={event => setUsername(event.target.value)}
                    name="userName"
                    placeholder="UserName (required)"
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
                    disabled={!(userName && password)}
                    onClick={handleFormSubmit && handleDrawerClose}
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
                    <i className="material-icons">close</i>

          </IconButton>
                </div>
                <Divider />
                {sideList('right')}

            </Drawer>

        </div >
    );
}

export default TemporaryDrawer;