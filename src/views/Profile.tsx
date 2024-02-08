import {useEffect, useState} from 'react';
import {useUser} from '../hooks/apiHooks';
import {UserResponse} from '../types/MessageTypes';

const Profile = () => {
  const [user, setUser] = useState<UserResponse['user'] | null>(null);
  const getUserByToken = useUser();
  useEffect(() => {
    const getUser = async () => {
      const token = localStorage.getItem('token');
      const userResponse = await getUserByToken(token!);
      setUser(userResponse.user);
    };

    getUser();
  }, []);
  return (
    <>
      <h2>Profile page</h2>
      <p>Username: {user?.username}</p>
    </>
  );
};

export default Profile;
