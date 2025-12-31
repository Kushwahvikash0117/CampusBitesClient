import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import LoginPopup from "./components/LoginPopup.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import OwnerLogin from "./pages/OwnerLogin.jsx";
import OwnerDashboard from "./pages/OwnerDashboard.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar
        setShowLogin={setShowLogin}
        search={search}
        setSearch={setSearch}
      />

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}

      <Routes>
        <Route path="/" element={<Home search={search} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/owner/login" element={<OwnerLogin />} />
        <Route path="/owner/dashboard" element={<OwnerDashboard />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

// import { Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import LandingPage from "./pages/LandingPage/LandingPage";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Navbar from "./components/Navbar/Navbar";
// import Footer from "./components/Footer/Footer";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
// import OwnerLogin from "./pages/Owner/OwnerLogin";
// import OwnerDashboard from "./pages/Owner/OwnerDashboard";

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [search, setSearch] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <>
//       {/* GLOBAL LOGIN MODAL */}
//       {showLogin && (
//         <LoginPopup setShowLogin={setShowLogin} setIsLoggedIn={setIsLoggedIn} />
//       )}

//       <Routes>
//         {/* LANDING */}
//         <Route
//           path="/"
//           element={
//             <LandingPage setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} />
//           }
//         />

//         {/* MAIN APP */}
//         <Route
//           path="/app/*"
//           element={
//             <ProtectedRoute isLoggedIn={isLoggedIn}>
//               <>
//                 <Navbar
//                   setShowLogin={setShowLogin}
//                   search={search}
//                   setSearch={setSearch}
//                 />
//                 <Routes>
//                   <Route index element={<Home search={search} />} />
//                   <Route path="cart" element={<Cart />} />
//                   <Route path="order" element={<PlaceOrder />} />
//                 </Routes>
//                 <Footer />
//               </>
//             </ProtectedRoute>
//           }
//         />
//         {/* Owner Auth */}
//         <Route path="/owner/login" element={<OwnerLogin />} />
//         <Route path="/owner/dashboard" element={<OwnerDashboard />} />
//       </Routes>
//     </>
//   );
// };

// export default App;