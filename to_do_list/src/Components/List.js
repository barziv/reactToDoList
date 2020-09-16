import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem } from '@material-ui/core';
import Assignment from './Assignment';

const useStyle = makeStyles({
    list: {
        margin: 'auto',
        width: '50%',
    }
})

function AssignmentsList() {
    const classes=useStyle();
    const data = useSelector(state => state);

    return (
        <List className={classes.list}>
            {Object.entries(data).map((item) => {
                return (
                    <ListItem id={item[0]}>
                        <Assignment id={item[0]} isDone={item[1]['done']}>
                            {item[1]['assignment']}
                        </Assignment>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default AssignmentsList;