
import { Button } from "@/components/ui/button";

interface WelcomePageProps {
  onNavigate: (page: 'welcome' | 'register' | 'account') => void;
}

const WelcomePage = ({ onNavigate }: WelcomePageProps) => {
  return (
    <div className="bg-white rounded-lg border-2 border-black p-8 shadow-lg">
      <div className="text-center space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Welcome to PopX
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        
        <div className="space-y-3 pt-6">
          <Button 
            onClick={() => onNavigate('register')}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg transition-colors"
          >
            Create Account
          </Button>
          
          <Button 
            onClick={() => onNavigate('register')}
            variant="outline"
            className="w-full bg-purple-100 hover:bg-purple-200 text-purple-600 font-medium py-3 rounded-lg border-purple-200 transition-colors"
          >
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
