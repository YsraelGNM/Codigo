//rfc
//rcc
import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

var classes = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 10,
    marginRight: 10,
    width: '50%',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  button: {
    display: "none"
  }
};


export default class CrearVideo extends Component {
  nomRef;
  desRef;
  linkRef;




  constructor(props) {
    super(props)
    this.nomRef = React.createRef()
    this.desRef = React.createRef()
    this.linkRef = React.createRef()
    this.videoRef = React.createRef()
    // const [open, setOpen] = React.useState(false);
    this.state = {
      open: false,
      idVideoCreado: '',
    };
  }




  handleSubmit = (e) => {
    e.preventDefault();
    let formulario = e.target;
    let objVideo = {
      vid_titu: this.nomRef.value,
      vid_descripcion: this.desRef.value,
      vid_link: this.linkRef.value
    }

    var myHeaders = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objVideo)
    }


    console.log(objVideo);

    var formData = new FormData();
    formData.append('archivo', this.videoRef.current.files[0],
    this.videoRef.current.files[0].name)

    fetch('http://localhost:3700/api/create', myHeaders)
      .then(response => { return response.json(); })
      .then(data => {
        console.log(data);
        if (data.message === 'Video Creado.') {
          let headersVideo = {
            method: 'POST',
            body: formData
          };
          fetch(`http://localhost:3700/api/video/upLoad/${data.content._id}`, headersVideo)
            .then(response2 => { return response2.json(); })
            .then(data2 => {
              console.log(data2);
              if (data2.message === 'Imagen Actualizada.') {
                alert('Se actualizo la imagen');
                formulario.reset();
                this.handleClick();
                this.setState({ idVideoCreado: data2.content._id })
              } else {
                alert('No se actualizo la imagen');
              }
            })
        }
      })

  }

  handleClick = () => {
    // setOpen(true);
    this.setState({ open: true });
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // setOpen(false);
    this.setState({ open: false });
  }

  handleRevertir = (event, reason) => {
    let headers = {
      method: 'DELETE',
    };
    fetch(`http://localhost:3700/api/delete/${this.state.idVideoCreado}`, headers)
      .then(response => { return response.json(); })
      .then(data => {
        console.log(data);
      })
  }




  render() {
    return (
      <React.Fragment>
        <form style={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            id="standard-helperText"
            label="Nombre"
            placeholder="Ejm.: Introduccion a Angular"
            style={classes.textField}
            helperText="Ingrese el Título del Video"
            margin="normal"
            inputRef={input => (this.nomRef = input)}
          />
          <TextField
            id="standard-multiline-flexible"
            label="Descripcion"
            multiline
            rowsMax="5"
            style={classes.textField}
            margin="normal"
            inputRef={input => (this.desRef = input)}
          />
          <TextField
            id="standard-helperText"
            label="Link (URL)"
            placeholder="Ejm.: https://www.youtube.com/as3rf485w5w"
            style={classes.textField}
            helperText="Ingrese el Link del Video"
            margin="normal"
            inputRef={input => (this.linkRef = input)}
          />
          <Button variant="contained" component="label">
            Subir imagen del video
                <input type="file" style={classes.button} ref={this.videoRef} />
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Subir video
          </Button>
        </form>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Se registro su Video exitosamente.</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleRevertir}>
              DESHACER
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.handleClose}>
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </React.Fragment>
    )
  }
}
