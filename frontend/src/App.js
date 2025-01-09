import "./App.css";
import Landing from "./components/Landing";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from "./Screens/Dashboard";
import Layout from "./Layout/Layout";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/dashboard' element={
        <Layout>
          <Dashboard/>
        </Layout>}
        />
   
    </Routes>
    </BrowserRouter>
  
  )
}

export default App;
