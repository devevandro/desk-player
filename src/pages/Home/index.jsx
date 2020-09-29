import React, {useState} from 'react';
import PropTypes from 'prop-types';
import SideNav from '../../Components/SideNav/SideNav.jsx';
import Player from '../../Components/Player/Player.jsx';
import Radio from '../../Components/Radio/Radio.jsx';
import RadioIcon from '@material-ui/icons/Radio';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import Tabs from "@material-ui/core/Tabs";
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import './Home.scss';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}>
            {value === index && (
                <Box p={2} style={{border: 'none'}}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

//código para moficar a cor dos icones
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: 'transparent',
        color: 'white',
        position: 'relative',
        display: 'flex',
        width: 430,
        height: 300,
        top: 50,
        zIndex: 1,

        '& > svg': {
            margin: theme.spacing(2),
        },
    },
}));

const Home = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<>
        <div id="main">
            <div className="controls">
                <button className="btn-minimize"><img src="/assets/icons/icon-minus.png" alt="" /></button>
                <button className="btn-close"><img src="/assets/icons/icon-close.png" alt="" /></button>{/* 
                <button className="btn-minimize"><img src="build/assets/icons/icon-minus.png" alt="" /></button>
                <button className="btn-close"><img src="build/assets/icons/icon-close.png" alt="" /></button> */}
            </div>

            <SideNav />

            <div className={classes.root}>
                <Tabs indicatorColor='transparent' orientation="vertical" variant="scrollable" value={value} onChange={handleChange} aria-label="Vertical tabs example" className={classes.tabs}>
                    <Tab icon={<MusicVideoIcon  style={{position: 'absolute', top: '26px', left: '15px'}} />} label="Player" {...a11yProps(1)} />
                    <Tab icon={<RadioIcon style={{position: 'absolute', top: '23px', left: '16px'}} />} label="Rádio" {...a11yProps(0)} />
                </Tabs>

                <TabPanel value={value} index={1}>
                    <Radio />
                </TabPanel>

                <TabPanel value={value} index={0}>
                    <Player />
                </TabPanel>
            </div>
        </div>
    </>);
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default Home;
