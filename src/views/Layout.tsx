import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <header>
        <nav>
          <ul className="flex justify-end bg-blue">
            <li>
              <Link
                className="block p-4 text-platinum hover:bg-darkblue"
                to="/"
              >
                Home
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="block p-4 text-center text-platinum hover:bg-darkblue"
                    to="/profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-platinum hover:bg-darkblue"
                    to="/upload"
                  >
                    Upload
                  </Link>
                </li>
                <li>
                  <Link
                    className="block p-4 text-center text-platinum hover:bg-darkblue"
                    to="/logout"
                  >
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="block p-4 text-center text-platinum hover:bg-darkblue"
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="bg-silverblue p-4">
        <Outlet />
      </main>
      <footer className="flex justify-end bg-silverblue p-4">
        <p>Copyright 2024 - E.K.</p>
      </footer>
    </>
  );
};

export default Layout;
