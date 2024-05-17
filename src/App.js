import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {ContactPage} from "./pages/contactPage/ContactPage";
import {MainPage} from "./pages/mainPage/MainPage";
import {LoginPage} from "./pages/loginPage/LoginPage";
import {PortfolioPage} from "./pages/portfolioPage/PortfolioPage";
import {Layout} from "./components/hoc/Layout";

function App() {
  return (
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<MainPage/>}/>
              <Route path='contact' element={<ContactPage/>}/>
              <Route path='login' element={<LoginPage/>}/>
              <Route path='portfolio' element={<PortfolioPage/>}/>
            </Route>
          </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
