import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostData } from "../Posts";
import { PostCardContainer, PostCardHeader, PostCardTime } from "./styles";

interface PostCardProps {
  post: PostData;
}
export default function PostCard({ post }: PostCardProps) {
  const timeAgo = formatDistance(new Date(post.created_at), new Date(), {
    locale: ptBR,
  });
  return (
    <PostCardContainer to={`/post/${post.number}`}>
      <PostCardHeader>
        <h1>{post.title}</h1>
        <PostCardTime>Há {timeAgo}</PostCardTime>
      </PostCardHeader>
      <div>
        {post.body?.length < 200
          ? post.body
          : `${post.body ? post.body.substring(0, 160) + "..." : ""}`}
      </div>
    </PostCardContainer>
  );
}
