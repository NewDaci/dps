import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import MainWrapper from './components/MainWrapper';
import Slidder from './components/Slidder';
import Main from './components/Main';
import NavBar from './components/NavBar';

export default function Home() {
  return (
    <>
    {/* <Main /> */}
    {/* <Header /> */}
    {/* <MainWrapper /> */}
    <NavBar />
    <Slidder />
    <div className='conatiner mx-auto min-h-screen font-bold text-6xl center'>Herosection</div>
    <HeroSection />
    {/* <Footer /> */}
    </>
  )
}

