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

function BackgroundCard(props) {
  const { isHidden, title, length, desc, isLeft, icons = [] } = props;
  return (
    <Box
      className={`${isHidden ? 'textbox--hide' : 'textbox'} ${
        isLeft ? 'textbox--left' : 'textbox--right'
      }`}
    >
      <span
        className={`circle ${isLeft ? 'circle--left' : 'circle--right'}`}
      ></span>
      <Text>
        <span className={`title ${isLeft ? 'left-icon' : 'right-icon'}`}>
          {isLeft ? `${title} ${icons[0]}` : `${icons[0]} ${title}`}
        </span>
        <span className={`length ${isLeft ? 'left-icon' : 'right-icon'}`}>
          {isLeft ? `${length} ${icons[1]}` : `${icons[1]} ${length}`}
        </span>
        <span className={`desc ${isLeft ? 'left-icon' : 'right-icon'}`}>
          {isLeft ? `${desc} ${icons[2]}` : `${icons[2]} ${desc}`}
        </span>
      </Text>
      <span
        className={`${
          isLeft ? 'textbox__arrow--left' : 'textbox__arrow--right'
        }`}
      ></span>
    </Box>
  );
}

function Education() {
  const educationBackground = [
    {
      isHidden: false,
      title: 'Cavite State University - CCAT Campus',
      length: '2020 - 2024',
      desc: 'Graduated Cum Laude',
      isLeft: true,
      icons: ['✅', '📅', '🏆'],
    },
    {
      isHidden: true,
      isLeft: false,
    },
    {
      isHidden: true,
      isLeft: true,
    },
    {
      title: 'Amaya School of Home Industries',
      length: '2014 - 2020',
      desc: 'Graduated with Honors',
      isLeft: false,
      icons: ['✅', '📅', '🏆'],
    },
  ];
  return (
    <TabPanel display="flex" justifyContent="center" alignItems="center">
      <SimpleGrid className="timeline" columns="2" spacing="4">
        {educationBackground.map((item, idx) => (
          <BackgroundCard
            key={idx}
            isHidden={item.isHidden}
            title={item.title}
            length={item.length}
            desc={item.desc}
            isLeft={item.isLeft}
            icons={item.icons}
          />
        ))}
      </SimpleGrid>
    </TabPanel>
  );
}

function Experience() {
  const workBackground = [
    {
      isHidden: false,
      title: 'Dept. of Computer Studies - CvSU CCAT',
      length: '2024 (486 hours)',
      desc: 'IT Lab Support',
      isLeft: true,
      icons: ['🏢', '⌛', '🧑🏻‍💻'],
    },
    {
      isHidden: true,
      isLeft: false,
    },
    {
      isHidden: true,
      isLeft: true,
    },
    {
      isHidden: false,
      title: 'Dept. of Agriculture - Tanza LGU',
      length: '2020',
      desc: 'Data Encoder Clerk',
      isLeft: false,
      icons: ['🏢', '📅', '🧑🏻‍💻'],
    },
  ];
  return (
    <TabPanel display="flex" justifyContent="center" alignItems="center">
      <SimpleGrid className="timeline" columns="2" spacing="4">
        {workBackground.map((item, idx) => (
          <BackgroundCard
            key={idx}
            isHidden={item.isHidden}
            title={item.title}
            length={item.length}
            desc={item.desc}
            isLeft={item.isLeft}
            icons={item.icons}
          />
        ))}
      </SimpleGrid>
    </TabPanel>
  );
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
    >
      <Tabs
        isFitted
        variant="enclosed"
        colorScheme={useColorModeValue('#e5ded2', 'gray.700')}
        h="80%"
        my="auto"
      >
        <TabList mb="1em">
          <Tab>Education</Tab>
          <Tab>Experience</Tab>
        </TabList>
        <TabPanels
          w="full"
          h="full"
          my="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Education />
          <Experience />
        </TabPanels>
      </Tabs>
    </GridItem>
  );
}

export default Background;
