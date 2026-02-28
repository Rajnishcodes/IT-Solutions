import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

// Lazy Loaded Pages
const Hero = lazy(() => import("./components/Hero"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Partners = lazy(() => import("./pages/Partners"));

const AwsService = lazy(() => import("./pages/AwsService"));
const VMWareService = lazy(() => import("./pages/VMWareService"));
const AnalyticsService = lazy(() => import("./pages/AnalyticsService"));
const DataCenterService = lazy(() => import("./pages/DataCenterService"));
const BackupService = lazy(() => import("./pages/BackupService"));
const SoftwareLicensing = lazy(() => import("./pages/SoftwareLicensing"));
const VirtualizationService = lazy(() => import("./pages/VirtualizationService"));
const SecurityService = lazy(() => import("./pages/SecurityService"));
const InfrastructureService = lazy(() => import("./pages/InfrastructureService"));
const ApplicationDevelopment = lazy(() => import("./pages/ApplicationDevelopment"));
const AIMLService = lazy(() => import("./pages/AIMLService"));
const DataEngineering = lazy(() => import("./pages/DataEngineering"));
const CloudEngineering = lazy(() => import("./pages/CloudEngineering"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));
const QATesting = lazy(() => import("./pages/QATesting"));
const DataScience = lazy(() => import("./pages/DataScience"));
const Events = lazy(() => import("./pages/Events"));
const Careers = lazy(() => import("./pages/Careers"));

const CareerCard = lazy(() => import("./components/CareerCard"));
const ApplyModal = lazy(() => import("./components/ApplyModal"));

const StockMarket = lazy(() => import("../Popular/StockMarket"));
const AccountingSoftware = lazy(() => import("../Popular/AccountingSoftware"));
const RetailBilling = lazy(() => import("../Popular/RetailBilling"));
const PaymentGateway = lazy(() => import("../Popular/PaymentGateway"));
const HRSoftware = lazy(() => import("../Popular/HRSoftware"));
const DataRecovery = lazy(() => import("../Popular/DataRecovery"));

const Advertise = lazy(() => import("./Businesses/Advertise"));
const WriteWithUs = lazy(() => import("./Businesses/WriteWithUs"));
const SellWithUs = lazy(() => import("./Businesses/SellWithUs"));

const App = () => {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />

          <Route path="/about" element={<About />} />
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
          <Route path="/events" element={<Events />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careercard" element={<CareerCard />} />
          <Route path="/applymodal" element={<ApplyModal />} />

          <Route path="/stockmarket" element={<StockMarket />} />
          <Route path="/accountingsoftware" element={<AccountingSoftware />} />
          <Route path="/retailbilling" element={<RetailBilling />} />
          <Route path="/paymentgateway" element={<PaymentGateway />} />
          <Route path="/hrsoftware" element={<HRSoftware />} />
          <Route path="/datarecovery" element={<DataRecovery />} />

          <Route path="/advertise" element={<Advertise />} />
          <Route path="/writewithus" element={<WriteWithUs />} />
          <Route path="/sellwithus" element={<SellWithUs />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
};

export default App;