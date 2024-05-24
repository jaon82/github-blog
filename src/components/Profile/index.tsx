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
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

interface ProfileDataProps {
  avatar_url: string;
  bio: string;
  html_url: string;
  company: string;
  followers: number;
  login: string;
  name: string;
}
export default function Profile() {
  const [profileData, setProfileData] = useState<ProfileDataProps | null>(null);

  useEffect(() => {
    async function getData() {
      const profileData = await api.get("users/rocketseat-education");
      setProfileData(profileData.data);
    }
    getData();
  }, []);

  if (!profileData) {
    return "Loading data...";
  }

  return (
    <ProfileContainer>
      <ProfileAvatar>
        <img src={profileData.avatar_url} width={148} />
      </ProfileAvatar>
      <ProfileInfo>
        <div>
          <ProfileHeader>
            <h1>{profileData.name}</h1>
            <StyledLink to={profileData.html_url} target="_blank">
              github
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </StyledLink>
          </ProfileHeader>
          <ProfileDescription>{profileData.bio}</ProfileDescription>
        </div>
        <ProfileLinks>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{profileData.login}</span>
          </div>
          {profileData.company && (
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>{profileData.company}</span>
            </div>
          )}
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{profileData.followers} seguidores</span>
          </div>
        </ProfileLinks>
      </ProfileInfo>
    </ProfileContainer>
  );
}
