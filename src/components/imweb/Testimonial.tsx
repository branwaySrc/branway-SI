import {
  Container,
  Section,
  Box,
  Title,
  Text,
  Line,
  Inner,
} from "@/manager/lib/@";

export default function Testimonial() {
  return (
    <Container
      breakClass={{
        lg: "lg:flex lg:flex-row",
      }}
      className="z-50 flex flex-col text-center"
    >
      <Section className="absolute w-[50%] h-full right-0 bg-gradient-to-b from-[#000000] to-transparent" />
      <Box className="w-full text-neutral-400 z-50 h-full flex flex-col">
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2 relative overflow-hidden">
          <p className="max-w-[70%] text-center">
            한달정도 예상한 사이트를{" "}
            <span className="text-white">1주일 이내로 만들었어요.</span>
          </p>
          <p>TIMEBLUE - &ldquo;명품시계샵&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2 relative overflow-hidden">
          <p className="max-w-[70%] text-center">
            원하시는 느낌의 사이트를{" "}
            <span className="text-white">다른 업체보다 90% 빨랐어요.</span>
          </p>
          <p>리얼프레시푸드 - &ldquo;명품시계샵&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[70%] text-center ">
            구글/네이버 노출까지{" "}
            <span className="text-white">모두 한번에 해결해 주었어요.</span>
          </p>
          <p>메타럭스 - &ldquo;명품시계샵&ldquo;</p>
        </div>
      </Box>
      <Box className="w-full text-neutral-400 z-50 flex flex-col">
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[70%] text-center">
            구글/네이버 노출까지{" "}
            <span className="text-white">모두 한번에 해결해 주었어요.</span>
          </p>
          <p>메타럭스 - &ldquo;명품시계샵&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[70%] text-center">
            제공한 애셋만으로 충분히{" "}
            <span className="text-white">
              서비스 아이덴티티를 만들어 주었어요.
            </span>
          </p>
          <p>메타마케팅 - &ldquo;명품시계샵&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[70%] text-center">
            <span className="text-white">
              부담없는 가격에, 원하는 사이트를{" "}
            </span>
            만들어서 빠른런칭을 할 수 있었어요.
          </p>
          <p>알워치 - &ldquo;명품시계샵&ldquo;</p>
        </div>
      </Box>
    </Container>
  );
}
