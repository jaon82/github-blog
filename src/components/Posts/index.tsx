import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import PostCard from "../PostCard";
import TextInput from "../TextInput";
import { PostsContainer, PostsHeader, PostsList } from "./styles";

export interface PostData {
  id: number;
  title: string;
  body: string;
  created_at: string;
}
export default function Posts() {
  const [posts, setPosts] = useState<PostData[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function getData() {
      const postsResponse = await api.get("search/issues", {
        params: {
          //q=${texto}%20repo:${username}/${repo}
          q: `${searchText}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
        },
      });
      setPosts(postsResponse.data.items);
    }
    getData();
  }, [searchText]);

  return (
    <PostsContainer>
      <PostsHeader>
        <div>
          <span>Publicações</span>
          <span>{posts.length} publicações</span>
        </div>
        <TextInput placeholder="Buscar conteúdo" />
      </PostsHeader>
      <PostsList>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostsList>
    </PostsContainer>
  );
}
