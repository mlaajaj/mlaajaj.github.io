import Image from 'next/image';

import {
    LinkBox, 
    Box,
    useColorModeValue,
    Stack, 
    Text, 
    LinkOverlay,
    chakra,
    Heading } from '@chakra-ui/react';

import NextLink from 'next/link';

const ProjectImage = chakra(Image, {
    baseStyle: { maxH: 120, maxW: 120 },
    shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
  })
    
const Song = ({ name, image,genre, description, url,color })  => {
    return (
    <LinkBox as="article" role="group">
    <Box
        maxW={'900px'}
        height='380px'
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
        bg={'gray.100'}
        mt={-6}
        mx={-6}
        mb={6}
        pos={'relative'}>
            
        <ProjectImage src={image}
            width={1000}
            height={600} 
            layout='fill'/>
            
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
    
    
    
