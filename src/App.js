import './App.css';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';

function App() {

  const [canal, setCanal] = useState('');
  const [whatsapp, setWhatsapp] = useState('')
  const [leads, setLeads] = useState(1000)
  const [personas, setPersonas] = useState(0)
  const [vehiculos, setVehiculos] = useState(0)
  const [precio, setPrecio] = useState(0)
  const [inversion, setInversion] = useState(0)
  const [email, setEmail] = useState('');

  const handleChangeCanal = (event) => {
    setCanal(event.target.value);
  };
  const handleChangeWhatsapp = (event) => {
    setWhatsapp(event.target.value);
  };
  const handleChangeLeads = (event) => {
    setLeads(event.target.value);
  };
  const handleChangePersonas = (event) => {
    setPersonas(event.target.value);
  };
  const handleChangeVehiculos = (event) => {
    setVehiculos(event.target.value);
  };
  const handleChangePrecio = (event) => {
    setPrecio(event.target.value);
  };
  const handleChangeInversion = (event) => {
    setInversion(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const calcular = () => {
    console.log('si sirve')
  }
  return (
    <div className="App">
      <Formik
        initialValues={{
          canal,
          whatsapp,
          leads,
          personas,
          vehiculos,
          precio,
          inversion,
          email
        }}
        onSubmit={calcular()}
      >
        <Form>
          <Box sx={{ maxWidth: 700 }}>
            <FormControl fullWidth>
              <InputLabel>¿Cuál es tu canal digital de ventas principal?</InputLabel>
              <Select
                id="canal"
                value={canal}
                label="Canal"
                onChange={handleChangeCanal}
              >
                <MenuItem value={'Formulario Web'}>Formulario Web</MenuItem>
                <MenuItem value={'Formulario de Facebook'}>Formulario de Facebook</MenuItem>
                <MenuItem value={'Otro'}>Otro</MenuItem>
              </Select>
              <br />
              <br />
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Tienes Whatsapp</InputLabel>
              <Select
                id="whatsapp"
                value={whatsapp}
                label="WhatsApp"
                onChange={handleChangeWhatsapp}
              >
                <MenuItem value={'No'}>No</MenuItem>
                <MenuItem value={'Si, ligado a un telefono'}>Formulario de Facebook</MenuItem>
                <MenuItem value={'Si, WhatsApp con alguna plataforma'}>Si, WhatsApp con alguna plataforma</MenuItem>
              </Select>
              <br />
              <br />
            </FormControl>
            <InputLabel>¿Cuántos Leads generas al mes?</InputLabel>
            <Slider
              valueLabelDisplay="auto"
              min={1000}
              max={50000}
              step={50}
              defaultValue={leads}
              onChange={handleChangeLeads}
            />
            <InputLabel>{leads}</InputLabel>
            <br />
            <br />
            <FormControl fullWidth>
              <TextField
                id="personas"
                name='personas'
                label='¿Cuántas personas atienden a esos leads?'
                value={personas}
                variant="outlined"
                onChange={handleChangePersonas}
              />
              <br />
              <br />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="vehiculos"
                name='vehiculos'
                label='¿Cuántos vehículos vendes al mes?'
                value={vehiculos}
                variant="outlined"
                onChange={handleChangeVehiculos}
              />
              <br />
              <br />
            </FormControl>
            <FormControl fullWidth>
              <TextField
                id="precio"
                name='precio'
                label='¿Cuál es el precio promedio del vehículo vendido? (USD)?'
                value={precio}
                variant="outlined"
                onChange={handleChangePrecio}
              />
              <br />
              <br />
            </FormControl>
            <InputLabel>Inversión en mercadeo (USD)</InputLabel>
            <Slider
              valueLabelDisplay="auto"
              min={50}
              max={10000}
              step={10}
              defaultValue={inversion}
              onChange={handleChangeInversion}
            />
            <InputLabel>$ {inversion} USD</InputLabel>
            <br />
            <br />
            <FormControl fullWidth>
              <TextField
                id="email"
                name='email'
                label='¿Cual es tu correo electrónico?'
                value={email}
                variant="outlined"
                onChange={handleChangeEmail}
              />
              <br />
              <br />
            </FormControl>
          </Box>
        </Form>
      </Formik>
    </div >
  );
}

export default App;
