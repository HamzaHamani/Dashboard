import SideBar from "./components/SideBar";
import Calendar from "./pages/Calendar";
import ContactInfo from "./pages/ContactInfo";
import Home from "./pages/Home";

import { Route, Routes } from "react-router-dom";
import ManageTeam from "./pages/ManageTeam";
import ProfileForm from "./pages/ProfileForm";
import Faq from "./pages/Faq";
import Geography from "./pages/Geography";
import BarChart from "./pages/BarChart";

function App() {
  return (
    <>
      <SideBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="manageTeam" element={<ManageTeam />} />
        <Route path="contactInfo" element={<ContactInfo />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="profileForm" element={<ProfileForm />} />
        <Route path="faq" element={<Faq />} />
        <Route path="geographyChart" element={<Geography />} />
        <Route path="barChart" element={<BarChart />} />
      </Routes>
    </>
  );
}

export default App;
