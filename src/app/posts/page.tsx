'use client';
import { useRouter } from 'next/navigation';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import { Post } from '@/utils/types';
import { usePostsContext } from '@/contexts/PostsContext';
import { ROUTE_NAMES } from '@/utils/routes';

const Home: React.FC = () => {
  const { posts, postsIsLoading, postsError, loadingStates, handleDelete } =
    usePostsContext();

  const router = useRouter();

  return (
    <div className="w-full  max-w-2xl mx-auto p-4">
      <div className="w-full flex items-center justify-center mt-2 mb-8">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
      </div>
      <Button
        text="Create New Post"
        onClick={() => router.push(ROUTE_NAMES.POST_CREATE)}
        className="mb-4 bg-blue-500"
      />

      {postsIsLoading && (
        <div className="w-full h-full">
          <Loading message="" />
        </div>
      )}
      {postsError && (
        <div className="w-full h-full">
          <Error error={postsError} />
        </div>
      )}

      {!postsIsLoading && !postsError && posts.length === 0 && (
        <div className="w-full h-full">
          <p>No posts available.</p>
        </div>
      )}

      {!postsIsLoading && !postsError && posts.length > 0 && (
        <ul className="mb-4">
          {posts.map((post: Post) => (
            <li key={post.id} className="mb-4">
              <Card
                title={post.title}
                body={post.body}
                isLoading={loadingStates[post.id] || false}
                onEdit={() => router.push(`${ROUTE_NAMES.POSTS}/${post.id}`)}
                onDelete={() => handleDelete(post.id)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
