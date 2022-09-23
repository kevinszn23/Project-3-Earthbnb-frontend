import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Show from "./components/Show"
import NewListingForm from "./components/NewListingForm";
import EditListingForm from "./components/EditListingForm";
import { Routes, Route, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/:id" element={<Show/>} />
          <Route path="/newListing" element={<NewListingForm/>}/>
          <Route path="/editListing/:id" element={<EditListingForm/>}/>
        </Routes>
    </div>
  );
}

export default App;
