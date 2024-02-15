import {create} from 'zustand';
import {Comment} from './types/DBTypes';

type CommentWithUsername = Partial<Comment & {username: string}>;

type CommentStore = {
  comments: Partial<Comment & {username: string}>[];
  addComment: (comment: Partial<Comment & {username: string}>) => void;
};

export const useCommentStore = create<CommentStore>((set) => ({
  comments: [],
  addComment: (comment) =>
          set((state) => ({
             comments: [
                ...state.comments,
                {
                   comment_id: state.comments.length + 1, // This is a temporary solution
                   comment_text: comment.comment_text,
                   user_id: comment.user_id,
                   media_id: comment.media_id,
                   created_at: new Date(),
                   username: comment.username,
                },
             ],
          })),
}));
