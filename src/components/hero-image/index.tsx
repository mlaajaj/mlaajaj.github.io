import { Box, AspectRatio, Flex } from "@chakra-ui/react";

import StatusIndicator from "../status-indicator";
import { Player, Controls } from '@lottiefiles/react-lottie-player';


const HeroImage = () => {
  return (
    <Flex position="relative" justify="center" pb={4}>
      <AspectRatio as="figure" flexShrink={0} w={56} h={56} ratio={1}>
        <Box overflow="hidden" rounded="full">
          <Player
            autoplay={true}
            loop={false}
            keepLastFrame={true}
            src="/assets/images/intro_anim.json"
            style={{ height: '300px', width: '300px' }}
          >
          </Player>
        </Box>
      </AspectRatio>
    </Flex>
  );
};

export default HeroImage;
