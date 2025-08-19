import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Promotion from './Components/Promotion/Promotion';
import GlobalPlatform from './Components/GlobalPlatform/GlobalPlatform';
import ScalePlatform from './Components/ScalePlatform/ScalePlatform';
import CompaniesPrefer from './Components/CompaniesPrefer/CompaniesPrefer';
import Reviews from './Components/Reviews/Reviews';
import UnockPotential from './Components/UnlockPotential/UnockPotential';
import GlobalCoverage from './Components/GlobalCoverage/GlobalCoverage';
import CustomerReviews from './Components/CustomerReviews/CustomerReviews';
import GetStarted from './Components/GetStarted/GetStarted';
import ClientsReviews from './Components/ClientsReviews/ClientsReviews';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <Hero/>
     <Promotion/>
     <GlobalPlatform/>
     <ScalePlatform/>
     <CompaniesPrefer/>
     <Reviews/>
     <UnockPotential/>
     <GlobalCoverage/>
     <CustomerReviews/>
     <GetStarted/>
     <ClientsReviews/>
     <Footer/>
    </div>
  );
}

export default App;
