import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyNav from './components/MyNav';
import AdminArea from './components/AdminArea';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <MyNav />
        <Routes>
          <Route path="/" element={<AdminArea />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
