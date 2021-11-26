import create from "zustand";
import { Button } from "@chakra-ui/button";
import {
  Container,
  Center,
  Heading,
  VStack,
  Badge,
  HStack,
} from "@chakra-ui/react";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";

const useStore = create((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () => set((state) => ({ count: state.count - 1 })),
  resetCount: () => set({ count: 0 }),
  setCount: (value) => set({ count: value }),
}));

function App() {
  const count = useStore((state) => state.count);

  const setCount = (value) => {
    useStore.setState({ count: value });
  };

  return (
    <Container sx={{ minHeight: "100%" }}>
      <Center>
        <VStack spacing="2em">
          <Heading sx={{ color: "orange" }}>Vite + Zustand + Chakra UI</Heading>
          <HStack>
            <Button
              onClick={useStore((state) => state.decreaseCount)}
              size="lg"
              colorScheme="teal"
              width="100px"
            >
              Minus!
            </Button>
            <Button
              width="100px"
              size="lg"
              onClick={useStore((state) => state.resetCount)}
            >
              Reset!
            </Button>
            <Button
              onClick={useStore((state) => state.increaseCount)}
              size="lg"
              colorScheme="teal"
              width="100px"
            >
              Plus!
            </Button>
          </HStack>
          <Badge
            sx={{ padding: "0.5em", paddingX: "1em" }}
            variant="outline"
            colorScheme="purple"
          >
            {count}
          </Badge>
          <Slider
            colorScheme="teal"
            min={-100}
            max={100}
            step={1}
            onChange={(val) => setCount(val)}
            defaultValue={0}
            // onChangeEnd={(val) => setCount(val)}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </VStack>
      </Center>
    </Container>
  );
}

export default App;
