import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
// import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import API from "utils/API";
// import login from "../../pages/Login";

import { Input, FormBtn } from "Components/Form";
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
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [alertMessage, setAlertMessage] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    const handleFormSubmit = event => {
        event.preventDefault();
        if (email && password) {
            API.getUser({
                email: email,
                password: password,
            })
            .then(({ data: user}) => {
                API.localSetUser(user);
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


    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
        >
            <form className="loginForm">
                {alertMessage &&
                    <p value = {alertMessage}> Incorrect email or password entered.  Please try again. 
                    </p>
                }
                <i className="material-icons">person_outline</i>
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