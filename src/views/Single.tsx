import {NavigateFunction, useLocation, useNavigate} from 'react-router-dom';
import {MediaItemWithOwner} from '../types/DBTypes';
import Likes from '../components/Likes';
import Comments from '../components/Comments';

const Single = () => {
  const {state} = useLocation();
  const navigate: NavigateFunction = useNavigate();
  const item: MediaItemWithOwner = state;

  return (
    <div className="flex flex-col items-center text-gunmetal">
      <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
      <div className="mx-auto max-w-md">
        {item.media_type.includes('video') ? (
          <video controls src={item.filename} className="w-full" />
        ) : (
          <img src={item.filename} alt={item.title} className="w-full" />
        )}
      </div>
      <p className="mt-4">{item.description}</p>
      <Likes item={item} />
      <Comments item={item} />
      <p className="mt-4">
        Uploaded at: {new Date(item.created_at).toLocaleString('fi-FI')}, by:{' '}
        {item.username}{' '}
      </p>
      <p>{item.filesize}</p>
      <button
        className="mt-4 rounded bg-cerulean px-4 py-2 text-columbia hover:bg-gunmetal"
        onClick={() => navigate(-1)}
      >
        go back
      </button>
    </div>
  );
};

export default Single;
