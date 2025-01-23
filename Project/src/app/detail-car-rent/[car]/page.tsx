import Link from "next/link";
import card1 from "@/app/public/card1.jpeg";
import View2 from "@/app/public/View2.png";
import View3 from "@/app/public/View3.png";
import Reviews from "@/app/public/Reviews.png";
import Reviews1 from "@/app/public/Reviews1.png";
import Profill1 from "@/app/public/Profill1.png";
import Profill2 from "@/app/public/Profill2.png";
import arrow from "@/app/public/arrow.png";
import image7 from "@/app/public/image7.png";
import image8 from "@/app/public/image8.png";
import Car from "@/app/public/Car.png";
import Car5 from "@/app/public/Car5.png";
import Car2 from "@/app/public/Car2.png";
import Car3 from "@/app/public/Car3.png";
import spesfication from "@/app/public/spesfication.png";
import spesfication2 from "@/app/public/spesfication2.png";
import spesfication3 from "@/app/public/spesfication3.png";
import Like1 from "@/app/public/Like1.png";
import Like2 from "@/app/public/Like2.png";
import Image from "next/image";
import React from "react";

import {client} from "@/sanity/lib/client"// Adjust this path to where your Sanity client is configured
import { sanityFetch } from "@/sanity/lib/fetch";
import Header from "@/app/components/navbar";
import Footer from "@/app/components/footer";
 
import imageUrlBuilder from "@sanity/image-url";

// Define the Car type
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
  image_url: string;
  };
  
  // Create a builder instance
  const builder = imageUrlBuilder(client);
  
  // Function to generate image URLs
  function urlFor(source: string) {
  return builder.image(source).url();
  }
  
  // Fetch car data by its ID
  const fetchCarData = async (carid: number): Promise<Car | null> => {
  try {
  const query = `*[_type == "car" && id == $id][0]`;
  const params = { id: carid };
  const car = await client.fetch(query, params);
  return car || null;
  } catch (error) {
  console.error("Error fetching car data:", error);
  return null;
  }
  };
  
  // Dynamic CarPage component
  const CarPage = async ({ params }: { params: { car: string } }) => {
  const carid = parseInt(params.car, 10);
  
  if (isNaN(carid)) {
  return <div>Invalid car ID provided.</div>;
  }
  
  const car = await fetchCarData(carid);
  
  if (!car) {
  return <div>Car not found for ID: {carid} </div>;
  }
  
  const imageUrl = car.image_url ? urlFor(car.image_url) : null;

  return (
    <div>
      <Header/>
      <div>
        <div>
          <div className="flex">
            <div
              className="h-[2200px] w-full "
              style={{ backgroundColor: "#F3F5F7" }}
            >
              <div className="my-[32px] mx-[110px]">
                <div className="flex">
                  <div className="">
                    <Image
                      src={card1}
                      alt="card1"
                      className="w-[510px] h-[404px] bg-cover bg-center"
                    ></Image>
                    <div className="w-[372px] h-[20px]  ">
                      <div className=" absolute inset-16 ml-[90px] mt-[100px]">
                        <h1 className="text-[32px] font-semibold leading-[150%] tracking-percent text-white w-[410px] h-[96px]">
                          {car.type} car with the best design and acceleration
                        </h1>
                        <p className="text-[18px] font-normal font-[Plus Jakarta Sans] tracking-percent1 text-white w-[310px] h-[48px] mt-[20px]">
                          Safety and comfort while driving a futuristic and
                          elegant {car.type} car
                        </p>
                      </div>
                      {/* <Image src={car.image} alt="car1" className=" absolute inset-80 mt-[50px] " width={300} height={100}/> */}
                      {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${car.name} image`}
              width={310}
              height={60}
              className="absolute inset-52 mt-[160px]"
            />
          ) : (
            <p className="text-red-500 mt-4">Image not available.</p>
          )}
                    </div>
                    <div className="flex gap-x-6">
                      <div className="w-[156px] h-[124px]  relative rounded-xl">
                        <Image
                          src={card1}
                          alt="car-pay"
                          className="bg-cover w-full h-full object-cover rounded-xl"
                        />

{imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${car.name} image`}
              width={800}
              height={600}
              className="absolute inset-3 mt-7 w-5/6 h-1/3  object-cover "
            />
          ) : (
            <p className="text-red-500 mt-4">Image not available.</p>
          )}
                      </div>
                      <div>
                        <Image
                          src={View2}
                          alt="car-view"
                          className="mt-0"
                        ></Image>
                      </div>
                      <div>
                        <Image
                          src={View3}
                          alt="car-view"
                          className="mt-0"
                        ></Image>
                      </div>
                    </div>
                  </div>

                  <div className="w-[500px] h-[554px] bg-white ml-[20px] rounded-[10px]  ">
                    <div className="flex">
                      <div className=" h-[72px] ml-[24px] pt-[28px]">
                        <h1 className="text-[30px] font-bold leading-[150%] tracking-percent w-[350px]">
                          {car.name}
                        </h1>
                        <Image
                          src={Reviews}
                          alt="reviews"
                          className="w-[220px] h-[24px]"
                        ></Image>
                      </div>
                      <Image
                        src={Like1}
                        alt="like-1"
                        className="w-[32px] h-[32px] ml-[70px] mt-[32px]"
                      ></Image>
                    </div>
                    <p className="w-[420px] h-[120px] text-[18px]  tracking-percent1 mt-[80px] ml-[24px] mr-[24px] text-text4">
                      {car.name} Motors has become the embodiment of {car.name}
                      s outstanding performance, inspired by the most
                      unforgiving proving ground, the {car.type}.
                    </p>

                    <div className=" mt-[14px]  ml-[24px]">
                      <div className="flex">
                        <div>
                          <div className="flex">
                            <h1 className="text-[21px] opacity-50 ">
                              Type Car:
                            </h1>
                            <h1 className="text-[21px] opacity-50 ml-[20px] font-semibold">
                              {" "}
                              {car.type}
                            </h1>
                          </div>
                          <br />
                          <div className="flex">
                            <h1 className="text-[21px] opacity-50 ">
                              Steering:
                            </h1>
                            <h1 className="text-[21px] opacity-50 ml-[20px] font-semibold">
                              {" "}
                              {car.transmission}
                            </h1>
                          </div>
                        </div>

                        <div className="ml-[40px]">
                          <div className="flex">
                            <h1 className="text-[21px] opacity-50 ">
                              Capacity:
                            </h1>
                            <h1 className="text-[21px] opacity-50 ml-[20px] font-semibold">
                              {" "}
                              {car.seating_capacity}
                            </h1>
                          </div>
                          <br />
                          <div className="flex">
                            <h1 className="text-[21px] opacity-50 ">
                              Fuel Capacity:
                            </h1>
                            <h1 className="text-[21px] opacity-50 ml-[20px] font-semibold">
                              {" "}
                              {car.fuel_capacity}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex ml-[30px] mt-[20px]">
                      <div className="items-center ">
                        <div className="flex mt-[10px]">
                          <h1 className="text-text2 text-[36px] font-bold">
                            ${car.price_per_day}/
                          </h1>
                          <h1 className="text-[20px] font-bold text-text1 mt-4 ml-1">
                            day
                          </h1>
                        </div>

                        <div className="w-[140px] h-[56px] ml-[140px] mt-[14px] bg-primary1 pt-[16px] hover:scale-x-105 hover:bg-blue-700 rounded-[4px] text-center text-white">
                          <Link className="" href={`/payment/${car.id}`}>
                            Rent Now
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[1024px] h-[460px] bg-white mt-[50px] rounded-[10px]">
                  <div className="w-[136px] h-[28px] flex mx-[48px] pt-[28px]">
                    <h1 className="text-[20px] font-semibold tracking-percent1 pt-[10px]">
                      Reviews
                    </h1>
                    <h1 className="w-[32px] pt-[2px] pl-[7px] rounded-lg h-[26px] mt-[11px] ml-[10px] bg-primary1 text-[14px] font-bold text-white">
                      13
                    </h1>
                  </div>
                  <div className="w-[960px] h-[124px] mx-[48px] mt-[82px]">
                    <div className="w-[128px] h-[56px] flex">
                      <Image
                        src={Profill1}
                        alt="profill1 w-[60px] h-[60px]"
                      ></Image>
                      <div className="ml-[28px]">
                        <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                          Alex Stanton
                        </h1>
                        <h1 className="text-[14px] font-medium leading-[150%] tracking-percent1 w-[128px] mt-[6px] h-[20px] text-text1">
                          CEO at Bukalapak
                        </h1>
                      </div>
                      <div className="w-[128px] h-[56px] ml-[600px]">
                        <h1 className="w-[128px] h-[28px] ml-[20px]">
                          21 July 2022
                        </h1>
                        <Image
                          src={Reviews1}
                          alt="review1"
                          className="w-[108px] h-[20px]"
                        ></Image>
                      </div>
                    </div>
                    <p
                      className="w-[780px] h-[56px] text-[14px] leading-[200%] tracking-percent1 ml-[80px] mt-[14px]"
                      style={{ textEmphasisColor: "#596780" }}
                    >
                      We are very happy with the service from the MORENT App.
                      Morent has a low price and also a large variety of cars
                      with good and comfortable facilities. In addition, the
                      service provided by the officers is also very friendly and
                      very polite.
                    </p>
                  </div>

                  <div className="w-[960px] h-[124px] mx-[48px] mt-[28px]">
                    <div className="w-[128px] h-[56px] flex">
                      <Image
                        src={Profill2}
                        alt="profill1 w-[60px] h-[60px]"
                      ></Image>
                      <div className="ml-[28px]">
                        <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                          Skylar Dias
                        </h1>
                        <h1 className="text-[14px] font-medium leading-[150%] tracking-percent1 w-[128px] mt-[6px] h-[20px] text-text1">
                          CEO at Amazon
                        </h1>
                      </div>
                      <div className="w-[128px] h-[56px] ml-[600px]">
                        <h1 className="w-[128px] h-[28px] ml-[20px]">
                          20 July 2022
                        </h1>
                        <Image
                          src={Reviews1}
                          alt="review1"
                          className="w-[108px] h-[20px]"
                        ></Image>
                      </div>
                    </div>
                    <p
                      className="w-[780px] h-[56px] text-[14px] leading-[200%] tracking-percent1 ml-[80px] mt-[14px]"
                      style={{ textEmphasisColor: "#596780" }}
                    >
                      We are greatly helped by the services of the MORENT
                      Application. Morent has low prices and also a wide variety
                      of cars with good and comfortable facilities. In addition,
                      the service provided by the officers is also very friendly
                      and very polite.{" "}
                    </p>
                  </div>

                  <div className="flex ml-[450px] mt-[28px]">
                    <Link
                      href="/"
                      className="text-[16px] font-semibold leading-[150%] tracking-percent1 text-text1"
                    >
                      Show All
                    </Link>
                    <Image
                      src={arrow}
                      alt="arrow-down"
                      className="w-[16px h-[16px] ml-[10px] mt-[6px]"
                    />
                  </div>
                </div>
              </div>

              <div className="cards-section">
                <div
                  className="pt-[2px] pl-[110px] pr-[64px]"
                  style={{ backgroundColor: "#F6F7F9" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h1 className="text-[16px] font-semibold ml-[20px] text-text1">
                        Recent Car
                      </h1>
                    </div>
                    <div className="w-[104px] h-[44px] ">
                      <Link
                        href={"/category-car-rent"}
                        className="font-semibold text-[16px] text-primary1"
                      >
                        View All
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-8 mt-[20px] justify-center sm:justify-start sm:gap-6 md:gap-12 flex-nowrap">
                    <div className="w-[310px] h-[388px] bg-white rounded-[10px] hover:scale-105 transition-transform">
                      <div className="w-[128px] h-[48px] p-[24px] gap-x-[4px] flex">
                        <div>
                          <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                            Koenigsegg
                          </h1>
                          <h1 className="text-text1 text-[14px]">Sport</h1>
                        </div>
                        <Image
                          src={Like1}
                          alt="like1"
                          className="w-[28px] h-[28px] ml-[114px] mt-[4px]"
                        />
                      </div>
                      <Image
                        src={image7}
                        alt="car1"
                        className="w-[282px] h-[84px] ml-[2px] mt-[72px]"
                      />
                      <div className="grid grid-cols-3  ml-3 mr-3  mt-[52px]">
                        <div className=" flex">
                          <Image
                            src={spesfication}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">90L</h1>
                        </div>
                        <div className="flex">
                          <Image
                            src={spesfication2}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">Manual</h1>
                        </div>
                        <div className="flex">
                          <Image
                            src={spesfication3}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">2 People</h1>
                        </div>
                      </div>
                      <div>
                        <div className="flex">
                          <div className="w-[116px] h-[44px] ml-[28px] mt-[40px] flex">
                            <h1 className="text-text2 text-[20px] font-bold ">
                              $99.00/
                            </h1>
                            <h1 className="text-[14px] font-bold text-text1 mt-2 ml-1">
                              day
                            </h1>
                          </div>
                          <div className="w-[116px] h-[44px] mt-[36px]  bg-primary1 text-[16px] font-semibold ml-[20px] tracking-percent1 text-white text-center rounded-[4px] pt-[8px]">
                            <Link href={"/detail-car-rent/1"}>Rent Now</Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-[310px] h-[388px] bg-white rounded-[10px] hover:scale-105 transition-transform">
                      <div className="flex w-full  h-[48px] p-[24px] gap-x-[4px]">
                        <div className="flex-1">
                          <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                            Nissan GT-R
                          </h1>
                          <h1 className="text-text1 text-[14px]">Sport</h1>
                        </div>
                        <Image
                          src={Like2}
                          alt="like1"
                          className="w-[24px] h-[24px] mt-[4px]"
                        />
                      </div>
                      <Image
                        src={image8}
                        alt="car1"
                        className="w-[240px] h-[72px] ml-[28px] mt-[72px]"
                      />
                      <div className="grid grid-cols-3  ml-3 mr-3  mt-[64px]">
                        <div className=" flex">
                          <Image
                            src={spesfication}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">80L</h1>
                        </div>
                        <div className="flex">
                          <Image
                            src={spesfication2}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">Manual</h1>
                        </div>
                        <div className="flex">
                          <Image
                            src={spesfication3}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">2 People</h1>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-[32px] ml-[20px]">
                        <div className="items-center">
                          <div className="flex ">
                            <h1 className="text-text2 text-[20px] font-bold">
                              $80.00/
                            </h1>
                            <h1 className="text-[14px] font-bold text-text1 mt-2 ml-1">
                              day
                            </h1>
                          </div>
                          <h1 className="text-text1 text-[14px] font-bold">
                            $100.00
                          </h1>
                        </div>
                        <div className="w-[116px] h-[44px]   bg-primary1 text-[16px] font-semibold mr-[20px] tracking-percent1 text-white text-center rounded-[4px] pt-[8px]">
                          <Link href={"/detail-car-rent/2"}>Rent Now</Link>
                        </div>
                      </div>
                    </div>

                    <div className="w-[310px] h-[388px] bg-white rounded-[10px] hover:scale-105 transition-transform">
                      <div className="flex w-full  h-[48px] p-[24px] gap-x-[4px]">
                        <div className="flex-1">
                          <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                            Rolls - Royce
                          </h1>
                          <h1 className="text-text1 text-[14px]">Sedan</h1>
                        </div>
                        <Image
                          src={Like2}
                          alt="like1"
                          className="w-[24px] h-[24px] mt-[4px]"
                        />
                      </div>
                      <Image
                        src={Car}
                        alt="car1"
                        className="w-[244px] h-[76px] ml-[28px] mt-[72px]"
                      />
                      <div className="grid grid-cols-3  ml-3 mr-3  mt-[64px]">
                        <div className=" flex">
                          <Image
                            src={spesfication}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">70L</h1>
                        </div>
                        <div className="flex">
                          <Image
                            src={spesfication2}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">Manual</h1>
                        </div>
                        <div className="flex">
                          <Image
                            src={spesfication3}
                            alt="fuel"
                            className="w-[24px] h-[24px]"
                          />
                          <h1 className="ml-[2px]">4 People</h1>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-[36px] ml-[20px]">
                        <div className="flex items-center">
                          <h1 className="text-text2 text-[20px] font-bold">
                            $96.00/
                          </h1>
                          <h1 className="text-[14px] font-bold text-text1 mt-2 ml-1">
                            day
                          </h1>
                        </div>
                        <div className="w-[116px] h-[44px]   bg-primary1 text-[16px] font-semibold mr-[20px] tracking-percent1 text-white text-center rounded-[4px] pt-[8px]">
                          <Link href={"/detail-car-rent/3"}>Rent Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="pt-[20px] pl-[110px] pr-[64px]"
                style={{ backgroundColor: "#F6F7F9" }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-[16px] font-semibold ml-[20px] mt-[18px] text-text1">
                      Recommendation Car
                    </h1>
                  </div>
                </div>

                <div className="flex gap-8 mt-[24px] justify-center sm:justify-start sm:gap-6 md:gap-11 flex-nowrap">
                  <div className="w-[310px] h-[388px] bg-white rounded-[10px] hover:scale-105 transition-transform">
                    <div className="flex w-full p-[24px] gap-x-[4px]">
                      <div className="flex-1">
                        <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                          MG ZX Exclusive
                        </h1>
                        <h1 className="text-text1 text-[14px]">SUV</h1>
                      </div>
                      <Image
                        src={Like2}
                        alt="like1"
                        className="w-[24px] h-[24px] mt-[4px]"
                      />
                    </div>
                    <Image
                      src={Car5}
                      alt="car1"
                      className="w-[252px] h-[112px] ml-[18px] mt-[14px]"
                    />
                    <div className="grid grid-cols-3  ml-3 mr-3  mt-[38px]">
                      <div className=" flex">
                        <Image
                          src={spesfication}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">90L</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication2}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">Manual</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication3}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">2 People</h1>
                      </div>
                    </div>
                    <div className="flex ml-[28px] mt-[32px]">
                      <div className="items-center">
                        <div className="flex ">
                          <h1 className="text-text2 text-[20px] font-bold">
                            $72.00/
                          </h1>
                          <h1 className="text-[14px] font-bold text-text1 mt-2 ml-1">
                            day
                          </h1>
                        </div>
                        <h1 className="text-text1 text-[14px] font-bold">
                          $80.00
                        </h1>
                      </div>
                      <div className="w-[116px] h-[44px]   bg-primary1 text-[16px] font-semibold ml-[32px] tracking-percent1 text-white text-center rounded-[4px] pt-[8px]">
                        <Link href={"/detail-car-rent/16"}>Rent Now</Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-[310px] h-[388px] bg-white rounded-[10px] hover:scale-105 transition-transform">
                    <div className="flex w-full  h-[48px] p-[24px] gap-x-[4px]">
                      <div className="flex-1">
                        <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                          CR - V
                        </h1>
                        <h1 className="text-text1 text-[14px]">SUV</h1>
                      </div>
                      <Image
                        src={Like1}
                        alt="like1"
                        className="w-[24px] h-[24px] mt-[4px]"
                      />
                    </div>
                    <Image
                      src={Car2}
                      alt="car1"
                      className="w-[254px] h-[102px] ml-[16px] mt-[74px]"
                    />
                    <div className="grid grid-cols-3  ml-3 mr-3  mt-[38px]">
                      <div className=" flex">
                        <Image
                          src={spesfication}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">80L</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication2}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">Manual</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication3}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">6 People</h1>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[32px] ml-[20px]">
                      <div className="items-center">
                        <div className="flex ">
                          <h1 className="text-text2 text-[20px] font-bold">
                            $80.00/
                          </h1>
                          <h1 className="text-[14px] font-bold text-text1 mt-2 ml-1">
                            day
                          </h1>
                        </div>
                      </div>
                      <div className="w-[116px] h-[44px]   bg-primary1 text-[16px] font-semibold mr-[20px] tracking-percent1 text-white text-center rounded-[4px] pt-[8px]">
                        <Link href={"/detail-car-rent/14"}>Rent Now</Link>
                      </div>
                    </div>
                  </div>

                  <div className="w-[310px] h-[388px] bg-white rounded-[10px] hover:scale-105 transition-transform">
                    <div className="flex w-full  h-[48px] p-[24px] gap-x-[4px]">
                      <div className="flex-1">
                        <h1 className="text-[20px] font-bold leading-[150%] tracking-percent">
                          All New Terios
                        </h1>
                        <h1 className="text-text1 text-[14px]">Sport</h1>
                      </div>
                      <Image
                        src={Like2}
                        alt="like1"
                        className="w-[24px] h-[24px] mt-[4px]"
                      />
                    </div>
                    <Image
                      src={Car3}
                      alt="car1"
                      className="w-[252px] h-[112px] ml-[18px] mt-[64px]"
                    />
                    <div className="grid grid-cols-3  ml-3 mr-3  mt-[38px]">
                      <div className=" flex">
                        <Image
                          src={spesfication}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">70L</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication2}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">Manual</h1>
                      </div>
                      <div className="flex">
                        <Image
                          src={spesfication3}
                          alt="fuel"
                          className="w-[24px] h-[24px]"
                        />
                        <h1 className="ml-[2px]">4 People</h1>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-[32px] ml-[20px]">
                      <div className="flex items-center">
                        <h1 className="text-text2 text-[20px] font-bold">
                          $74.00/
                        </h1>
                        <h1 className="text-[14px] font-bold text-text1 mt-2 ml-1">
                          day
                        </h1>
                      </div>
                      <div className="w-[116px] h-[44px]   bg-primary1 text-[16px] font-semibold mr-[20px] tracking-percent1 text-white text-center rounded-[4px] pt-[8px]">
                        <Link href={"/detail-car-rent/15"}>Rent Now</Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:ml-[450px] ml-[80px] pt-[8px] rounded-[4px] mt-[60px] mb-[20px] w-[156px] h-[44px] bg-primary1 text-[16px] font-semibold text-white text-center">
                  <Link href={"/category-car-rent"} className="">
                    Show more car
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default CarPage;
