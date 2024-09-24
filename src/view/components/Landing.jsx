import { Link } from 'react-router-dom';
import image from '../images/crm-home-stay-informed.svg';

const Landing = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center ">
            <div className="flex flex-col md:flex-row items-center justify-between ">
                {/* Text Section */}
                <div className="flex-1 text-center md:text-left ">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Home Page</h1>
                    <p className="text-gray-700 mb-6 text-lg">
                        This is a brief description of our website. Here you can find various resources and information that may be useful to you.
                    </p>
                    <Link 
                        to="/get-started"
                        className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600 transition duration-200"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Image Section */}
                <div className="flex-1">
                    <img 
                        src={image}
                        alt="Stay Informed" 
                        className="p-8 w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Landing;