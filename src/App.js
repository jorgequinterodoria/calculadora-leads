import './App.css';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import {
  Box,
  Slider,
  FormHelperText,
  Button,
  TextField,
  FormControl,
  InputLabel
} from '@mui/material';

import * as Yup from "yup";

function App() {
  const [Ganancia, setGanancia] = useState()
  const [tasaConversion, setTasaCoversion] = useState(0)
  const calcular = (values) => {
    let PersonalOperacionActual = 800 * parseInt(values.personas);
    let VentasMesActual = parseInt(values.vehiculos) * parseInt(values.precio);
    let conversion = ((parseInt(values.vehiculos) / parseInt(values.leads)) * 100).toFixed(1);
    let EbitdaActual = VentasMesActual * 0.75;
    let NetoActual = EbitdaActual - PersonalOperacionActual - parseInt(values.inversion);
    // eslint-disable-next-line
    let VentasMesAtom = VentasMesActual * 2;
    let EbitdaAtom = EbitdaActual * 2;
    let NetoAtom = EbitdaAtom - PersonalOperacionActual - parseInt(values.inversion) - 770;
    let gain = NetoAtom - NetoActual
    setGanancia(gain.toFixed());
    setGanancia(numberWithCommas(Ganancia))
    setTasaCoversion(conversion)
    console.log('personas: ', parseInt(values.personas))
    console.log('precio: ', parseInt(values.precio))
    console.log('vehiculos: ', parseInt(values.vehiculos))
    console.log('OperacionActual: ', parseInt(PersonalOperacionActual))
    console.log('Ventas Actuales: ', parseInt(VentasMesActual))
    console.log('tasa de conversion:', conversion)
    console.log('EbitdaActual:', EbitdaActual)
    console.log('NetoActual:', NetoActual)
    console.log('VentasMesAtom:', VentasMesAtom)
    console.log('EbitdaAtom:', EbitdaAtom)
    console.log('NetoAtom:', NetoAtom)
    console.log('Ganancia:', Ganancia)

  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="App">
      <Formik
        initialValues={{
          canal: 'Formulario Web',
          whatsapp: 'No',
          leads: 1000,
          personas: 1,
          vehiculos: 1,
          precio: 20000,
          inversion: 1000,
          email: ''
        }}
        validationSchema={Yup.object().shape({
          canal: Yup.string().required("El campo es obligatorio"),
          whatsapp: Yup.string().required("El campo es obligatorio"),
          leads: Yup.string().required("El campo es obligatorio"),
          personas: Yup.string().required("El campo es obligatorio"),
          vehiculos: Yup.string().required("El campo es obligatorio"),
          precio: Yup.string().required("El campo es obligatorio"),
          inversion: Yup.string().required("El campo es obligatorio"),
          email: Yup.string().email('El email no es válido').required("El campo es obligatorio"),
        })}
        onSubmit={async (
          values,
          { resetForm, setErrors, setStatus, setSubmitting }
        ) => {
          calcular(values);
        }}
      >
        {({ errors, handleChange, handleSubmit, touched, values, handleBlur }) => (

          <Form>
            <Box sx={{ maxWidth: 700 }}>
              <InputLabel>¿Cuál es tu canal digital de ventas principal?</InputLabel>
              <FormControl fullWidth>
                <TextField
                  error={Boolean(touched.canal && errors.canal)}
                  helpertext={touched.canal ? errors.canal : ""}
                  id="canal"
                  name='canal'
                  label=''
                  value={values.canal}
                  variant="outlined"
                  onChange={handleChange}
                  select
                  SelectProps={{ native: true }}
                  InputLabelProps={{ shrink: true }}
                >
                  <option key={'Formulario Web'} value='Formulario Web'>
                    Formulario Web
                  </option>
                  <option key={'Formulario de Facebook'} value='Formulario de Facebook'>
                    Formulario de Facebook
                  </option>
                  <option key={'Otro'} value='Otro'>
                    Otro
                  </option>
                </TextField>
                {touched.canal && <FormHelperText>{errors.canal}</FormHelperText>}
                <br />
                <br />
              </FormControl>
              <InputLabel>Tienes Whatsapp</InputLabel>
              <FormControl fullWidth>
                <TextField
                  className='whatsapp'
                  error={Boolean(touched.whatsapp && errors.whatsapp)}
                  helpertext={touched.whatsapp ? errors.whatsapp : ""}
                  id="whatsapp"
                  name='whatsapp'
                  label=''
                  value={values.whatsapp}
                  variant="outlined"
                  onChange={handleChange}
                  select
                  SelectProps={{ native: true }}
                  InputLabelProps={{ shrink: true }}
                >
                  <option key={'No'} value='No'>
                    No
                  </option>
                  <option key={'Si, ligado a un telefono'} value='Si, ligado a un telefono'>
                    Si, ligado a un telefono
                  </option>
                  <option key={'Si, WhatsApp con alguna plataforma'} value='Si, WhatsApp con alguna plataforma'>
                    Si, WhatsApp con alguna plataforma
                  </option>
                </TextField>
                {touched.whatsapp && <FormHelperText>{errors.whatsapp}</FormHelperText>}
                <br />
                <br />
              </FormControl>
              <InputLabel>¿Cuántos Leads generas al mes?</InputLabel>
              <Slider
                valueLabelDisplay="auto"
                id='leads'
                name='leads'
                min={1000}
                max={50000}
                step={50}
                defaultValue={values.leads}
                onChange={handleChange}
              />
              <InputLabel>{values.leads}</InputLabel>
              <br />
              <br />
              <FormControl fullWidth>
                <TextField
                  error={Boolean(touched.personas && errors.personas)}
                  helpertext={touched.personas ? errors.personas : ""}
                  id="personas"
                  name='personas'
                  label='¿Cuántas personas atienden a esos leads?'
                  value={values.personas}
                  variant="outlined"
                  onChange={handleChange}
                />
                <br />
                <br />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  error={Boolean(touched.vehiculos && errors.vehiculos)}
                  helpertext={touched.vehiculos ? errors.vehiculos : ""}
                  id="vehiculos"
                  name='vehiculos'
                  label='¿Cuántos vehículos vendes al mes?'
                  value={values.vehiculos}
                  variant="outlined"
                  onChange={handleChange}
                />
                <br />
                <br />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  error={Boolean(touched.precio && errors.precio)}
                  helpertext={touched.precio ? errors.precio : ""}
                  id="precio"
                  name='precio'
                  label='¿Cuál es el precio promedio del vehículo vendido? (USD)?'
                  value={values.precio}
                  variant="outlined"
                  onChange={handleChange}
                />
                <br />
                <br />
              </FormControl>
              <InputLabel>Inversión en mercadeo (USD)</InputLabel>
              <Slider
                valueLabelDisplay="on"
                name='inversion'
                id='inversion'
                min={50}
                max={10000}
                step={10}
                value={values.inversion}
                onChange={handleChange}

              />
              <InputLabel>$ {values.inversion} USD</InputLabel>
              <br />
              <br />
              <InputLabel>¿Cual es tu correo electrónico?</InputLabel>
              <FormControl fullWidth>
                <TextField
                  placeholder='Email'
                  id="email"
                  name='email'
                  label=''
                  value={values.email}
                  variant="outlined"
                  onChange={handleChange}

                />
                {touched.email && <FormHelperText>{errors.email}</FormHelperText>}
                <br />
                <br />
              </FormControl>
              <Button
                variant="contained"
                onClick={() => handleSubmit()}
                className='Boton'

              >
                Calcular
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      {Ganancia !== 0 && <div className='resultado'>
        <h2>La ganancia es USD {Ganancia} </h2>
        <h2>{tasaConversion}% de conversión en canal digital </h2>
      </div>}
    </div >
  );
}

export default App;
