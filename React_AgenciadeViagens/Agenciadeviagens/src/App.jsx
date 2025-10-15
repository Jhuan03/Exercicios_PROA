import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './componentes/Header'
import Home from './componentes/Home'
import Footer from './componentes/Footer'
import Escocia from './componentes/Escocia'
import Grand_Canyon from './componentes/Grand_Canyon'
import Muralhas_da_China from './componentes/Muralhas_da_China'
import Aruba from './componentes/Aruba'
import './App.css'


function App() {
  
return (
  <>
  <main>
        <Router>
            <Header />
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/Escocia' element={<Escocia />} />
                  <Route path='/Grand_Canyon' element={<Grand_Canyon />} />
                  <Route path='/Muralhas_da_China' element={<Muralhas_da_China />} />
                  <Route path='/Aruba' element={<Aruba />} />
              </Routes>          
            <Footer />
        </Router>
      </main>
  </>
   
  )
}

export default App
