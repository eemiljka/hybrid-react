import {useUserContext} from '../hooks/ContextHooks';

const Profile = () => {
  const {user} = useUserContext();

  return (
    <div className="text-columbian mx-auto mt-10 w-4/5 rounded-md bg-gunmetal p-6">
      <h2 className="mb-6 text-2xl">Profile page</h2>
      {user && (
        <>
          <p className="mb-3">
            <span className="font-bold text-slate-200">Username:</span>{' '}
            {user.username}
          </p>
          <p className="mb-3">
            <span className="font-bold text-slate-200">Email:</span>{' '}
            {user.email}
          </p>
          <p className="mb-3">
            <span className="font-bold text-slate-200">Created:</span>{' '}
            {new Date(user.created_at).toLocaleString('fi-FI')}
          </p>
        </>
      )}
    </div>
  );
};

export default Profile;
