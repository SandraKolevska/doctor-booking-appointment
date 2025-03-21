// filepath: c:\Users\Филип Кузманоски\Desktop\Doctor-Booking-Appointment-\frontend\src\App.jsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import MyProfile from './pages/MyProfile'
import MyAppointmets from './pages/MyAppointmets'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import NotFound from './pages/NotFound' // Create a NotFound component

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointmets />} />
        <Route path='/appointments/:docId' element={<Appointment />} />
        <Route path='*' element={<NotFound />} /> {/* Fallback route */}
      </Routes>
      <Footer />
    </div>
  )
}

export default App