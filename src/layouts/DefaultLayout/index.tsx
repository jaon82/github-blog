import { Outlet } from "react-router-dom";
import { Content, Header, LayoutContainer } from "./styles";

export default function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </LayoutContainer>
  );
}
