import { Button, Divider, Text } from "@nextui-org/react";
import React from "react";
import { Box } from "../styles/box";
import { Flex } from "../styles/flex";

export const Statistics = () => {
  return (
    <>
      <Box
        css={{
          pt: "$20",
          pb: "$16",
          px: "$6",
        }}
      >
        <Flex direction={"column"} align={"center"}>
          <Text
            h3
            css={{
              textAlign: "center",
            }}
          >
            Pengalaman & Keunggulan PT Mutu Cipta Utama
          </Text>
          <Text
            span
            css={{
              maxWidth: "800px",
              textAlign: "center",
            }}
          >
            Didukung legalitas resmi dari pemerintah, kami hadir sebagai mitra
            profesional dalam layanan konsultasi manajemen, teknologi informasi,
            e-commerce, dan keinsinyuran.
          </Text>
        </Flex>
        <Flex
          direction={"row"}
          wrap={"wrap"}
          justify={"center"}
          css={{
            gap: "2rem",
            pt: "$16",
            "@sm": {
              gap: "2rem",
            },
          }}
        >
          <Flex direction={"column"}>
            <Text h2 css={{ color: "$blue600" }}>
              7+
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Bidang Layanan Konsultasi
            </Text>
          </Flex>

          <Flex direction={"column"}>
            <Text h2 css={{ color: "$blue600" }}>
              100%
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Legalitas Usaha Terjamin
            </Text>
          </Flex>

          <Flex direction={"column"}>
            <Text h2 css={{ color: "$blue600" }}>
              2025
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Resmi Berdiri & Terdaftar
            </Text>
          </Flex>

          <Flex direction={"column"}>
            <Text h2 css={{ color: "$blue600" }}>
              Jakarta
            </Text>
            <Text span css={{ textAlign: "center" }} weight={"medium"}>
              Kantor Pusat di CBD Kuningan
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Divider
        css={{ position: "absolute", inset: "0p", left: "0", mt: "$5" }}
      />
    </>
  );
};
