import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from '../components/common/Layout'
import MainPage from '../pages/MainPage'
import PriorityPage from '../pages/PriorityPage'
import CompletePage from '../pages/CompletePage'
import NotFound from '../pages/NotFound'

function Router() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path='/priority'element={<PriorityPage/>}/>
        <Route path='/complete' element={<CompletePage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
    )
}

export default Router