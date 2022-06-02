import { GetStaticProps } from "next";

import Hero from "@/components/hero";
import CoursesSection from "@/components/courses-section";
import { readData } from "@/utils/read-data";
import { Video } from "@/types/video";
import VideosSection from "@/components/videos-section";
import courses from "@/data/courses";
import { getRecentBlogPosts } from "@/utils/get-blog-posts";
import { BlogPost } from "@/types/blog-post";
import BlogpostsSection from "@/components/blogposts-section";
import { Divider, VStack, Heading, Text, SimpleGrid } from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Song from '@/components/project/projects';
import {data} from 'data/project_data'


type Props = {
  videos: Video[];
  posts: BlogPost[];
};

const IndexPage = ({ videos, posts }: Props) => {
  return (
    <>
      <Hero />
      <Divider orientation='horizontal' />
      <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
        <Heading as="h1" size="lg">Projets</Heading>
        <Text>
          Vous retrouverez l'ensemble de mes projets avec Python, Tableau, SQL...
        </Text>
      </VStack>
        <SimpleGrid columns={[2, 1,2, 2,2,2]} spacing={10}>
        {data.map((data) => (
            <Song key={data.id} {...data} />
        ))}
        </SimpleGrid>
        <Divider orientation='horizontal' />
      <BlogpostsSection posts={posts} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { videos } = await readData<{ videos: Video[] }>("data/videos.json");
  const posts = await getRecentBlogPosts(3);

  const props: Props = {
    videos,
    posts,
  };

  return {
    props,
  };
};

export default IndexPage;
