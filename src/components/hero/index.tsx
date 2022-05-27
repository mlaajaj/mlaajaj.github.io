import {
  Stack,
  VStack,
  Heading,
  Text,
  Button,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FiArrowUpRight } from 'react-icons/fi';

import {
  GITHUB_PROFILE,
  LKD_PROFILE,
  CV_PROFILE,
  MAIL
} from 'src/constants';
import { Link as LinkType } from '@/types/link';
import ExternalLink from '../external-link';
import HeroImage from '../hero-image';
import HeroPlay from '../hero-play';
import { Player, Controls } from '@lottiefiles/react-lottie-player';


type SocialLink = LinkType & { color?: string };

const socialLinks: SocialLink[] = [
  {
    href: CV_PROFILE,
    label: 'CV',
    color: 'green.500',
  },
  {
    href: GITHUB_PROFILE,
    label: 'GitHub',
  },
  {
    href: LKD_PROFILE,
    label: 'LinkedIn',
    color: 'blue.500',
  },
  {
    href: MAIL,
    label: 'Mail',
    color: 'purple.500',
  },

];

const Hero = () => {
  return (
    <Stack
      as="section"
      alignItems="center"
      direction={{ base: 'column-reverse', md: 'row' }}
      w="full"
      spacing={8}
    >
      <VStack alignItems="flex-start" w="full" spacing={3}>
        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={0}
        >
          <Heading as="h1" size="lg">
          Mohamed LAAJAJ.
          </Heading>
        </Stack>

        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={0}
        >
          <Text as="h2" lineHeight="175%">
            Junior Data Analyst basé à Paris.
            <br></br>
          </Text>
        </Stack>


        <Stack
          alignItems="center"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          direction={{ base: 'column', md: 'row' }}
          w="full"
          spacing={2} >
            {socialLinks.map(({ href, label, color }) => (
            <Button
              key={href}
              as={Link}
              justifyContent={{ base: 'flex-start', md: 'center' }}
              px={4}
              color={color}
              href={href}
              rightIcon={<Icon as={FiArrowUpRight} />}
              target="_blank"
              variant="ghost"
            >
              {label}
            </Button>
          ))}
          </Stack>
      </VStack>
      <HeroImage />
    </Stack>
  );
};

export default Hero;
