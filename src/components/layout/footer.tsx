import { useRouter } from "next/router";
import NextLink from "next/link";
import { chakra, Stack, VStack, Divider, Link, Text } from "@chakra-ui/react";

import {
  CV_PROFILE,
  GITHUB_PROFILE,
  LKD_PROFILE,
  TABLEAU_PROFILE
} from "../../constants";
import { Link as LinkType } from "@/types/link";
import VercelCallout from "../vercel-callout";

const firstGroup: LinkType[] = [
  {
    href: "/",
    label: "Accueil",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

const secondGroup = [
  {
    href: CV_PROFILE,
    label: "CV",
  },
  {
    href: GITHUB_PROFILE,
    label: "GitHub",
  },
];

const thirdGroup = [
  {
    href: LKD_PROFILE,
    label: "Linkedin",
  },
  {
    href: TABLEAU_PROFILE,
    label: "Tableau",
  },
];

const Footer = () => {
  const { pathname } = useRouter();

  return (
    <VStack as="footer" alignItems="flex-start" pb={8} spacing={8}>
      <Divider />
      <Stack
        justifyContent="space-between"
        direction={{ base: "column", md: "row" }}
        w="full"
        spacing={{ base: 2, md: 8 }}
      >
        <VStack alignItems="flex-start">
          {firstGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                color={pathname === href ? "purple.500" : "gray.500"}
                isExternal={href.startsWith("http")}
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems="flex-start">
          {secondGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                color="gray.500"
                isExternal={href.startsWith("http")}
                target="_blank"
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
        <VStack alignItems="flex-start">
          {thirdGroup.map(({ href, label }) => (
            <NextLink key={href} href={href} passHref>
              <Link
                color={pathname === href ? "purple.500" : "gray.500"}
                isExternal={href.startsWith("http")}
              >
                {label}
              </Link>
            </NextLink>
          ))}
        </VStack>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent={{ base: "center", md: "space-between" }}
        direction={{ base: "column", md: "row" }}
        gridRowGap={4}
        w="full"
        spacing={0}
      >
        <Text color="gray.500" fontSize="sm">
          ©{" "}
          <chakra.span as="time" color="purple.500">
            {new Date().getFullYear()}
          </chakra.span>{" "}
          Mohamed LAAJAJ
        </Text>
        </Stack>
    </VStack>
  );
};

export default Footer;
