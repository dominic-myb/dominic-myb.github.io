import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  GridItem,
  SimpleGrid,
  Text,
  Box,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';

const data = [{ tabTitle: 'Education' }, { tabTitle: 'Experience' }];

function BackgroundCard(props) {
  const { isHidden, title, length, desc, isLeft, icons = [] } = props;
  return <Box></Box>;
}

function Education() {
  return (
    <TabPanel display="flex" justifyContent="center" alignItems="center">
      <SimpleGrid className="timeline" columns="4" spacing="4"></SimpleGrid>
    </TabPanel>
  );
}

function Experience() {
  return (
    <TabPanel display="flex" justifyContent="center" alignItems="center">
      <SimpleGrid className="timeline" columns="2" spacing="4"></SimpleGrid>
    </TabPanel>
  );
}

function BackgroundTabs({ tabTitle }) {
  <Tabs
    isFitted
    variant="enclosed"
    colorScheme={useColorModeValue('#e5ded2', 'gray.700')}
    h="80%"
    my="auto"
  >
    <TabList mb="1em">
      {tabTitle.map((item, idx) => (
        <Tab key={idx}>{item.tabTitle}</Tab>
      ))}
    </TabList>
    <TabPanels
      w="full"
      h="full"
      my="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {}
    </TabPanels>
  </Tabs>;
}

function Background() {
  return (
    <GridItem
      className="block"
      rowSpan={useBreakpointValue({
        base: 1,
        sm: 1,
        md: 1,
        lg: 3,
      })}
      colSpan={useBreakpointValue({
        base: 1,
        sm: 1,
        md: 2,
        lg: 5,
      })}
      borderRadius="lg"
      bg={useColorModeValue('#e5ded2', 'gray.700')}
    ></GridItem>
  );
}

export default Background;
