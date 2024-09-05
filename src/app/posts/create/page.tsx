'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Form from '@/components/Form';
import InputField from '@/components/InputField';
import TextArea from '@/components/TextArea';
import Button from '@/components/Button';
import { usePostsContext } from '@/contexts/PostsContext';
import { ROUTE_NAMES } from '@/utils/routes';

const Create: React.FC = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const { handleCreate } = usePostsContext();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handleCreate(title, body);
    router.push(ROUTE_NAMES.POSTS);
  };

  return (
    <div className="w-full  max-w-2xl mx-auto p-4">
      <div className="w-full flex items-center justify-center mt-2 mb-8">
        <h1 className="text-2xl font-bold mb-4">Create post</h1>
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
        <Button text="Create Post" type="submit" className="bg-blue-500" />
      </Form>
    </div>
  );
};

export default Create;
