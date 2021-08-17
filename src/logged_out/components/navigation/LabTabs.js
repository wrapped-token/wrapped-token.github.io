import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.common.white,
    },
}));

export default function LabTabs(props) {
    const classes = useStyles();
    const labels = Object.keys(props.tabs);
    const [value, setValue] = React.useState(labels[0]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div>
            <TabContext value={value}>
                <AppBar position="static" color='default'>
                    <TabList onChange={handleChange} aria-label="simple tabs example">
                        {labels.map(label => (
                            <Tab
                                label={label}
                                value={label}
                                onClick={() => props.selectTab(label)}
                            />
                        ))}
                    </TabList>
                </AppBar>
            </TabContext>
        </div>
    );
}
