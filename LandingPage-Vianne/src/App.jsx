
import './App.css'

import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/HomePage/HomePage/Header'
import InformativeBanner from './components/InformativeBanner/InformativeBanner'
import Navigation from './components/NavPage/Navigation'


function App() {
 

  return (
    <>
    <Header/>
    <Navigation />
    <InformativeBanner />
    <Content />
    <Footer />
    </>
  )
}

export default App



