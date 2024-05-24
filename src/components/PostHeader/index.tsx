import { PostHeaderContainer, PostHeaderLinks, StyledLink } from "./styles";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";
import { PostDetail } from "../../pages/Post/indext";

interface PostHeaderProps {
  post: PostDetail;
}
export default function PostHeader({ post }: PostHeaderProps) {
  const timeAgo = formatDistance(new Date(post.created_at), new Date(), {
    locale: ptBR,
  });

  return (
    <PostHeaderContainer>
      <div>
        <StyledLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </StyledLink>
        <StyledLink to={post.html_url} target="_blank">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </StyledLink>
      </div>
      <div>
        <div>
          <h1>{post.title}</h1>
        </div>
        <PostHeaderLinks>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{post.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há {timeAgo}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{post.comments} comentários</span>
          </div>
        </PostHeaderLinks>
      </div>
    </PostHeaderContainer>
  );
}
