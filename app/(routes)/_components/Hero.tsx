"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SliderImages } from "@/constants";
import Image from "next/image";
import ImagesWaves from "@/components/ImagesWaves";
import HeroForm from "./HeroForm";

const Hero = () => {
  return (
    <div className="relative mx-0 h-[32rem]">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {SliderImages.map((item) => (
            <CarouselItem key={item.id}>
              <Image
                src={item.href}
                alt={item.alt}
                width={1920}
                height={1080}
                className="h-[32rem] w-full object-cover brightness-75 lg:h-[44rem]"
              />
              <ImagesWaves myclassname="absolute lg:-bottom-3" />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5 hidden md:flex" />
        <CarouselNext className="right-5 hidden md:flex" />
      </Carousel>
      <HeroForm />
    </div>
  );
};

export default Hero;
