import styled from "styled-components"

const StyledNav = styled.nav`

`

const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  gap: 40px;

`

const StyledItem = styled.li`
  a {
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
    cursor: pointer;
  }
  :hover{
    color: ${(props) => props.theme.color.secundary};
    text-decoration: underline;
  }

`

const Menu = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <StyledItem><a href="#">Nosso escritório</a></StyledItem>
        <StyledItem><a href="#">Especialidades</a></StyledItem>
        <StyledItem><a href="#">Fale conosco</a></StyledItem>
      </StyledMenu>
    </StyledNav>
  )
}

export default Menu