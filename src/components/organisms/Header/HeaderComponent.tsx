import { Box, Container } from "@mui/material";
import { FC } from "react";
import { UserMenu } from "@/components/molecules";

export const HeaderComponent: FC = () => {
  return (
    <Box
      height={94}
      borderBottom="1px solid"
      borderColor="divider"
      position="sticky"
      top={0}
      zIndex={100}
      bgcolor="white"
    >
      <Container sx={{ height: "100%" }}>
        <Box
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          Logo
          <UserMenu />
        </Box>
      </Container>
    </Box>
  );
};
