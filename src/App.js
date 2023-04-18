import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import AddGame from "./pages/AddGame";
import CreaDeContenu from "./pages/CreaDeContenu";
import SelectGames from "./pages/SelectGames";
import PokemonNoireII from "./pages/PokemonNoireII";
import Message from "./pages/Message";
import UserProfile from "./pages/UserProfile";
import Blog from "./pages/Blog";
import ResponsiveAppBar from "./ressouces/header";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "@fontsource/poppins"
import '@fontsource/public-sans';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#F4F4F4',
    },
    primary: {
      main: '#50589A',
    },
    secondary: {
      main: '#f50057'
    }, 
  },
  typography: {
    megaTitle: {
      fontSize: 25,
      fontFamily: "Poppins, Arial",
      fontWeight: 800
    },
    title: {
      fontSize: 28,
      fontFamily: "Poppins, Arial",
      fontWeight: 800,
      color: "black"
    },
    fontFamily: 'Poppins, Arial',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/login' element={<Login />} />
          <Route path='/addGame' element={<AddGame />} />
          <Route path='/creadecontenue' element={<CreaDeContenu />} />
          <Route path='/selectgames' element={<SelectGames />} />
          <Route path='/pokemonnoirii' element={<PokemonNoireII />} />
          <Route path='/message' element={<Message />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/blog' element={<Blog />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;

