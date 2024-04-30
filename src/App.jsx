import React, {Suspense} from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import GoTop from "../src/GoTop/GoTop.jsx";
import {useSelector} from "react-redux";
import Footer from '../src/components/Footer/Footer.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomLoader from '../src/CustomLoader/CustomLoader.jsx'
const LazyLoadingHome =React.lazy(() =>import('../src/components/Home/Home.jsx'))
const LazyLoadingAboutUs =React.lazy(() =>import('./Pages/AboutUs/AboutUs.jsx'))
const LazyLoadingStudents =React.lazy(() =>import('./Pages/Students/Students.jsx'))
const LazyLoadingContactUs =React.lazy(() =>import('./Pages/ContactUs/ContactUs.jsx'))
const LazyLoadingStudentsReadmore =React.lazy(() =>import('./Pages/StudentsReadmore/StudentsReadmore.jsx'))
const LazyLoadingAccreditations =React.lazy(() =>import('../src/Pages/Accreditations/Accreditations.jsx'))
const LazyLoadingLibrary =React.lazy(() =>import('../src/Pages/Library/Library.jsx'))
const LazyLoadingPortal =React.lazy(() =>import('../src/Pages/Portal/Portal.jsx'))
const LazyLoadingDiploma =React.lazy(() =>import('../src/Pages/Diploma/Diploma.jsx'))
function App() {
const  myLang = useSelector((state)=>state.lang)



  return (
      <>

          <div dir={myLang === "ar" ? "rtl" :"ltr"}  >
              <BrowserRouter>

                  <Navbar/>

                  <GoTop/>

                  <Suspense fallback={<CustomLoader/>}>
                  <Routes>

                      <Route exact  path={"skilled-Educator/"} element={<LazyLoadingHome />} />
                      <Route path={"/AboutUs"} element={<LazyLoadingAboutUs />} />
                      <Route path={"/Students"} element={<LazyLoadingStudents />} />
                      <Route path={"/StudentsReadmore"} element={<LazyLoadingStudentsReadmore />} />
                      <Route path={"/ContactUs"} element={<LazyLoadingContactUs />} />
                      <Route path={"/Accreditations"} element={<LazyLoadingAccreditations />} />
                      <Route path={"/Library"} element={<LazyLoadingLibrary />} />
                      <Route path={"/ContactUs"} element={<LazyLoadingContactUs />} />
                      <Route path={"/Portal"} element={<LazyLoadingPortal />} />
                      <Route path={"/Diploma"} element={<LazyLoadingDiploma />} />

                  </Routes>
                  </Suspense>

                  <Footer/>

              </BrowserRouter>

          </div>

      </>
  )
}

export default App
