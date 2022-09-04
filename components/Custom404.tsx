import {
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Text,
  Title,
} from '@mantine/core';
import { NextLink } from '@mantine/next';

const useStyles = createStyles(theme => ({
  root: {
    paddingTop: 80,
    paddingBottom: 120,
    height: '100%',
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors[theme.primaryColor][3],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 540,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },
}));

const Index = () => {
  const { classes } = useStyles();

  return (
    <Center className={classes.root}>
      <Container>
        <div className={classes.label}>404</div>
        <Title className={classes.title}>Page does not exist</Title>
        <Text size="lg" align="center" className={classes.description}>
          Page you are trying to open does not exist. You may have mistyped the
          address, or the page has been moved to another URL. If you think this
          is an error contact support.
        </Text>
        <Group position="center">
          <NextLink href="/" passHref>
            <Button size="md">Take me back to home page</Button>
          </NextLink>
        </Group>
      </Container>
    </Center>
  );
};

export default Index;
