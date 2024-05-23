import Posts from "../../components/Posts";
import Profile from "../../components/Profile";
import { HomeContainer } from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <Profile />
      <Posts />
    </HomeContainer>
  );
}
