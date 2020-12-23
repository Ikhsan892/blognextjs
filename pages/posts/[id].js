import React from "react";
import Layout from "../../components/layout";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { useAmp } from "next/amp";

export const Content = styled.div`
  color: ${(props) => props.theme.text};
  width: 50%;
  margin: 40px auto auto;
  height: 100%;
`;
export const Title = styled.h1`
  font-size: 2.3rem;
  font-weight: 900;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 20px;
`;
export const Body = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
  text-align: left;
`;
export const Wrapper = styled.div`
  width: 100%;
  height: 50;
  display: flex;
  align-items: center;
`;
export const ImageBorder = styled(Image)`
  border-radius: 40px;
  background: #fff;
  margin-right: 25px;
`;
export const User = styled.p`
  margin-left: 20px;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}
export const config = { amp: "hybrid" };
const Id = ({ post }) => {
  const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content={post.title} key='ogtitle' />
        <meta property='og:description' content={post.body} key='ogdesc' />
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
        <meta name='description' content={post.body} />
        <meta name='robots' content='index, follow' />
      </Head>
      <Layout>
        <Content>
          <Wrapper>
            {isAmp ? (
              <amp-img src='/ikhsan.jpeg' width={50} height={50} />
            ) : (
              <ImageBorder src='/ikhsan.jpeg' width={50} height={50} />
            )}
            <User>Ikhsan</User>
          </Wrapper>
          <hr />
          <Title> {post.title}</Title>
          <hr />
          {isAmp ? (
            <amp-img
              src='https://source.unsplash.com/1600x900/?nature,water'
              width={500}
              height={475}
              layout='responsive'
            />
          ) : (
            <Image
              src='https://source.unsplash.com/1600x900/?nature,water'
              width={500}
              height={475}
              layout='responsive'
            />
          )}
          <Body>{post.body}</Body>
        </Content>
      </Layout>
    </>
  );
};

export default Id;
