import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/layout";
import styled from "styled-components";
import CardBlog from "../components/CardBlog";

export const Content = styled.div`
  color: ${(props) => props.theme.text};
  margin-top: 40px;
  width: 100%;
  height: 100%;
`;
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
`;
export const Pagination = styled.div`
  margin-top: 25px;
  width: 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.button`
  padding: 5px;
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  border-radius: 40px;
  background: none;
  border: ${(props) => `1px solid ${props.theme.text}`};
  transition: 0.2s all ease-in-out;
  &:hover {
    transition: 0.2s all ease-in-out;
    color: #fff;
    cursor: pointer;
    background: ${(props) => props.theme.primary.main};
  }
`;
export const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
const Home = ({ posts }) => {
  const [max] = useState(5);
  const [current, setCurrent] = useState(0);
  const firstOffset = current * max;
  const lastOffset = current * max + max;
  const page = parseInt(posts.length / max) - 1;
  const nextPage = () => setCurrent(current >= page ? page : current + 1);
  const prevPage = () => setCurrent(current <= 0 ? 0 : current - 1);
  console.log(current);
  return (
    <>
      <Head>
        <title>Ikhsan's Blog | Blog With NextJS</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta
          property='og:title'
          content="Ikhsan's Blog | Blog With NextJS"
          key='ogtitle'
        />
        <meta
          property='og:description'
          content='Blog Ikhsan Created With NextJS SSG'
          key='ogdesc'
        />
        <meta
          property='og:image'
          content='https://ikhsanblog.netlify.app/ikhsan.jpeg'
        />
        <meta
          property='og:image:secure_url'
          content='https://ikhsanblog.netlify.app/ikhsan.jpeg'
        />
        <meta property='og:image:type' content='image/jpeg' />
        <meta property='og:image:width' content='500' />
        <meta property='og:image:height' content='500' />
        <meta property='og:image:alt' content='My Foto' />
        <meta property='og:type' content='website' />
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='Ikhsan' key='twhandle' />
        <meta
          name='description'
          content='Blog Ikhsan Created With NextJS SSG'
        />
        <meta name='robots' content='index, follow' />
      </Head>
      <Layout>
        <Content>
          <CardWrapper>
            {posts.slice(firstOffset, lastOffset).map(({ id, title }) => (
              <CardBlog
                key={id}
                id={id}
                img='https://source.unsplash.com/1600x900/?nature,water'>
                {title}
              </CardBlog>
            ))}
          </CardWrapper>
          <Bottom>
            <Pagination>
              <Button onClick={prevPage}>&laquo;</Button>
              <Button onClick={nextPage}>&raquo;</Button>
            </Pagination>
          </Bottom>
        </Content>
      </Layout>
    </>
  );
};

export default Home;
