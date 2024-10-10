import ImagesWaves from "@/components/ImagesWaves";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AtSign, MapPin, Smartphone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="relative text-white">
      <div className="absolute inset-0 z-10">
        <ImagesWaves myclassname="absolute -top-5 transform rotate-180" />
      </div>

      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: "url(/slider/1.jpg)" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-75"></div>
      </div>

      <div className="relative z-20">
        <div className="container mx-auto px-4 pb-16 pt-24">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold">Subscribe Newsletter</h2>
            <p className="mt-2 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis, ducimus et, iusto maiores commodi necessitatibus
              doloribus quas inventore reiciendis numquam, quidem mollitia ullam
              quia modi provident voluptatibus pariatur unde nam!
            </p>
            <div className="ml-auto mt-4 flex justify-center gap-2">
              <Input placeholder="Your e-mail address" className="max-w-lg" />
              <Button variant="formButton">Subscribe</Button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* First Area (LOGO) */}
            <div>
              <div className="w-24 rounded-xl bg-white px-3 py-4">
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={500}
                  height={500}
                  className="w-full"
                />
              </div>
              <p className="mt-2 text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam mollitia consequuntur corrupti at amet temporibus
                voluptates, quae reiciendis, error animi fuga, officiis facere
                totam ipsa explicabo. Pariatur hic, ipsum totam reiciendis
                praesentium voluptatum nihil earum aliquam eaque magnam rem
                reprehenderit similique architecto dolorum dolor officiis illo
                repellendus dignissimos sapiente ducimus.
              </p>
            </div>

            {/* Second Area (ROOMS) */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Rooms</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Hotel One Suite Turkey Ayvalik Lux Spa Welness
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Area (CONTACT) */}
            <div>
              <h3 className="mb-4 text-xl font-bold">Contact</h3>
              <p className="flex flex-col gap-4 text-gray-400">
                <span className="flex items-center gap-2">
                  <MapPin size={19} />
                  Global Street vs Turkey Istanbul
                </span>
                <span className="flex items-center gap-2">
                  <Smartphone size={19} />
                  +90 555 333 22 22
                </span>
                <span className="flex items-center gap-2">
                  <AtSign size={19} />
                  hotelxyz@youtube.com
                </span>
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
              <p className="text-gray-400">&copy; Trainer Efe Görkem Ümit</p>
              <p className="text-gray-400">
                Designed By&nbsp;
                <span className="text-yellow-500">Efe Görkem Ümit</span>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
