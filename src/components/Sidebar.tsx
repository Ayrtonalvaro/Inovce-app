import logo from '../assets/logo.png'
import perfilImg from '../assets/image-avatar.jpg'
import ThemeButton from './ThemeButton'
const Sidebar = () => {
  return (
    <div className="h-screen bg-ligthBlue flex flex-col justify-between rounded-r-xl">
        <img src={logo} alt="logo-img" className="w-20" />
        <div className="flex flex-col gap-5 items-center py-5">
          <ThemeButton />
          <div className="border-t-2 border-gray w-20"></div>
          <img src={perfilImg} alt="perfil-img" className="w-12 rounded-full" />
        </div>
    </div>
  )
}

export default Sidebar
