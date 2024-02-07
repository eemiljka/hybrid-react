import {useForm} from '../hooks/FormHooks';
import {Credentials} from '../types/LocalTypes';
import {useAuthentication} from '../hooks/apiHooks';

const LoginForm = () => {
  const {postLogin} = useAuthentication();
  const initValues: Credentials = {
    username: '',
    password: '',
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(async () => {
    console.log('submit callback, inputs: ', inputs);
    console.log(await postLogin(inputs));
    // TODO: use postLogin to authenticate with server
  }, initValues);
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="UserWithLevelname">Username</label>
          <input
            name="username"
            type="text"
            id="UserWithLevelname"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="loginpassword">Password</label>
          <input
            name="password"
            type="password"
            id="loginpassword"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginForm;
