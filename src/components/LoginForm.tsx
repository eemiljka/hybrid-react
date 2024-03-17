import {useForm} from '../hooks/formHooks';
import {Credentials} from '../types/LocalTypes';
import {useUserContext} from '../hooks/ContextHooks';

const LoginForm = () => {
  const {handleLogin} = useUserContext();

  const initValues: Credentials = {username: '', password: ''};

  const doLogin = async () => {
    handleLogin(inputs as Credentials);
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doLogin,
    initValues,
  );

  return (
    <div className="mx-auto mt-10 w-4/5 rounded-md bg-slate-800 p-6 text-slate-100">
      <h3 className="mb-6 text-center text-3xl">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 flex w-full">
          <label className="w-1/3 p-6 text-end" htmlFor="UserWithLevelname">
            Username
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="username"
            type="text"
            id="UserWithLevelname"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div className="mb-3 flex w-full">
          <label className="w-1/3 p-6 text-end" htmlFor="loginpassword">
            Password
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div className="flex w-full justify-end">
          <button
            className="m-3 w-1/3 rounded-md bg-cerulean px-4 py-2 text-columbia hover:bg-gunmetal"
            type="submit"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
