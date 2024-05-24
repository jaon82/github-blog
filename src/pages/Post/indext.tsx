import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostHeader from "../../components/PostHeader";
import { api } from "../../lib/axios";
import { PostContainer, PostContent } from "./styles";

interface PostUser {
  login: string;
}
export interface PostDetail {
  title: string;
  body: string;
  comments: number;
  html_url: string;
  created_at: string;
  user: PostUser;
}
export default function Post() {
  const { id } = useParams();
  const [postData, setPostData] = useState<PostDetail | null>(null);

  useEffect(() => {
    async function getData() {
      const postsResponse = await api.get(
        `repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`
      );
      setPostData(postsResponse.data);
    }
    getData();
  }, [id]);

  if (!postData) {
    return "Post não encontrado";
  }
  return (
    <PostContainer>
      <PostHeader post={postData} />
      <PostContent>{postData.body}</PostContent>
    </PostContainer>
  );
}
