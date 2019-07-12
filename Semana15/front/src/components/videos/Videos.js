import React, { Component } from 'react'
import Video from '../video/Video';
import Pagination from '../pagination/Pagination';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import {Link} from 'react-router-dom';

const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: 2,
    },
    fab: {
        position:'absolute',
        bottom:'50px',
        right:'50px'
      },
  });

export default class Videos extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            pageOfItems: [],
            cargado:false
        }

        this.onChangePage = this.onChangePage.bind(this);

    }



    componentDidMount(){
        fetch('http://localhost:3700/api/video').then(response=>{
            return response.json();
        }).then(data=>{
            this.setState({
                videos: data.content,
                cargado: true
                //videos: [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }))
            })
        });
    }


    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        const classes = useStyles();
        //const { spacing } = this.state;
        let { cargado } = this.state;

        if(cargado){
            return (
                // <div>
                //     <h3>Lista de Productos</h3>
                //     {
                //         videos.map((vid, i) => {
                //             return <Video video={vid} key={i} />
                //         })
                //     }
                // </div>
    
                <React.Fragment>
                    <Grid container className={classes.root} item xs={12} justify="center" spacing={3}>

                        {
                                // this.state.pageOfItems.map(item =>
                                // <div key={item._id}>{item.vid_titu}</div>
                                // )
                                this.state.pageOfItems.map((vid, i) => {
                                            return <Video video={vid} key={i} />
                                        })
                        }
                        
                    </Grid>
                    <Pagination items={this.state.videos} onChangePage={this.onChangePage} />
                    <Fab color="secondary" aria-label="Edit" style={{
        position:'absolute',
        bottom:'50px',
        right:'50px'
      }} component={Link} to ="/crearvideo">
                        <Icon>add_icon</Icon>
                    </Fab>
                </React.Fragment>













    
                // <div>
                //     <div className="container">
                //         <div className="text-center">
                //             <h1>Lista de Videos</h1>
                //             {
                //                 // this.state.pageOfItems.map(item =>
                //                 // <div key={item._id}>{item.vid_titu}</div>
                //                 // )
                //                 this.state.pageOfItems.map((vid, i) => {
                //                              return <Video video={vid} key={i} />
                //                          })
                //             }
                //             <Pagination items={this.state.videos} onChangePage={this.onChangePage} />
                //         </div>
                //     </div>
                //     <hr />
                // </div>
    
    
            )
        }else{
            return(
                <LinearProgress variant="query"/>
            )
        }
       
    }
}
