import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
import Form from "./views/Form/Form.jsx";
import Detail from "./views/Detail/Detail.jsx";
import FormDates from "./components/FormDates/FormDates.jsx";
import FormNationality from "./components/FormNationality/FormNationality.jsx";
import FormImage from "./components/FormImage/FormImage.jsx";
import FormFinish from "./components/FormFinish/FormFinish.jsx";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/form" element={<Form/>}/>
        <Route path="/form/dates" element={<FormDates/>}/>
        <Route path="/form/nationality" element={<FormNationality/>}/>
        <Route path="/form/image" element={<FormImage/>}/>
        <Route path="/form/finish" element={<FormFinish/>}/>
      </Routes>
    </>
  );
};

export default App
