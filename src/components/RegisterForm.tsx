import {useState} from 'react';
import {useUser} from '../hooks/graphQLHooks';
import {useForm} from '../hooks/formHooks';

const RegisterForm = () => {
  const {postUser} = useUser();
  const [usernameAvailable, setUsernameAvailable] = useState<boolean>(true);
  const [emailAvailable, setEmailAvailable] = useState<boolean>(true);

  const initValues = {username: '', password: '', email: ''};

  const doRegister = async () => {
    try {
      if (usernameAvailable && emailAvailable) {
        await postUser(inputs);
      }
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doRegister,
    initValues,
  );
  const {getUsernameAvailable, getEmailAvailable} = useUser();

  const handleUsernameBlur = async (
    event: React.SyntheticEvent<HTMLInputElement>,
  ) => {
    const result = await getUsernameAvailable(event.currentTarget.value);
    setUsernameAvailable(result.available);
  };

  const handleEmailBlur = async () => {
    const result = await getEmailAvailable(inputs.email);
    setEmailAvailable(result.available);
  };

  return (
    <div className="mx-auto mt-10 w-4/5 rounded-md bg-gunmetal p-6 text-slate-100">
      <h3 className="mb-6 text-center text-3xl">Register</h3>
      <form onSubmit={handleSubmit} className="flex flex-col text-center">
        <div className="mb-3 flex w-full">
          <label className="w-1/3 p-6 text-end" htmlFor="username">
            Username
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="username"
            type="text"
            id="username"
            onChange={handleInputChange}
            onBlur={handleUsernameBlur}
            autoComplete="username"
          />
        </div>
        {!usernameAvailable && (
          <div className="flex w-full justify-end pr-4">
            <p className="text-red-500">Username not available</p>
          </div>
        )}
        <div className="mb-3 flex w-full">
          <label className="w-1/3 p-6 text-end" htmlFor="password">
            Password
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <div className="mb-3 flex w-full">
          <label className="w-1/3 p-6 text-end" htmlFor="email">
            Email
          </label>
          <input
            className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            onBlur={handleEmailBlur}
            autoComplete="email"
          />
        </div>
        {!emailAvailable && (
          <div className="flex w-full justify-end pr-4">
            <p className="text-red-500">Email not available</p>
          </div>
        )}
        <div className="flex w-full justify-end">
          <button
            className="text-columbian m-3 w-1/3 rounded-md bg-cerulean px-4 py-2 hover:bg-lion"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
