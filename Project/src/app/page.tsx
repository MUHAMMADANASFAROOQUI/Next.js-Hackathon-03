import React from "react";
import Image from "next/image";
import Link from "next/link";
import image7 from "../app/public/image7.png";
import image8 from "../app/public/image8.png";
import AboutImage from "../app/public/Aboutimage.jpeg";
import tick from "../app/public/tick.png";
import spesfication from "../app/public/spesfication.png";
import spesfication2 from "../app/public/spesfication2.png";
import spesfication3 from "../app/public/spesfication3.png";
import person1 from "../app/public/person1.jpeg";
import person2 from "../app/public/person2.webp";
import card1 from "../app/public/card1.jpeg";
import card2 from "../app/public/card2.jpeg";
import dynamic from "next/dynamic";
import { sanityFetch } from "@/sanity/lib/fetch";
import { twelvecars } from "@/sanity/lib/queries";

const Header = dynamic(() => import("./components/navbar"));
const Footer = dynamic(() => import("./components/footer"));

type Car = {
  _id: string;
  id: number;
  name: string;
  type: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: string;
  price_per_day: number;
  tags: string;
  image: string;
};

export default async function Home() {
  const cars: Car[] = await sanityFetch({ query: twelvecars });

  return (
    <div>
      <Header />
      <div className="" style={{ background: "#F6F7F9" }}>
        {/* Hero Section */}
        <div className="hero-section" style={{ background: "#F6F7F9" }}>
          <div className="relative md:flex md:mx-16">
            {/* Hero Image 1 */}
            <div className="relative mt-8 w-80 md:w-[640px] h-60 md:h-[350px] rounded-lg hover:scale-105 transition-transform">
              <Image
                src={card2}
                alt="The Best Platform for Car Rental"
                className="object-cover rounded-xl h-[360px]"
                layout="fill"
              />
              <div className="absolute top-8 left-6 text-white">
                <h1 className="text-lg font-semibold md:text-[32px] leading-normal w-[272px]">
                  The Best Platform for Car Rental
                </h1>
                <p className="text-[16px] w-[284px] mt-3">
                  Ease of doing a car rental safely and reliably. Of course, at
                  a low price.
                </p>
                <Link
                  href="/detail-car-rent/1"
                  className="inline-block bg-primary1 mt-3 hover:scale-x-110 transition-transform px-5 py-[10px] text-[16px] w-[120px] h-[44px] rounded-lg"
                >
                  Rent Car
                </Link>
              </div>
              <Image
                src={image7}
                alt="car1"
                className="absolute bottom-0 right-5 w-40 md:w-[406px] h-auto"
                width={150}
                height={45}
              />
            </div>

            {/* Hero Image 2 */}
            <div className="hidden md:block relative ml-8 md:w-[640px] w-80 h-[340px] rounded-lg mt-8 hover:scale-105 transition-transform">
              <Image
                src={card1}
                alt="hero2"
                className="object-cover rounded-xl h-[360px]"
                layout="fill"
              />
              <div className="absolute top-8 left-8 text-white">
                <h1 className="text-lg font-semibold md:text-[32px] leading-normal w-[280px]">
                  Easy way to rent a car at a low price
                </h1>
                <p className="text-[16px] w-[284px] mt-3">
                  Providing cheap car rental services with safe and comfortable
                  facilities.
                </p>
                <Link
                  href="/detail-car-rent/2"
                  className="inline-block bg-blue-500 hover:scale-x-110 transition-transform mt-3 px-5 py-[10px] text-[16px] w-[120px] h-[44px] rounded-lg"
                >
                  Rent Car
                </Link>
              </div>
              <Image
                src={image8}
                alt="car2"
                className="absolute bottom-2 right-10 w-40 md:w-[340px] h-auto"
                width={100}
                height={40}
              />
            </div>
          </div>
        </div>

        <div className="md:py-24 py-12 md:flex md:ml-28 md:mr-28 mx-5">
          {/* Left Image */}
          <div className="md:w-1/2 w-full">
            <Image
              src={AboutImage}
              alt="About Image"
              className="rounded-lg w-full h-auto"
            />
          </div>

          {/* Right Content */}
          <div
            className="md:w-1/2 w-full md:pl-16 pt-14 pr-6"
            style={{ backgroundColor: "#F6F7F9" }}
          >
            <h1 className="text-blue-600 font-bold text-xl">About CarBaazar</h1>
            <p className="font-bold mt-2" style={{ fontSize: 36 }}>
              Redefining the Car Rental Experience
            </p>
            <p className="mt-5 ">
              At our marketplace, we redefine the car rental experience with
              exceptional service, cutting-edge vehicles, and customer-focused
              solutions tailored to your needs.
            </p>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section
          className=" py-16 px-16  w-full"
          style={{ background: "#F6F7F9" }}
        >
          <h2 className="text-center text-3xl font-bold text-blue-600">
            Why Choose Us
          </h2>
          <p className="text-center text-sm mt-2 text-gray-600">
            Discover what sets CarBaazar apart from the competition.
          </p>
          <div className="flex flex-wrap justify-center mt-10 gap-8">
            {[
              {
                title: "Wide Range of Cars",
                description:
                  "From luxury to economy, we offer vehicles to suit every preference and budget.",
                icon: tick,
              },
              {
                title: "Transparent Pricing",
                description:
                  "No hidden costs or surprises. Our pricing is clear and fair.",
                icon: tick,
              },
              {
                title: "Excellent Support",
                description:
                  "Our team is here to assist you every step of the way.",
                icon: tick,
              },
              {
                title: "Certified Vehicles",
                description:
                  "All our cars are thoroughly inspected for quality and reliability.",
                icon: tick,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 p-6 rounded-lg w-72 shadow-lg text-center hover:shadow-xl transition-shadow"
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-blue-600">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial Section */}
        <section className=" py-16 w-full" style={{ background: "#F6F7F9" }}>
          <h2 className="text-center text-3xl font-bold text-blue-600">
            Testimonials
          </h2>
          <p className="text-center text-sm mt-2 text-gray-600">
            Here&#39;s what our happy customers have to say
          </p>
          <div className="flex flex-wrap justify-center mt-10 gap-8">
            {[person1, person2].map((pic, index) => (
              <div
                key={index}
                className="bg-white shadow-lg p-6 rounded-lg w-80 hover:scale-105 transition-transform"
              >
                <Image
                  src={person2}
                  alt={`Customer ${index + 1}`}
                  className="w-20 h-20 rounded-full mx-auto"
                />
                <h3 className="mt-4 text-center font-bold text-lg">John Doe</h3>
                <p className="text-center text-gray-600 text-sm">
                  &quot;CarBaazar is the best! I found the perfect car and the
                  staff was incredibly helpful.&quot;
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Popular Cars Section */}
        <div className="py-16 px-16" style={{ background: "#F6F7F9" }}>
          <h1 className="text-2xl font-bold">Popular Cars</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-10">
            {cars.map((car) => (
              <div
                key={car._id}
                className="w-[270px] h-[388px] bg-white rounded-xl hover:scale-105 transition-transform cursor-pointer"
              >
                <Link href={`detail-car-rent/${car.id}`} className="block">
                  <div>
                    {/* Car Info */}
                    <div className="flex m-4 pt-[8px]">
                      <div className="w-[250px]">
                        <h2 className="text-xl font-bold">{car.name}</h2>
                        <p className="opacity-50">{car.type}</p>
                      </div>
                    </div>
                    {/* Car Image */}
                    <div className="h-[90px]">
                      <Image
                        src={car.image}
                        alt={car.name}
                        className="w-[230px] mt-[90px] mx-[20px]"
                        height={100}
                        width={200}
                      />
                    </div>
                    {/* Specifications */}
                    <div className="grid grid-cols-3 mt-5 ml-3 mr-3">
                      <div className="flex">
                        <Image
                          src={spesfication}
                          alt="fuel"
                          width={18}
                          height={16}
                        />
                        <h1 className="ml-[3px]">{car.fuel_capacity}</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication2}
                          alt="transmission"
                          width={18}
                          height={16}
                        />
                        <h1 className="ml-[3px]">{car.transmission}</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication3}
                          alt="seating capacity"
                          width={18}
                          height={16}
                        />
                        <h1 className="ml-[3px]">{car.seating_capacity}</h1>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex ml-4 mt-5 gap-5">
                  <div className="flex w-[100px]">
                    <h2 className="text-2xl font-bold">
                      ${car.price_per_day}/
                    </h2>
                    <h2 className="opacity-50 mt-2 ml-1">day</h2>
                  </div>
                  <Link href={`/payment/${car.id}`}>
                    <div className="w-[116px] h-[44px] bg-primary1 text-[16px] hover:scale-x-105 transition-transform font-semibold text-white text-center rounded-[4px] pt-[8px]">
                      Rent Now
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="md:ml-[500px] ml-[80px] pt-[8px] rounded-[4px] mt-[60px] hover:scale-x-110 hover:scale-y-105 transition-transform w-[156px] h-[44px] bg-primary1 text-[16px] font-semibold text-white text-center">
            <Link href="/category-car-rent" className="">
              Show more cars
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
