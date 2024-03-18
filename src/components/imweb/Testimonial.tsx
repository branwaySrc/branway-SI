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
    <Container className="z-50 flex flex-col text-center">
      <Section className="absolute w-[50%] h-full right-0 bg-gradient-to-b from-[#000000] to-transparent" />
      <Box className="w-full text-neutral-400 z-50 h-full flex flex-col">
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2 relative overflow-hidden">
          <p className="max-w-[80%] text-center">
            한 달정도 예상한 사이트를 부담없는 가격으로,{" "}
            <span className="text-white">1주일 이내에 출시할 수 있었어요.</span>
          </p>
          <p>TIMEBLUE &ldquo;명품시계샵&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2 relative overflow-hidden">
          <p className="max-w-[70%] text-center">
            원하시는 느낌의 사이트를 만들어주었고,
            <span className="text-white">다른 업체보다 90% 빨랐어요.</span>
          </p>
          <p>리얼프레시푸드 &ldquo;유통업&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[70%] text-center ">
            쇼핑몰에 필요한 기능들부터 구글/네이버 노출까지{" "}
            <span className="text-white">모두 한번에 해결해 주었어요.</span>
          </p>
          <p>아리홈 &ldquo;도소매 쇼핑몰&ldquo;</p>
        </div>
      </Box>
      <Box className="w-full text-neutral-400 z-50 flex flex-col">
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[80%] text-center">
            담당자가 한명 뿐이라 사이트 운영에 어려움이 있었는데,{" "}
            <span className="text-white">
              브랜웨이가 제안해준 운영방법으로 손쉬운 운영을 하고 있어요.
            </span>
          </p>
          <p>메타럭스 &ldquo;명품 소매샵&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[70%] text-center">
            제공한 애셋이 적었는데도, 회사가 원하는{" "}
            <span className="text-white">
              서비스 아이덴티티를 만들어 주었어요.
            </span>
            크몽이랑 비교하면 안됩니다.
          </p>
          <p>메타마케팅 &ldquo;오프라인 광고업&ldquo;</p>
        </div>
        <div className="flex flex-col justify-center items-center border-b-[1px] border-[#FFFFFF30] py-10 gap-2">
          <p className="max-w-[80%] text-center">
            <span className="text-white">가격이 저렴해서 의심했었는데, </span>
            결과물이 너무 만족스러웠고, 빠르게 가게를 홍보할 수 있었어요.
          </p>
          <p>알워치 &ldquo;명품시계샵&ldquo;</p>
        </div>
      </Box>
    </Container>
  );
}
