import { Outlet } from 'react-router-dom'
import Navbar from '../components/shared/NavBar/Navbar'
import Footer from '../components/shared/Footer/Footer'
import { defaultLinks } from '../data/footerData'

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen font-urbanist">
      <Navbar />
      <main className="flex-grow bg-gray08">
        <Outlet />
      </main>
      <Footer links={defaultLinks} footerNote= "©2023 Estatein. All Rights Reserved. Terms & Conditions" name='Estate'/>
    </div>
  )
}

export default MainLayout
