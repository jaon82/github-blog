import {
  ProfileAvatar,
  ProfileContainer,
  ProfileDescription,
  ProfileHeader,
  ProfileInfo,
  ProfileLinks,
  StyledLink,
} from "./styles";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatarImg from "../../assets/avatar.png";

export default function Profile() {
  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src={avatarImg} width={148} />
      </ProfileAvatar>
      <ProfileInfo>
        <div>
          <ProfileHeader>
            <h1>Cameron Williamson</h1>
            <StyledLink to="http://www.google.com" target="_blank">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </StyledLink>
          </ProfileHeader>
          <ProfileDescription>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </ProfileDescription>
        </div>
        <ProfileLinks>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>32 seguidores</span>
          </div>
        </ProfileLinks>
      </ProfileInfo>
    </ProfileContainer>
  );
}
