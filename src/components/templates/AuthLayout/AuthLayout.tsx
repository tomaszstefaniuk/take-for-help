import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { FC, PropsWithChildren } from "react";
import { TextButton } from "@/components/atoms";

const footerItems = [
  { label: "Terms" },
  { label: "Plans" },
  { label: "Contact Us" },
];

export const AuthLayout: FC<PropsWithChildren<unknown>> = ({
  children,
}: PropsWithChildren<unknown>) => {
  return (
    <Box height="100vh" display="flex">
      <Box
        height="100%"
        width="50vw"
        bgcolor="white"
        zIndex="10"
        p={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box
          component="main"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {children}
        </Box>
        <Box component="footer" display="flex" justifyContent="center" gap={2}>
          {footerItems.map((item) => (
            <TextButton key={item.label}>{item.label}</TextButton>
          ))}
        </Box>
      </Box>
      <Box position="fixed" right={0} height="100vh" width="50vw">
        <Image
          src="/images/auth/auth-bg.png"
          alt="authentication background image"
          layout="fill"
          objectFit="cover"
        />
        <Box
          zIndex="100"
          position="fixed"
          height="100vh"
          width="50vw"
          p={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box height="500px"></Box>
          <Box color="white">
            <Typography align="center" variant="h1" marginBottom={2.7}>
              Fast, Efficient and Productive
            </Typography>
            <Typography align="center" variant="body2">
              In this kind of post, the bloggerintroduces a person they’ve
              interviewed and provides some background information aboutthe
              intervieweeand their work following this is a transcript of the
              interview.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
