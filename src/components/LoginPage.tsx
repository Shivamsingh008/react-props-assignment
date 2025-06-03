
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginPageProps {
  onNavigate: (page: 'welcome' | 'register' | 'account' | 'login', userData?: any) => void;
}

const LoginPage = ({ onNavigate }: LoginPageProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login - in real app, you'd verify credentials
    const mockUserData = {
      fullName: 'shivam raj',
      email: formData.email,
      phoneNumber: '+1234567890',
      companyName: 'Tech Corp',
      isAgency: 'no'
    };
    onNavigate('account', mockUserData);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-black p-8 shadow-lg">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Login to PopX
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email" className="text-purple-600 font-medium">
            Email address*
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <Label htmlFor="password" className="text-purple-600 font-medium">
            Password*
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <Button 
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg mt-6 transition-colors"
        >
          Login
        </Button>

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={() => onNavigate('register')}
            className="text-purple-600 text-sm hover:underline"
          >
            Don't have an account? Create one
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
