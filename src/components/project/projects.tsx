import {
    LinkBox, 
    Box,
    useColorModeValue,
    Stack, 
    Text, 
    LinkOverlay,
    Heading } from '@chakra-ui/react';


import Image from 'next/image'

import NextLink from 'next/link';

const Song = ({ name, image,genre, description, url,color })  => {
    return (
    <LinkBox as="article" role="group">
    <Box
        maxW={'900px'}
        height={{
            base: '380px', // 0-48em
            md: '380px', // 48em-80em,
            xl: '380px', // 80em+
          }}
          width={{
            base: '500px', // 0-48em
            md: '100%', // 48em-80em,
            xl: '100%', // 80em+
          }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'md'}
        rounded={'md'}
        p={6}
        overflow={'show'}>
        <Box
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={6}
        pos={'relative'}>
            
        <Image src={image}  objectFit='cover' width={180} height={80} layout='responsive'/>

            
        </Box>
        
        <Stack>
        <Text color={color} fontSize="md">
            {genre}
        </Text>
        <LinkOverlay href={url} isExternal>
            <Heading size="md">{name}</Heading>
        </LinkOverlay>
        <Text color="black.500" fontSize="md">
            {description}
        </Text>
        </Stack>
    </Box>
    </LinkBox>
    );
    };
    
export default Song;
    
    
    
