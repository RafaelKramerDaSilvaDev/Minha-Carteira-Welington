import { ThemeProvider } from 'styled-components';
import { useTheme } from './hooks/theme';
import { Routes } from './routes';
import { GlobalStyle } from './styles/globalstyle';

export function App() {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}
