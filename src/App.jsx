import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import About from "./pages/About";
<<<<<<< HEAD
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Partners from "./pages/Partners";
import AwsService from "./pages/AwsService";
import VMWareService from "./pages/VMWareService";
import AnalyticsService from "./pages/AnalyticsService";
import DataCenterService from "./pages/DataCenterService";
import BackupService from "./pages/BackupService";
import SoftwareLicensing from "./pages/SoftwareLicensing";
import VirtualizationService from "./pages/VirtualizationService";
import SecurityService from "./pages/SecurityService";
import InfrastructureService from "./pages/InfrastructureService";
import ApplicationDevelopment from "./pages/ApplicationDevelopment";
import AIMLService from "./pages/AIMLService";
import DataEngineering from "./pages/DataEngineering";
import CloudEngineering from "./pages/CloudEngineering";
import MobileAppDevelopment from "./pages/MobileAppDevelopment";
import QATesting from "./pages/QATesting";
import DataScience from "./pages/DataScience";
import StockMarket from "../Popular/StockMarket";
import AccountingSoftware from "../Popular/AccountingSoftware";
import RetailBilling from "../Popular/RetailBilling";
import PaymentGateway from "../Popular/PaymentGateway";
import HRSoftware from "../Popular/HRSoftware";
import DataRecovery from "../Popular/DataRecovery";
import Advertise from "./Businesses/Advertise";

=======
import WhyChooseUs from "./pages/WhyChooseUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
<<<<<<< HEAD
              <Hero />      
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/awsservice" element={<AwsService />} />
        <Route path="/vmwareservice" element={<VMWareService />} />
        <Route path="/analyticsservice" element={<AnalyticsService />} />
        <Route path="/datacenterservice" element={<DataCenterService />} />
        <Route path="/backupservice" element={<BackupService />} />
        <Route path="/softwarelicensing" element={<SoftwareLicensing />} />
        <Route path="/virtualizationservice" element={<VirtualizationService />} />
        <Route path="/securityservice" element={<SecurityService />} />
        <Route path="/infrastructureservice" element={<InfrastructureService />} />
        <Route path="/applicationdevelopment" element={<ApplicationDevelopment />} />
        <Route path="/aimlservice" element={<AIMLService />} />
        <Route path="/dataengineering" element={<DataEngineering />} />
        <Route path="/cloudengineering" element={<CloudEngineering />} />
        <Route path="/mobileappdevelopment" element={<MobileAppDevelopment />} />
        <Route path="/qatesting" element={<QATesting />} />
        <Route path="/datascience" element={<DataScience />} />
        <Route path="/stockmarket" element={<StockMarket />} />
        <Route path="/accountingsoftware" element={<AccountingSoftware />} />
        <Route path="/retailbilling" element={<RetailBilling />} />
        <Route path="/paymentgateway" element={<PaymentGateway />} />
        <Route path="/hrsoftware" element={<HRSoftware />} />
        <Route path="/datarecovery" element={<DataRecovery />} />
        <Route path="/advertise" element={<Advertise />} />
=======
              <Hero />
              <WhyChooseUs /> {/* Displayed directly under Hero */}
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} />
>>>>>>> a4657f17d677da2027588233a92a885dbdf04cf0
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
