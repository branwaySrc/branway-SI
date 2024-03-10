import Image from "next/image";

export default function LoadingAnimation() {
  return (
    <Image
      src={"/animation/loading.gif"}
      alt="loading"
      height={50}
      width={50}
    />
  );
}
