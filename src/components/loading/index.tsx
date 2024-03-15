import { Skeleton, Stack } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Stack>
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="80px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
      </Stack>
      <div className="h-[20px]" />
      <Stack>
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="80px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
        <Skeleton startColor="#FFFFFF20" endColor="#FFFFFF10" height="30px" />
      </Stack>
    </>
  );
}
