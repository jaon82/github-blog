import PostCard from "../PostCard";
import TextInput from "../TextInput";
import { PostsContainer, PostsHeader, PostsList } from "./styles";

export default function Posts() {
  return (
    <PostsContainer>
      <PostsHeader>
        <div>
          <span>Publicações</span>
          <span>6 publicações</span>
        </div>
        <TextInput placeholder="Buscar conteúdo" />
      </PostsHeader>
      <PostsList>
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsList>
    </PostsContainer>
  );
}
