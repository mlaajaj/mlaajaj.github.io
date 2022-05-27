/* eslint no-use-before-define: 0 */  // --> OFF

import { GetStaticProps } from 'next';
import { VStack, Heading, Text, List, ListItem, SimpleGrid } from '@chakra-ui/react';

import Link from '@/components/link';
import { Tool } from '@/types/tool';
import ToolCard from '@/components/tool-card';
import { readData } from '@/utils/read-data';
import Song from '@/components/project/projects';
import {data} from 'data/project_data'


const Uses = ({ project_data }) => {
  return (
    <>
       <VStack as="section" alignItems="flex-start" w="full" spacing={3}>
        <Heading size="md">Projets.</Heading>
        <Text>
          Cette page regroupe l'ensemble de mes projets avec Python, Tableau, SQL...
        </Text>
      </VStack>
        <SimpleGrid columns={2} spacing={10}>
        {data.map((data) => (
            <Song key={data.id} {...data} />
        ))}
        </SimpleGrid>
    </>
  );
};


export default Uses;
