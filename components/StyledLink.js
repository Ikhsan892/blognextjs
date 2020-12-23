import Link from "next/link";
import styled from "styled-components";

const StyledLink = ({ as, children, className, href }) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export default styled(StyledLink)`
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease-in-out;
  font-size: 1.5rem;
  font-weight: bold;
  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`;
