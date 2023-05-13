import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
// import Layout from '@/components/Layout';

 function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
      <Component {...pageProps} />
  
    </>
    )
  }
export default App;

  // Layout(Component)