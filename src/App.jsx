import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <Navbar/>
      <h2>react router</h2>
      <Outlet />
      <p>footer</p>
    </>
  )
}

export default App
