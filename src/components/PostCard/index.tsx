import { PostData } from "../Posts";
import { PostCardContainer, PostCardHeader, PostCardTime } from "./styles";

interface PostCardProps {
  post: PostData;
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <PostCardContainer to={`/post/${post.id}`}>
      <PostCardHeader>
        <h1>{post.title}</h1>
        <PostCardTime>Há 1 dia</PostCardTime>
      </PostCardHeader>
      <div>
        {post.body.length < 200
          ? post.body
          : `${post.body.substring(0, 160)}...`}
      </div>
    </PostCardContainer>
  );
}
