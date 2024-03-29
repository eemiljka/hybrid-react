import {Link} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';
import {useUpdateContext, useUserContext} from '../hooks/ContextHooks';
import {useMedia} from '../hooks/graphQLHooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faComments, faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import {
  differenceInHours,
  differenceInMinutes,
  differenceInBusinessDays,
} from 'date-fns';

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

  const getTimeDifference = (date: Date) => {
    const now = new Date();
    const diffInHours = differenceInHours(now, date);
    const diffInMinutes = differenceInMinutes(now, date);
    const diffInBusinessDays = differenceInBusinessDays(now, date);
    if (diffInBusinessDays > 0) {
      return `${diffInBusinessDays} days ago`;
    }
    if (diffInHours > 0) {
      return `${diffInHours} hours ago`;
    }
    return `${diffInMinutes} minutes ago`;
  };

  return (
    <div className="flex justify-center">
      <Link to="/single" state={item}>
        <div className="mb-20 w-96 border-2 border-transparent text-center transition-all duration-500 ease-in-out hover:rounded-lg hover:shadow-2xl">
          <p className="text-gunmetal">@{item.owner.username}</p>
          <div className="flex items-center justify-center">
            <img
              className="h-80 w-80 object-cover"
              src={item.thumbnail}
              alt={item.title}
            />
          </div>
          <p className="text-ellipsis text-gunmetal">{item.description}</p>
          <div className="flex justify-center space-x-2">
            {user &&
              (user.user_id === item.user_id ||
                user.level_name === 'Admin') && (
                <>
                  <button
                    className="rounded bg-cerulean px-4 py-2 text-columbia hover:bg-gunmetal"
                    onClick={() => console.log('modify', item)}
                  >
                    Modify
                  </button>
                  <button
                    className="rounded bg-cerulean px-4 py-2 text-columbia hover:bg-gunmetal"
                    onClick={deleteHandler}
                  >
                    Delete
                  </button>
                </>
              )}
          </div>
          <p className="text-gunmetal">
            <FontAwesomeIcon icon={faComments} /> {item.comments_count}
          </p>
          <p className="text-gunmetal">
            <FontAwesomeIcon icon={faCalendarAlt} />{' '}
            {getTimeDifference(new Date(item.created_at))}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MediaRow;
