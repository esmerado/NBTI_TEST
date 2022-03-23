import { Nav, NavTitle, StyledLink, Ul } from "./styles";
import { NavItems } from "Utils/navItems";

export default function Navbar() {
  return (
    <>
      <Nav>
        <NavTitle>NBTI</NavTitle>
        <Ul>
          {NavItems.map((item) => {
            return <StyledLink key={item.id} to={item.url}>{item.title}</StyledLink>;
          })}
        </Ul>
      </Nav>
    </>
  );
}
