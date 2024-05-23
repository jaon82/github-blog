import { PostCardContainer, PostCardHeader, PostCardTime } from "./styles";

export default function PostCard() {
  return (
    <PostCardContainer to="/post">
      <PostCardHeader>
        <h1>JavaScript data types and data structures</h1>
        <PostCardTime>Há 1 dia</PostCardTime>
      </PostCardHeader>
      <div>
        Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra
        massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar
        vel mass.
      </div>
    </PostCardContainer>
  );
}
