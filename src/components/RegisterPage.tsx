
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface RegisterPageProps {
  onNavigate: (page: 'welcome' | 'register' | 'account', userData?: any) => void;
}

const RegisterPage = ({ onNavigate }: RegisterPageProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('account', formData);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-black p-8 shadow-lg">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Create your PopX account
      </h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-purple-600 font-medium">
            Full Name*
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <Label htmlFor="phoneNumber" className="text-purple-600 font-medium">
            Phone number*
          </Label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="Enter phone number"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
            className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            required
          />
        </div>

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

        <div>
          <Label htmlFor="companyName" className="text-purple-600 font-medium">
            Company name
          </Label>
          <Input
            id="companyName"
            type="text"
            placeholder="Enter company name"
            value={formData.companyName}
            onChange={(e) => handleInputChange('companyName', e.target.value)}
            className="mt-1 border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>

        <div>
          <Label className="text-purple-600 font-medium">
            Are you an Agency?
          </Label>
          <RadioGroup
            value={formData.isAgency}
            onValueChange={(value) => handleInputChange('isAgency', value)}
            className="flex gap-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
        </div>

        <Button 
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg mt-6 transition-colors"
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
