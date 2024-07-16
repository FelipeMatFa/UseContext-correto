import './App.css';
import { ThemeProvider } from './components/Themecontext';
import Theme from './components/Toogletheme';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Theme />
      </ThemeProvider>
    </div>
  );
}

export default App;