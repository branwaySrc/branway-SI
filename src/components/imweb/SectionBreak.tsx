import {
  Box,
  Section,
  Text,
  Title,
  Inner,
  Container,
  Figure,
} from "@/manager/lib/@";
import Image from "next/image";

export const SectionBreak = () => {
  return (
    <>
      <Box className="h-[100px] w-[2px] bg-gradient-to-t from-rose-500 mb-[-2px] mt-20" />
      <Box className="bg-rose-500 p-3 rounded-full" />
      <Box className="flex flex-col items-center mt-10 gap-2">
        <Title className="font-bold text-2xl">Title</Title>
        <Text className="text-slate-400 mb-8">Description</Text>
      </Box>
      <Figure className="relative overflow-hidden border-[1px] border-[#FFFFFF30] rounded-t-xl">
        <Image
          src={"/imweb_logo.jpg"}
          alt="imweb image"
          height={500}
          width={500}
          style={{
            objectFit: "cover",
          }}
        />
        <Box className="flex gap-3 absolute top-0 m-6">
          <Box className="bg-rose-500 p-1 rounded-full"></Box>
          <Box className="bg-green-500 p-1 rounded-full"></Box>
          <Box className="bg-yellow-500 p-1 rounded-full"></Box>
        </Box>
        <Container className="absolute top-0 right-4 mt-4">
          <Box
            breakClass={{ lg: "lg:w-[380px]", sm: "sm:w-[320px]" }}
            className="border-2 border-zinc-950 bg-[#FFFFFF05] h-9 w-[250px] rounded-md flex items-center"
          >
            <Text className="text-sm text-slate-300 mb-1 px-4">imweb.me</Text>
          </Box>
        </Container>
      </Figure>
    </>
  );
};
