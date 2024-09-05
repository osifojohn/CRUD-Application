'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { getPosts, createPost, updatePost, deletePost } from '@/utils/api';
import { Post, PostsContextType } from '@/utils/types';

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export const usePostsContext = () => {
  const context = useContext(PostsContext);
  if (context === undefined) {
    throw new Error('usePostsContext must be used within a PostsProvider');
  }
  return context;
};

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [postsIsLoading, setPostsIsLoading] = useState(true);
  const [postsError, setPostsError] = useState<string | null>(null);
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [localPostIds, setLocalPostIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPostsIsLoading(true);
        setPostsError(null);
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        setPostsError((error as Error).message);
      } finally {
        setPostsIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  let lastPostIdFromServer = 100;

  //Resource ID is faked; no real server update, just a workaround for incrementing IDs
  const generateUniqueId = () => {
    return Date.now();
  };

  const handleCreate = async (title: string, body: string) => {
    try {
      const newPostId = generateUniqueId();

      const newPost: Post = await createPost({ title, body, userId: 1 });
      setPosts((prevPosts) => [{ ...newPost, id: newPostId }, ...prevPosts]);

      setLocalPostIds(
        (prevLocalPostIds) => new Set(prevLocalPostIds.add(newPostId))
      );
    } catch (error) {
      toast.error(`${(error as Error).message}`);
    }
  };

  const handleUpdate = async (id: number, title: string, body: string) => {
    try {
      setLoadingStates((prev) => ({ ...prev, [id]: true }));

      const updatedPost = await updatePost(id, {
        title,
        body,
        userId: 1,
        id,
      });
      setPosts((prevPosts) =>
        prevPosts.map((post) => (post.id === id ? updatedPost : post))
      );
    } catch (error) {
      if (!localPostIds.has(id)) {
        toast.error(`${(error as Error).message}`);
      }
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setLoadingStates((prev) => ({ ...prev, [id]: true }));
      await deletePost(String(id));
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
    } catch (error) {
      if (!localPostIds.has(id)) {
        toast.error(`${(error as Error).message}`);
      }
    } finally {
      setLoadingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <PostsContext.Provider
      value={{
        posts,
        postsIsLoading,
        postsError,
        loadingStates,
        handleCreate,
        handleUpdate,
        handleDelete,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
