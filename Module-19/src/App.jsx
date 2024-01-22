import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation";
import NotFoundPage from "./pages/404Page";
import AccountRegistrationPage from "./pages/AccountRegistrationPage";
import BlogPage from "./pages/BlogPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CheckoutPage from "./pages/CheckoutPage";
import ContactsPage from "./pages/ContactsPage.jsx";
import FrequentlyAskedQuestionsPage from "./pages/FrequentlyAskedQuestionsPage.jsx";
import Homepage from "./pages/Homepage";
import PrivacyPolicyAndTermsOfUsePage from "./pages/PrivacyPolicyAndTermsOfUsePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ReviewsPage from "./pages/ReviewsPage.jsx";
import SearchResultsPage from "./pages/SearchResultsPage";
import ThankYouPage from "./pages/ThankYouPage";
import Footer from "./component/Footer.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route
            path="/policy"
            element={<PrivacyPolicyAndTermsOfUsePage />}
          ></Route>
          <Route
            path="/registration"
            element={<AccountRegistrationPage />}
          ></Route>
          <Route path="/blog" element={<BlogPage />}></Route>
          <Route path="/product" element={<ProductsPage />}></Route>
          <Route path="/review" element={<ReviewsPage />}></Route>
          {/*<Route path="/search" element={<SearchResultsPage />}></Route>*/}
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/checkout" element={<CheckoutPage />}></Route>
          <Route path="/faq" element={<FrequentlyAskedQuestionsPage />}></Route>
          <Route path="/notfound" element={<NotFoundPage />}></Route>
          <Route path="/thanks" element={<ThankYouPage />}></Route>
          <Route path="/contact" element={<ContactsPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
