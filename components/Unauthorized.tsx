import { Center, Container, createStyles, Text, Title } from '@mantine/core';

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

const Unauthorized = () => {
  const { classes } = useStyles();

  return (
    <Center className={classes.root}>
      <Container>
        <div className={classes.label}>401</div>
        <Title className={classes.title}>No Authorization</Title>
        <Text size="lg" align="center" className={classes.description}>
          You are not authorized to view this page.
        </Text>
      </Container>
    </Center>
  );
};

export default Unauthorized;
