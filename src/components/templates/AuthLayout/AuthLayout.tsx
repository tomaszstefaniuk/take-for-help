import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { TextLink } from "@/components/atoms";

const footerItems = [
  { label: "Terms" },
  { label: "Plans" },
  { label: "Contact Us" },
];

export const AuthLayout: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: { xs: "column-reverse", md: "unset" },
        height: { xs: "auto", md: "100vh" },
      }}
    >
      <Box
        minHeight="100%"
        height="max-content"
        bgcolor="white"
        zIndex="10"
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        sx={{ width: { xs: "100%", md: "50vw" } }}
      >
        <Box
          component="main"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginTop="auto"
          marginBottom="auto"
          paddingTop={4}
          paddingBottom={6}
        >
          {children}
        </Box>
        <Box component="footer" display="flex" justifyContent="center" gap={4}>
          {footerItems.map((item) => (
            <TextLink href="#" key={item.label}>
              {item.label}
            </TextLink>
          ))}
        </Box>
      </Box>
      <Box
        right={0}
        sx={{
          position: { xs: "relative", md: "fixed" },
          width: { xs: "100%", md: "50vw" },
          height: { xs: "90vh", md: "100vh" },
        }}
      >
        <Image
          src="/images/auth/auth-bg.png"
          alt="authentication background image"
          layout="fill"
          objectFit="cover"
        />
        <Box
          zIndex="100"
          height="100vh"
          p={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            position: { xs: "absolute", md: "fixed" },
            width: { xs: "100%", md: "50vw" },
            height: { xs: "auto", md: "100vh" },
          }}
        >
          <Box sx={{ height: { xs: "375px", md: "500px" } }}></Box>
          <Box color="white" maxWidth="460px">
            <Typography align="center" variant="h1" marginBottom={2.7}>
              Fast, Efficient and Productive
            </Typography>
            <Typography align="center" variant="body2">
              In this kind of post, the blogger introduces a person they’ve
              interviewed and provides some background information about the
              interview and their work following this is a transcript of the
              interview.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
