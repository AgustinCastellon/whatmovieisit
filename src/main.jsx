import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MovieGame } from './pages/MovieGame.jsx'
import { BackGroundPage } from './components/BackGroundPage.jsx'
import './styles/bgWinnerStyle.css'
import './styles/bgInitialStyle.css'
import { IndexPage } from './pages/IndexPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DirectorGame } from './pages/DirectorGame.jsx'
import { ReleaseBattleGame } from './pages/ReleaseBattleGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <BackGroundPage />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IndexPage />} />
          <Route path='/game/:mode' element={<MovieGame />} />
          <Route path='/game/director' element={<DirectorGame />} />
          <Route path='/game/release-battle' element={<ReleaseBattleGame />} />
        </Routes>
      </BrowserRouter>
    </>
  </StrictMode>,
)
