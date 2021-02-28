
import './App.css';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/globalstyles";
import { lightTheme, darkTheme } from "./components/themes";
import {useState} from "react";



const App = () => {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
        <div>
          <header>
          <button onClick={themeToggler}>Switch Theme</button>
            <p>
              This is just a sample
            </p>
          </header>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
