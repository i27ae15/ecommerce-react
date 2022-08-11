import './categories.styles.scss'
import './App.css'
import Home from './components/routes/home/Home.component'
import { Routes, Route } from 'react-router-dom'

import Navigation from './components/routes/navigation/Navigation.component'
import SingIn from './components/routes/sign-in/Sing-in.component'


const Shop = () => {
  return <h1>I am the shop page</h1>
}

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />} >

        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SingIn />} />
      
      </Route>
    </Routes>
  )
}

export default App;
