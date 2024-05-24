import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as zod from "zod";
import { api } from "../../lib/axios";

import { zodResolver } from "@hookform/resolvers/zod";
import PostCard from "../PostCard";
import TextInput from "../TextInput";
import { PostsContainer, PostsHeader, PostsList } from "./styles";

export interface PostData {
  number: number;
  title: string;
  body: string;
  created_at: string;
}
const searchFormSchema = zod.object({
  query: zod.string(),
});
type SearchFormInputs = zod.infer<typeof searchFormSchema>;

export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  useEffect(() => {
    async function getData() {
      const postsResponse = await api.get("search/issues", {
        params: {
          q: `repo:rocketseat-education/reactjs-github-blog-challenge`,
        },
      });
      setPosts(postsResponse.data.items);
    }
    getData();
  }, []);

  const handleSearch = async (data: SearchFormInputs) => {
    const postsResponse = await api.get("search/issues", {
      params: {
        q: `${data.query}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
      },
    });
    setPosts(postsResponse.data.items);
  };

  return (
    <PostsContainer>
      <PostsHeader>
        <div>
          <span>Publicações</span>
          <span>{posts.length} publicações</span>
        </div>
        <form onSubmit={handleSubmit(handleSearch)}>
          <TextInput
            placeholder="Buscar conteúdo"
            {...register("query")}
            disabled={isSubmitting}
          />
        </form>
      </PostsHeader>
      <PostsList>
        {posts.map((post) => (
          <PostCard key={post.number} post={post} />
        ))}
      </PostsList>
    </PostsContainer>
  );
}
