import { Grid, Text, Card } from "@nextui-org/react";
import React from "react";
import { Flex } from "../styles/flex";
import { AcmeLogo } from "../navbar/logo";

type Client = { name: string; Logo?: React.ElementType };

interface TrustedProps {
  clients?: Client[]; // jika kosong/undefined => tampilkan trust signals
}

export const Trusted: React.FC<TrustedProps> = ({ clients = [] }) => {
  const hasClients = clients.length > 0;

  return (
    <>
      <Flex
        direction={"column"}
        align={"center"}
        css={{ pt: "$20", px: "$6", "@md": { px: "$64" } }}
      >
        <Text h2 css={{ textAlign: "center" }}>
          {hasClients
            ? "Dipercaya oleh Mitra & Klien"
            : "Standar Profesional & Kepercayaan"}
        </Text>

        <Text
          css={{ color: "$accents8", maxWidth: "800px", textAlign: "center" }}
          size={"$lg"}
        >
          {hasClients
            ? "Kolaborasi dengan berbagai organisasi di beragam industri—didukung proses kerja yang transparan dan hasil yang terukur."
            : "Beroperasi dengan legalitas usaha yang jelas, proses kerja terstruktur, dan komitmen layanan yang konsisten—fondasi kepercayaan untuk memulai kolaborasi."}
        </Text>

        {/* STATE A: Ada klien -> tampilkan logo */}
        {hasClients ? (
          <Grid.Container
            gap={6}
            alignItems="center"
            justify="center"
            css={{ width: "100%", mt: "$10", "& span": { whiteSpace: "pre" } }}
          >
            {clients.map(({ name, Logo = AcmeLogo }) => (
              <Grid key={name} sm={3} justify="center">
                <Flex align={"center"} css={{ gap: "$5" }}>
                  <Logo />
                  <Text weight={"semibold"} span size={"$lg"}>
                    {name}
                  </Text>
                </Flex>
              </Grid>
            ))}
          </Grid.Container>
        ) : (
          // STATE B: Belum ada klien -> tampilkan trust signals
          <Flex
            css={{
              mt: "$12",
              width: "100%",
              maxWidth: "900px",
              px: "$4",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "$4",
              "@sm": { 
                px: "$8",
                gridTemplateColumns: "1fr 1fr"
              },
              "@md": { px: "$12" },
            }}
          >
            <Card variant="flat" css={{ height: "100%" }}>
              <Card.Body css={{ p: "$6" }}>
                <Text h4 css={{ mb: "$4" }}>Legalitas Terjamin</Text>
                <Text css={{ color: "$accents8", lineHeight: "1.6" }}>
                  Terdaftar resmi dan mematuhi perizinan berusaha berbasis
                  risiko—siap berkolaborasi secara kredibel dan dapat
                  dipertanggungjawabkan.
                </Text>
              </Card.Body>
            </Card>

            <Card variant="flat" css={{ height: "100%" }}>
              <Card.Body css={{ p: "$6" }}>
                <Text h4 css={{ mb: "$4" }}>Proses Kerja Transparan</Text>
                <Text css={{ color: "$accents8", lineHeight: "1.6" }}>
                  Konsultasi → Analisis → Implementasi → Evaluasi. Laporan
                  berkala dan titik kontrol yang jelas.
                </Text>
              </Card.Body>
            </Card>

            <Card variant="flat" css={{ height: "100%" }}>
              <Card.Body css={{ p: "$6" }}>
                <Text h4 css={{ mb: "$4" }}>Konsultasi Awal Gratis</Text>
                <Text css={{ color: "$accents8", lineHeight: "1.6" }}>
                  Pemetaan kebutuhan tanpa biaya untuk memastikan solusi
                  paling relevan sebelum komitmen proyek.
                </Text>
              </Card.Body>
            </Card>

            <Card variant="flat" css={{ height: "100%" }}>
              <Card.Body css={{ p: "$6" }}>
                <Text h4 css={{ mb: "$4" }}>Siap NDA</Text>
                <Text css={{ color: "$accents8", lineHeight: "1.6" }}>
                  Kerahasiaan data dijaga melalui perjanjian kerahasiaan
                  (NDA) dan praktik pengelolaan dokumen yang aman.
                </Text>
              </Card.Body>
            </Card>

            <Card variant="flat" css={{ height: "100%" }}>
              <Card.Body css={{ p: "$6" }}>
                <Text h4 css={{ mb: "$4" }}>Tim Multidisiplin</Text>
                <Text css={{ color: "$accents8", lineHeight: "1.6", mb: "$4" }}>
                  Manajemen, teknologi informasi, e-commerce, arsitektur,
                  dan keinsinyuran dalam satu atap.
                </Text>
                <Flex css={{ 
                  gap: "$2", 
                  flexWrap: "wrap"
                }}>
                  <Text css={{ 
                    fontSize: "$xs",
                    padding: "$1 $3",
                    backgroundColor: "$gray100",
                    borderRadius: "$pill",
                    border: "1px solid $gray300"
                  }}>
                    Web & Mobile
                  </Text>
                  <Text css={{ 
                    fontSize: "$xs",
                    padding: "$1 $3",
                    backgroundColor: "$gray100",
                    borderRadius: "$pill",
                    border: "1px solid $gray300"
                  }}>
                    Integrasi Sistem
                  </Text>
                  <Text css={{ 
                    fontSize: "$xs",
                    padding: "$1 $3",
                    backgroundColor: "$gray100",
                    borderRadius: "$pill",
                    border: "1px solid $gray300"
                  }}>
                    Konsultasi Operasional
                  </Text>
                  <Text css={{ 
                    fontSize: "$xs",
                    padding: "$1 $3",
                    backgroundColor: "$gray100",
                    borderRadius: "$pill",
                    border: "1px solid $gray300"
                  }}>
                    Desain Teknis
                  </Text>
                </Flex>
              </Card.Body>
            </Card>

            <Card variant="flat" css={{ height: "100%" }}>
              <Card.Body css={{ p: "$6" }}>
                <Text h4 css={{ mb: "$4" }}>Komitmen Respons Cepat</Text>
                <Text css={{ color: "$accents8", lineHeight: "1.6" }}>
                  Prioritas komunikasi yang jelas dengan target respons awal
                  maksimal 1×24 jam pada hari kerja.
                </Text>
              </Card.Body>
            </Card>
          </Flex>
        )}
      </Flex>
    </>
  );
};
