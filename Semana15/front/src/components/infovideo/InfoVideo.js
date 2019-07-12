import React, { useState, useEffect } from 'react'

import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Likes from './Likes';
import Comments from './Comments';

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
}));


const useFetch = url => {
    const [data, setData] = useState(null);

    async function fetchData() {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => { fetchData() }, [url]);
    console.log(data);

    return data;
};

export default function InfoVideo(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    console.log(props.match.params.id);
    const data = useFetch(`http://localhost:3700/api/video/${props.match.params.id}`);

    if (!data) {
        return <div>Loading...</div>;
    } else {
        return (
            //   <ul>
            //     <li>{data.id}</li>
            //     <li>{data.title}</li>
            //   </ul>
            <div>
                <h1>{data.content.vid_titu}</h1>
                <br />
                <iframe width="100%" height="300px" src={data.content.vid_link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <br />

                <div className={classes.root}>
                    <AppBar position="static" color="default">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth">

                            <Tab label="Descripcion" />
                            <Tab label="Likes" />
                            <Tab label="Comentarios" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                    >
                        <TabContainer dir={theme.direction}>{data.content.vid_desc}</TabContainer>
                        <TabContainer dir={theme.direction}>
                            {
                                data.content.vid_likes.map((lik, i) => {
                                    return <Likes usuario={lik} key={i} />
                                })
                            }
                        </TabContainer>
                        <TabContainer dir={theme.direction}>
                            {
                                data.content.vid_comments.map((lik, i) => {
                                    return <Comments usuario={lik} key={i} />
                                })
                            }
                        </TabContainer>
                    </SwipeableViews>
                </div>
            </div>
        )
    }
}
