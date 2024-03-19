import {useEffect, useRef} from 'react';
import {useUserContext} from '../hooks/ContextHooks';
import {useForm} from '../hooks/formHooks';
import {useCommentStore} from '../store';
import {MediaItemWithOwner} from '../types/DBTypes';
import {useComment} from '../hooks/graphQLHooks';
import {formatDistanceToNow} from 'date-fns';

const Comments = ({item}: {item: MediaItemWithOwner}) => {
  const {comments, setComments} = useCommentStore();
  const {user} = useUserContext();
  const formRef = useRef<HTMLFormElement>(null);
  const {getCommentsByMediaId, postComment} = useComment();

  const initValues = {comment_text: ''};

  const doComment = async () => {
    const token = localStorage.getItem('token');
    if (!user || !token) {
      return;
    }
    try {
      await postComment(inputs.comment_text, parseInt(item.media_id), token);
      await getComments();
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error('postComment failed', error);
    }
  };

  const {handleSubmit, handleInputChange, inputs} = useForm(
    doComment,
    initValues,
  );

  const getComments = async () => {
    try {
      const comments = await getCommentsByMediaId(parseInt(item.media_id));
      setComments(comments);
    } catch (error) {
      console.error('getComments failed', error);
      setComments([]);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  // Reverse the comments array to display newest comments at the top
  const reversedComments = [...comments].reverse();

  return (
    <>
      {reversedComments.length > 0 && (
        <>
          <h3 className="text-xl">Comments</h3>
          <ul>
            {reversedComments.map((comment) => (
              <li key={comment.comment_id}>
                <div className="rounded-md border border-slate-200 bg-slate-800 p-3 text-slate-100">
                  <span className="font-bold text-slate-200">
                    {formatDistanceToNow(new Date(comment.created_at!), {
                      addSuffix: true,
                    })}{' '}
                  </span>
                  <span className="font-bold text-slate-200">
                    {comment.username} wrote:
                  </span>
                  <span className="ml-2">{comment.comment_text}</span>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
      {user && (
        <>
          <form
            onSubmit={handleSubmit}
            ref={formRef}
            className="flex w-4/5 items-center justify-between"
          >
            <label className="w-1/3 p-6 text-end" htmlFor="comment">
              Comment
            </label>
            <input
              className="m-3 w-2/3 rounded-md border border-slate-500 p-3 text-slate-950"
              name="comment_text"
              type="text"
              id="comment"
              onChange={handleInputChange}
            />
            <button
              className="m-3 h-full w-1/3 rounded bg-cerulean px-4 py-2 text-columbia hover:bg-gunmetal"
              type="submit"
            >
              Post
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Comments;
