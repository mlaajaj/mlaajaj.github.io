import {
  Flex,
    Box,
    Heading,
    Text,
    useColorModeValue,
    VStack,
    HStack,
    Link,
  } from '@chakra-ui/react';
import { format } from 'timeago.js';

import { BlogPost } from '@/types/blog-post';

const BlogPostCard = ({
  title,
  description,
  slug,
  date,
  readingTime,
}: BlogPost) => {
  return (
    <Flex
    p={10}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      mx="auto"
      w='100%'
      p={4}
      rounded="lg"
      shadow="xl"
      bg={'#FFFF'}      
      maxW="2xl"
    >

      <Flex justifyContent="space-between" alignItems="center">
        <span
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {format(date)}
        </span>
        <Link
          href={`/blog/${slug}`}
          px={3}
          py={1}
          bg="gray.600"
          color="gray.100"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          _hover={{ bg: "gray.500" }}
        >
          {readingTime}
        </Link>
      </Flex>

      <Box mt={2}>
        <Link
          href={`/blog/${slug}`}
          fontSize="2xl"
          color={useColorModeValue("gray.700", "white")}
          fontWeight="700"
          _hover={{
            color: useColorModeValue("gray.600", "gray.200"),
            textDecor: "underline",
          }}
        >
          {title}
        </Link>
        <p color={useColorModeValue("gray.600", "gray.300")}>
              {description}
        </p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Link
          color={useColorModeValue("brand.600", "brand.400")}
          _hover={{ textDecor: "underline" }}
        >
          Lire l'article
        </Link>

      </Flex>
    </Box>
  </Flex>
  );
};

export default BlogPostCard;



