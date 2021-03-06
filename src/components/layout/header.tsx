import {
  HStack,
  Heading,
  IconButton,
  Link,
  Tooltip,
  Text,
  Container,
  LinkOverlay,
  useColorMode,
  Image
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { FiCommand, FiDownload } from 'react-icons/fi';



import { CmdPaletteContext } from 'src/providers/cmd-palette-provider';

const Header = () => {
  const { open: openCommandPalette } = useContext(CmdPaletteContext);
  const [shortcut, setShortcut] = useState<string>();

  useEffect(() => {
    setShortcut(
      navigator.userAgent.indexOf('Mac OS X') != -1 ? 'Cmd + K' : 'Ctrl + K'
    );
  }, [setShortcut]);

  return (
    <HStack
      as="nav"
      position="sticky"
      zIndex="popover"
      top={0}
      alignItems="center"
      justifyContent="space-between"
      w="full"
      mb={16}
      py={3}
      bg="white"
      _dark={{
        bg: 'gray.800',
      }}
      insetX={0}
      transitionDuration="normal"
      transitionProperty="background"
    >
      <Container
        alignItems="center"
        justifyContent="space-between"
        display="flex"
        maxW="container.md"
        px={{ base: 4, lg: 0 }}
      >
        <NextLink href="/" passHref>
          <Link>
          <Image src='/assets/images/mlaajaj.png' alt='Logo'   boxSize='45px' />
          </Link>
        </NextLink>

        <HStack alignItems="center" spacing={{ base: 5, md: 5 }}>

          <NextLink href="/" passHref>
                <Link>
                  <Text>Accueil</Text>
                </Link>
              </NextLink>
        
            <NextLink href="/blog" passHref>
              <Link>
                <Text>Blog</Text>
              </Link>
            </NextLink>

            <NextLink href="/projets" passHref>
              <Link>
                <Text>Projets</Text>
              </Link>
            </NextLink>


          <Tooltip label={`Menu (${shortcut})`}>
            <IconButton
              aria-label="toggle theme"
              icon={<FiCommand />}
              onClick={openCommandPalette}
              size="sm"
              variant="ghost"
            />
          </Tooltip>
        </HStack>
      </Container>
    </HStack>
  );
};

export default Header;
