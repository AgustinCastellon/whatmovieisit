import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovieGame } from './pages/MovieGame.jsx'
import { BackGroundPage } from './components/BackGroundPage.jsx'
import './styles/bgWinnerStyle.css'
import './styles/bgInitialStyle.css'
import { IndexPage } from './pages/IndexPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DirectorGame } from './pages/DirectorGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <BackGroundPage />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/game/:mode' element={<MovieGame />} />
          <Route path='/game/director' element={<DirectorGame />} />
        </Routes>
      </BrowserRouter>
    </>
  </StrictMode>,
)
