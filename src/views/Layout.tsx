import {Link, Outlet} from 'react-router-dom';
import {useUserContext} from '../hooks/ContextHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
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
        <nav className="fixed top-0 z-50 h-16 w-full">
          <ul className="bg-gunmetal grid h-full grid-cols-3 items-center">
            <div></div> {/* This empty div is used to balance the space */}
            <li className="justify-self-center">
              <Link
                className="text-columbia block p-4 text-center text-2xl font-bold"
                to="/"
              >
                postIT
              </Link>
            </li>
            <div className="flex space-x-4 justify-self-end">
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
            </div>
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
