import React from "react";
import styled from "styled-components";
import StyledLink from "./StyledLink";
import Image from "next/image";

export const Card = styled.div`
  width: 100%;
  border: ${(props) => `1.5px solid ${props.theme.text}`};
  border-radius: 10px;
  max-width: 300px;
  height: 250px;
  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.05);
    transition: 0.2s all ease-in-out;
  }
`;
export const CardContent = styled.div`
  padding: 7px 15px;
  height: auto;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const CardImg = styled(Image)`
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;
export const TopLine = styled.p`
  text-transform: uppercase;
  font-size: 0.7rem;
  margin-bottom: 10px;
  letter-spacing: 2px;
  color: ${(props) => props.theme.text};
  font-weight: 400;
`;
const CardBlog = ({ img, id, children }) => {
  return (
    <Card>
      <CardImg src={img} alt='Image blog' width={300} height={150} />
      <CardContent>
        <TopLine>Title</TopLine>
        <StyledLink href='/posts/[id]' forwardedAs={`/posts/${id}`}>
          {children}
        </StyledLink>
      </CardContent>
    </Card>
  );
};

export default CardBlog;
