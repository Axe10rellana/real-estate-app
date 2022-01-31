//chakra-ui
import { Box } from "@chakra-ui/react";

const anioActual = new Date().getFullYear();

const Footer = () => (
  <Box
    textAlign="center"
    p="5"
    color="gray.600"
    borderTop="1px"
    borderColor="gray.100"
  >
    &copy; {anioActual} Axe10rellana
  </Box>
);

export default Footer;
