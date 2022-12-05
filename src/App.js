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
  const [Ganancia, setGanancia] = useState(0)
  const calcular = (values) => {
    let PersonalOperacionActual = 800 * parseInt(values.personas);
    let VentasMesActual = values.vehiculos * parseInt(values.precio);
    let EbitdaActual = VentasMesActual * 0.75;
    let NetoActual = EbitdaActual - PersonalOperacionActual - parseInt(values.inversion);
    // eslint-disable-next-line
    let VentasMesAtom = VentasMesActual * 2;
    let EbitdaAtom = EbitdaActual * 2;
    let NetoAtom = EbitdaAtom - PersonalOperacionActual - parseInt(values.inversion) - 770;
    setGanancia(NetoAtom - NetoActual);
    setGanancia(numberWithCommas(parseInt(Ganancia.toFixed())))
    console.log(values)
    console.log(NetoActual);
    console.log(NetoAtom);
    console.log(Ganancia);
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div className="App">
      <Formik
        initialValues={{
          canal: '',
          whatsapp: '',
          leads: 1000,
          personas: 0,
          vehiculos: 0,
          precio: 0,
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
              <FormControl fullWidth>
                <TextField
                  error={Boolean(touched.canal && errors.canal)}
                  helpertext={touched.canal ? errors.canal : ""}
                  id="canal"
                  name='canal'
                  label='¿Cuál es tu canal digital de ventas principal?'
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
              <FormControl fullWidth>
                <TextField
                  error={Boolean(touched.whatsapp && errors.whatsapp)}
                  helpertext={touched.whatsapp ? errors.whatsapp : ""}
                  id="whatsapp"
                  name='whatsapp'
                  label='Tienes Whatsapp'
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
                valueLabelDisplay="auto"
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
              <FormControl fullWidth>
                <TextField
                  id="email"
                  name='email'
                  label='¿Cual es tu correo electrónico?'
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
              >
                Calcular
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
      {Ganancia !== 0 && <div>
        <h2>La ganancia es USD {Ganancia} </h2>
      </div>}
    </div >
  );
}

export default App;
