import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faUpload,
  faSignOutAlt,
  faSignInAlt,
} from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  if (!user) {
    handleAutoLogin();
  }

  return (
    <>
      <header>
        <nav className="fixed top-0 z-50 w-full">
          <ul className="bg-gunmetal flex justify-end">
            <li>
              <Link
                className="hover:bg-cerulean text-columbia block p-4"
                to="/"
              >
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            {user ? (
              <>
                <li>
                  <Link
                    className="text-columbia hover:bg-cerulean block p-4 text-center"
                    to="/profile"
                  >
                    <FontAwesomeIcon icon={faUser} />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-columbia hover:bg-cerulean block p-4 text-center"
                    to="/upload"
                  >
                    <FontAwesomeIcon icon={faUpload} />
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-columbia hover:bg-cerulean block p-4 text-center"
                    to="/logout"
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link
                  className="text-columbia hover:bg-cerulean block p-4 text-center"
                  to="/login"
                >
                  <FontAwesomeIcon icon={faSignInAlt} />
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main className="bg-columbia p-4 pt-20">
        <Outlet />
      </main>
      <footer className="flex justify-end bg-silverblue p-4">
        <p>Copyright 2024 - E.K.</p>
      </footer>
    </>
  );
};

export default Layout;
