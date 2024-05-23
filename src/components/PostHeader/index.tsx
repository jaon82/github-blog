import { PostHeaderContainer, PostHeaderLinks, StyledLink } from "./styles";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostHeader() {
  return (
    <PostHeaderContainer>
      <div>
        <StyledLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          voltar
        </StyledLink>
        <StyledLink to="http://www.google.com" target="_blank">
          ver no github
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </StyledLink>
      </div>
      <div>
        <div>
          <h1>JavaScript data types and data structures</h1>
        </div>
        <PostHeaderLinks>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </div>
        </PostHeaderLinks>
      </div>
    </PostHeaderContainer>
  );
}
