import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Header from './components/Header'
import {Provider} from 'react-redux'
import {store} from './redux/store'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import Createemployee from './components/createemployee';
import Updateemployee from './components/update';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Header/>
         <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/createemployee' element={<Createemployee/>}></Route>
            <Route path='/update' element={<Updateemployee/>}></Route>

         </Routes>
      </BrowserRouter>
      <ToastContainer/>
      </Provider>
      
      
    </div>
  );
}

export default App;
