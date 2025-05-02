import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/theme-provider"
import Header from "./components/header"
import Footer from "./components/footer"
import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"
import PrivacyPage from "./pages/privacy"
import TruckTypesPage from "./pages/truck-types"
import TruckTypeDetailPage from "./pages/truck-type-detail"
import "./styles/globals.css"

function App() {
  return (
    <Router>
      <ThemeProvider attribute="class" defaultTheme="light">
        <div className="flex min-h-screen flex-col">
          <Header />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/truck-types" element={<TruckTypesPage />} />
              <Route path="/truck-types/:id" element={<TruckTypeDetailPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
