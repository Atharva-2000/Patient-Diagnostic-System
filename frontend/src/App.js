import React from 'react';
import IndexPage from './components/IndexPage';
import "./styles/app.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PatientLogin from './components/PatientLogin';
import DoctorLogin from './components/DoctorLogin';
import Register from './components/Register';
import PatientHome from './components/PatientHome';
import Contact from './components/Contact';
import PatientProfile from './components/PatientProfile';
import EditPatientProfile from './components/EditPatientProfile';
import BookAppointment from './components/BookAppointment';
import PageNotFound from './components/PageNotFound';
import ViewAppointment from './components/ViewAppointment';
import ClinicalHistory from './components/ClinicalHistory';
import DoctorHome from './components/DoctorHome';
import ViewHistory from './components/ViewHistory';
import DoctorProfile from './components/DoctorProfile';
import AppointmentList from './components/AppointmentList';
import MyReports from './components/MyReports';
import Examine from './components/Examine';
import Report from './components/Report';


function App() {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<IndexPage />} />
          <Route path={"/login"} element={<PatientLogin />} />
          <Route path={"/doclogin"} element={<DoctorLogin />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/patienthome"} element={<PatientHome />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/patientprofile"} element={<PatientProfile />} />
          <Route path={"/editpatientprofile"} element={<EditPatientProfile />} />
          <Route path={"/bookappointment"} element={<BookAppointment />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path={"/viewappointment"} element={<ViewAppointment />} />
          <Route path={"/clinicalhistory"} element={<ClinicalHistory />} />
          <Route path={"/doctorhome"} element={<DoctorHome />} />
          <Route path={"/viewhistory"} element={<ViewHistory />} />
          <Route path={"/doctorprofile"} element={<DoctorProfile />} />
          <Route path={"/appointmentlist"} element={<AppointmentList />} />
          <Route path={"/myreports"} element={<MyReports />} />
          <Route path={"/examine"} element={<Examine />} />
          <Route path={"/report"} element={<Report />} />
       
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
