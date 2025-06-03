
import { useState } from "react";
import WelcomePage from "../components/WelcomePage";
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";
import AccountSettings from "../components/AccountSettings";

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'register' | 'account' | 'login'>('welcome');
  const [userInfo, setUserInfo] = useState<any>(null);

  const handleNavigation = (page: 'welcome' | 'register' | 'account' | 'login', userData?: any) => {
    setCurrentPage(page);
    if (userData) {
      setUserInfo(userData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {currentPage === 'welcome' && (
          <WelcomePage onNavigate={handleNavigation} />
        )}
        {currentPage === 'register' && (
          <RegisterPage onNavigate={handleNavigation} />
        )}
        {currentPage === 'login' && (
          <LoginPage onNavigate={handleNavigation} />
        )}
        {currentPage === 'account' && (
          <AccountSettings onNavigate={handleNavigation} userInfo={userInfo} />
        )}
      </div>
    </div>
  );
};

export default Index;
