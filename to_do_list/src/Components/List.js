import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import Assignment from './Assignment';

const useStyle = makeStyles({
    list: {
        margin: 'auto',
        width: '50%',
    }
})

function AssignmentsList(props) {
    const classes=useStyle();

    return (
        <List className={classes.list}>
            {Object.entries(props.data).map((item) => {
                return (
                    <ListItem id={item[0]}>
                        <Assignment id={item[0]} isDone={item[1]['done']} changeItem={props.change} delete={props.delete}>
                            {item[1]['assignment']}
                        </Assignment>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default AssignmentsList;