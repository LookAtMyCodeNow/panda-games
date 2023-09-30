import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav   nav" "aside main"`, // 1024px up
      }}
    >
      <GridItem area="nav" bg="yellow">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="darkblue">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
