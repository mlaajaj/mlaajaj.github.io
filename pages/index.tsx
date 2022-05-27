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
import { Divider } from '@chakra-ui/react';
import { Player, Controls } from '@lottiefiles/react-lottie-player';

type Props = {
  videos: Video[];
  posts: BlogPost[];
};

const IndexPage = ({ videos, posts }: Props) => {
  return (
    <>
      <Hero />
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
