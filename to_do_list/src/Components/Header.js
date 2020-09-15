import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    header: {
        color: '#d54d7b', 
        fontFamily: "Great Vibes cursive",
        fontSize: '15vh',
        fontWeight: 'normal',
        marginBottom: '0vh',
        marginTop: '4vh',
        textAlign: 'center',
    }
})

function Header(props) {
    const classes = useStyle();

    return (
        <h1 className={classes.header}>{props.children}</h1>
    )
}

export default Header;