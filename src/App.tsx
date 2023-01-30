import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { Box, Button, createTheme, ThemeProvider, Typography } from '@mui/material'
import Home from './components/home';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider theme={darkTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App