import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import API from "utils/API";
import { Input, FormBtn } from "Components/Form";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const TemporaryDrawer = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
        users: [],
            userName: "",
            password: ""
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };



        const handleInputChange = event => {
            const { name, value } = event.target;
            setState({
                [name]: value
            });
        };

        const handleFormSubmit = event => {
            event.preventDefault();
            if (state.userName && state.password) {
                API.saveUser({
                    userName: state.userName,
                    password: state.password,
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err));
            }
        };
    

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            // onClick={toggleDrawer(side, false)}
            // onKeyDown={toggleDrawer(side, false)}
        >
            <form className="loginForm">
                <Input
                    value={state.userName}
                    onChange={handleInputChange}
                    name="userName"
                    placeholder="UserName (required)"
                />
                <Input
                    value={state.password}
                    onChange={handleInputChange}
                    name="password"
                    placeholder="Password (required)"
                />
                <FormBtn
                    disabled={!(state.userName && state.password)}
                    onClick={handleFormSubmit}
                >
                    Log in
                  </FormBtn>
            </form>
        </div>
    );

    return(
        <div>
        <Button onClick={toggleDrawer('right', true)}>Login</Button>
        <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
            {sideList('right')}
        </Drawer>
        </div >
    );
}

export default TemporaryDrawer;
