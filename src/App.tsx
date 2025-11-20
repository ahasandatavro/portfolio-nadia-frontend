import '@mantine/core/styles.css';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import '@mantine/carousel/styles.css';
import { useEffect } from "react";
import { Header } from './components/Header/Header';
export default function App() {

  useEffect(() => {
    const header = document.querySelector(".main-header");
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <MantineProvider theme={theme}>
      <Header/>
      <Router />
    </MantineProvider>
  );
}
