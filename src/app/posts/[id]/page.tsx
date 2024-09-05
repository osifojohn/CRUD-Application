'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Form from '@/components/Form';
import InputField from '@/components/InputField';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import { usePostsContext } from '@/contexts/PostsContext';
import { ROUTE_NAMES } from '@/utils/routes';

const Edit: React.FC<{ params: { id: string } }> = ({ params: { id } }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { posts, handleUpdate, loadingStates } = usePostsContext();
  const router = useRouter();

  useEffect(() => {
    if (id && posts) {
      const post = posts.find((post) => post.id === Number(id));
      if (post) {
        setTitle(post.title);
        setBody(post.body);
      }
    }
  }, [id, posts]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await handleUpdate(Number(id), title, body);
      router.push(ROUTE_NAMES.POSTS);
    } catch (error) {}
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="w-full flex items-center justify-center mt-2 mb-8">
        <h1 className="text-2xl font-bold mb-4">Edit post</h1>
      </div>
      <Form onSubmit={handleSubmit}>
        <InputField
          label="Title"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          label="Body"
          placeholder="Enter post body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <div className="flex w-full justify-end">
          <Button
            text={loadingStates[id] || false ? 'Updating...' : 'Update Post'}
            type="submit"
            className="bg-green-500"
            disabled={loadingStates[id] || false}
          />
        </div>
      </Form>
    </div>
  );
};

export default Edit;
