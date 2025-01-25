import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 text-white">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center px-4 py-20 space-y-8 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          LINK-ARCHIVE
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl max-w-3xl">
          Store, organize, and access all your favorite bookmarks in one place. 
          Simplify your digital life with ease and style.
        </p>

        {/* Call to Action */}
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Link to={'/signup'}>
          <button className="bg-white text-blue-600 font-medium px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-gray-100 transition duration-200">
            Get Started
          </button>
          </Link>
          
          <Link to={'/signin'}>
          <button className="bg-blue-600 border border-white font-medium px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-blue-500 transition duration-200 ml-3">
            Sign In
          </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white text-black py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-semibold sm:text-3xl mb-6">
            Why Choose LINK-ARCHIVE?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Organized Bookmarks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Keep your bookmarks organized with categories and tags for quick access.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Access Anywhere</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Your bookmarks are available on all your devices, anytime, anywhere.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Easy to Use</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  A clean, simple interface designed to save you time and effort.
                </p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle>Secure and Private</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  Your data is protected with top-notch security and privacy practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
