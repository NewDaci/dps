import Header from './components/Header';
import Footer from './components/Footer';
import MainWrapper from './components/MainWrapper';
import Slidder from './components/Slidder';
import Main from './components/Main';
import NavBar from './components/NavBar';
import Slidder2 from './components/Slidder2';
import NewsEvent from './components/NewsEvent';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Socials from './components/Socials';
import Associations from './components/Associations';

export default function Home() {
  return (
    <>
    {/* <Main /> */}
    {/* <Header /> */}
    {/* <MainWrapper /> */}
    {/* <NavBar /> */}
    {/* <Slidder /> */}
    {/* <Slidder2 /> */}
    <MainWrapper />
    <NewsEvent />
    <Features />
    <Testimonials />
    <Socials />
    <Associations />
    {/* <Main /> */}
    {/* <Footer /> */}
    </>
  )
}

