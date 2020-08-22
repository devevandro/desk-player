import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import RadiosBrasil from '../RadiosBrasil/RadiosBrasil';
import RadiosUSA from '../RadiosUSA/RadiosUSA.jsx'
import MyRadios from '../MyRadios/MyRadios.jsx';
import RadiosItalia from '../RadiosItalia/RadiosItalia.jsx';
import './Radio.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        flexGrow: 1,
        top: -55,
        left: 225,
        zIndex: -1,
        boxShadow: 'none',
        backgroundColor: 'transparent',
    },
}));

const Radio = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <div id="radios">
            <div className={classes.root}>
                <AppBar style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} position="static">
                    <Tabs indicatorColor='transparent' value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} label="Brasil" {...a11yProps(0)} />
                        <Tab style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} label="Estados Unidos" {...a11yProps(1)} />
                        <Tab style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} label="Diversos" {...a11yProps(2)} />
                        <Tab style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} label="Itália" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} value={value} index={0}>
                    <RadiosBrasil />
                </TabPanel>
                <TabPanel style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} value={value} index={1}>
                    <RadiosUSA />
                </TabPanel>
                <TabPanel style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} value={value} index={2}>
                    <MyRadios />
                </TabPanel>
                <TabPanel style={{ backgroundColor: '#2f4f4f', boxShadow: 'none' }} value={value} index={3}>
                    <RadiosItalia />
                </TabPanel>v
            </div>
        </div>
    </>)
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default Radio;
