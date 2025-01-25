import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="flex flex-wrap items-center justify-between px-4 py-3 md:px-6 border-b border-black">

        <Link to={'/'} className="text-lg font-bold flex items-center gap-2 sm:text-xl md:text-2xl">

        <svg id="logo-58" width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="stroke" d="M25 43.94H14.06L10.86 38.39L8.28998 33.94L10.86 29.48" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M10.86 29.4801H5.7L3.13 25.0001L6.77 18.6901L8.27001 16.1001L10.87 11.6101L13.44 7.15006L14.06 6.06006H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M25 39.48H16.64L13.44 33.94L10.86 29.48L13.47 25H8.28003L11.95 18.63L13.44 16.06L16.01 11.61L16.64 10.52H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M25 15.01H19.23L13.47 25L19.23 34.99H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M8.28001 25L5.70001 29.48" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M44.3 29.48L41.72 25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M25 43.94H35.94L39.14 38.39L41.71 33.94L39.14 29.48" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M39.14 29.4801L44.31 29.4401L46.87 25.0001L43.23 18.6901L41.73 16.1001L39.13 11.6101L36.56 7.15006L35.94 6.06006H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M25 39.48H33.36L36.56 33.94L39.14 29.48L36.53 25H41.72L38.05 18.63L36.56 16.06L33.99 11.61L33.36 10.52H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M25 15.01H30.77L36.53 25L30.77 34.99H25" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M19.23 15.01L16.64 10.52" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path><path className="stroke" d="M30.77 15.01L33.36 10.52" stroke="#231F20" stroke-width="0.5" stroke-miterlimit="10"></path></svg> 
          LinkArchive
          </Link>


        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <Button
            variant="outline"
            className="text-xs sm:text-sm px-2 sm:px-3 py-1"
          >
            <Link to="/signup">Sign up</Link>
          </Button>

          <Button className="text-xs sm:text-sm px-2 sm:px-3 py-1">
            <Link to="/signin">Sign in</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
