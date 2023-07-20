
//import './App.css'
import * as Pages from './pages'
import {Routes,Route} from 'react-router-dom'
import { Header } from './components'

function App() {
  return(
    <>
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<Pages.HomePage/>}/>
          <Route path="/hero/:id" element={<Pages.HeroPage />} />
          <Route path="/heroes" element={<Pages.HeroesPage />} />
          <Route path='/search' element={<Pages.SearchPage/>}/>
        </Route>
      </Routes>
    </>
  )

}

export default App

