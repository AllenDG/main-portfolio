"use client";
import allen from "@/assets/images/506784290_1115604103733190_3104913920678501961_n.jpg";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

export function ThreeDCardDemo() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-transparent border-none shadow-none w-auto p-0">
        <CardItem
          translateZ="80"
          rotateX={10}
          rotateZ={-5}
          className="w-[22rem] sm:w-[24rem]"
        >
          <img
  src={allen}
  width={800}
  height={1200}
  alt="Portrait Image"
  className="h-[34rem] w-full object-cover rounded-xl group-hover/card:shadow-xl transition-transform duration-300"
/>

        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
