import {
    LinkBox, 
    Box,
    useColorModeValue,
    Image,
    Stack, 
    Text, 
    LinkOverlay,
    Heading } from '@chakra-ui/react';
    import NextLink from 'next/link';
    
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
        <Image src={image} objectFit='fill'/>
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
    
    
    
