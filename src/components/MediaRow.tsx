import {Link} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';
import {useUpdateContext, useUserContext} from '../hooks/ContextHooks';
import {useMedia} from '../hooks/graphQLHooks';

const MediaRow = (props: {item: MediaItemWithOwner}) => {
  const {item} = props;
  const {user} = useUserContext();
  const {deleteMedia} = useMedia();
  const {update, setUpdate} = useUpdateContext();

  const deleteHandler = async () => {
    const cnf = confirm('Are you sure you want to delete this media?');
    if (!cnf) {
      return;
    }
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        return;
      }
      const result = await deleteMedia(item.media_id, token);
      alert(result.message);
      setUpdate(!update);
    } catch (e) {
      console.error('delete failed', (e as Error).message);
    }
  };

  return (
    <div className="flex justify-center">
      <Link to="/single" state={item}>
        <div className="mb-10 border-2 border-transparent text-center transition-all duration-500 ease-in-out hover:rounded-lg hover:border-platinum">
          <p className="text-platinum">{item.owner.username}</p>
          <div className="flex items-center justify-center">
            <img
              className="h-60 w-72 object-cover"
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <p className="text-ellipsis text-platinum">{item.description}</p>
          <div className="flex justify-center space-x-2">
            <button
              className="rounded bg-blue px-4 py-2 text-white hover:bg-black"
              onClick={() => console.log('modify', item)}
            >
              Modify
            </button>
            {user &&
              (user.user_id === item.user_id ||
                user.level_name === 'Admin') && (
                <button
                  className="rounded bg-blue px-4 py-2 text-white hover:bg-black"
                  onClick={deleteHandler}
                >
                  Delete
                </button>
              )}
          </div>
          <p>Comments: {item.comments_count}</p>
          <p className="text-platinum">
            {new Date(item.created_at).toLocaleString('fi-FI')}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MediaRow;
