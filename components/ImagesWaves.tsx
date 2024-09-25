"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface IImageWavesProps {
  myclassname?: string;
}
const ImagesWaves = ({ myclassname }: IImageWavesProps) => {
  const { theme } = useTheme();
  const [clientSideRendered, setClientSideRendered] = useState(false);

  useEffect(() => {
    setClientSideRendered(true);
  }, []);

  if (!clientSideRendered) {
    return null;
  }

  return (
    <>
      {theme === "light" && (
        <Image
          src="/white.png"
          alt=""
          width={2000}
          height={62}
          className={`w-full lg:block ${myclassname}`}
        />
      )}

      {theme === "dark" && (
        <Image
          src="/dark.png"
          alt=""
          width={2000}
          height={62}
          className={`w-full lg:block ${myclassname}`}
        />
      )}

      {/* {theme === "system" && (
        <Image
          src="/dark.png"
          alt=""
          width={2000}
          height={62}
          className={`w-full lg:block ${myclassname}`}
        />
      )} */}
    </>
  );
};

export default ImagesWaves;
