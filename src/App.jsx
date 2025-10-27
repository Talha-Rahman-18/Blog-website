import { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Footer from './components/footer/Foot'
import { Outlet, useNavigate } from 'react-router'
import { login,logout } from './store/slice' 
import authService from './appwrite/auth'
import { useDispatch } from 'react-redux'
import ScrollToTop from './components/ScrollToTop'
function App() {

  const [loading,setloading]=useState(true);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userdata)=>{
      if(userdata){
        dispatch(login({userdata}));

      }else{
        dispatch(logout());
      }
    })
    .finally(()=>{
      setloading(false);
    })

  },[])

  return !loading? (
    <div className="appcont" style={{height:"100vh",width:"100vw",
      backgroundColor:"white"
    }}>
<Header />
<ScrollToTop />
<main>
<Outlet />
</main>
<Footer />
    </div>
  ):(<><h1>Loading Please Wait ...</h1></>)
}

export default App
