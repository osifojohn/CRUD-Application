export type Post = {
  id: number;
  title: string;
  body: string;
};

export type PostsContextType = {
  posts: Post[];
  postsIsLoading: boolean;
  postsError: string | null;
  loadingStates: { [key: string]: boolean };
  handleCreate: (title: string, body: string) => Promise<void>;
  handleUpdate: (id: number, title: string, body: string) => Promise<void>;
  handleDelete: (id: number) => Promise<void>;
};
