
import { Button } from "@/components/ui/button";

interface AccountSettingsProps {
  onNavigate: (page: 'welcome' | 'register' | 'account' | 'login') => void;
  userInfo: any;
}

const AccountSettings = ({ onNavigate, userInfo }: AccountSettingsProps) => {
  const handleLogout = () => {
    onNavigate('welcome');
  };

  return (
    <div className="bg-white rounded-lg border-2 border-black p-8 shadow-lg">
      <h1 className="text-xl font-bold text-gray-900 mb-6">
        Account Settings
      </h1>
      
      <div className="flex items-start gap-4 mb-6">
        <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b589?w=150&h=150&fit=crop&crop=face" 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-gray-900">
            {userInfo?.fullName || 'shivam'}
          </h2>
          <p className="text-gray-600 text-sm">
            {userInfo?.email || 'shivam@Gmail.Com'}
          </p>
          <p className="text-purple-600 text-xs mt-1">
            {userInfo?.isAgency === 'yes' ? 'Agency' : 'Individual'} - {userInfo?.companyName || 'tech Company'}
          </p>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy 
          Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>

      <Button 
        onClick={handleLogout}
        className="w-full bg-purple-100 hover:bg-purple-200 text-purple-600 font-medium py-3 rounded-lg border-purple-200 transition-colors"
        variant="outline"
      >
        Logout
      </Button>
    </div>
  );
};

export default AccountSettings;
