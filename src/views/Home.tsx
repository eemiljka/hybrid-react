import MediaRow from '../components/MediaRow';
import {useMedia} from '../hooks/graphQLHooks';
// import {useMedia} from '../hooks/apiHooks';

const Home = () => {
  const {mediaArray} = useMedia();

  return (
    <>
      <h2>Feed</h2>
      <tbody>
        {mediaArray.map((item) => (
          <MediaRow key={item.media_id} item={item} />
        ))}
      </tbody>
    </>
  );
};

export default Home;
