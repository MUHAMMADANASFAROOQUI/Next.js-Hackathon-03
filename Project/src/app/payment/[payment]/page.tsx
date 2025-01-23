import Link from "next/link";
import mark from "@/app/public/mark.png";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";
import Visa from "@/app/public/Visa.png";
import PayPal from "@/app/public/PayPal.png";
import Bitcoin from "@/app/public/Bitcoin.png";
import Ceklist from "@/app/public/Ceklist.png";
import security from "@/app/public/security.png";
import card1 from "@/app/public/card1.jpeg";
import Reviews from "@/app/public/Reviews.png";
import Image from "next/image";
import React from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import Header from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
  tags: string; // Adjust this if it's an array in your schema
  image_url: string;
};

const builder = imageUrlBuilder(client);

// Function to generate image URL
function urlFor(source: string) {
  return builder.image(source);
}

// Function to fetch car data by its ID
const fetchCarData = async (paymentid: number): Promise<Car | null> => {
  try {
    // Include the parameter directly in the query object
    const queryObject = {
      query: `*[_type == "car" && id == $id]`,
      params: { id: paymentid },
    };

    // Pass the object to sanityFetch
    const cars: Car[] = await sanityFetch(queryObject);

    console.log("Fetched cars:", cars);

    return cars[0] || null;
  } catch (error) {
    console.error("Error fetching car data:", error);
    return null;
  }
};

// Dynamic CarPage component
const CarPage = async ({ params }: { params: { payment: string } }) => {
  const paymentid = parseInt(params.payment, 10);

  if (isNaN(paymentid)) {
    return <div>Invalid car ID: {params.payment}</div>;
  }

  const car = await fetchCarData(paymentid);

  if (!car) {
    return <div>Car not found for ID: {paymentid}</div>;
  }

  const imageUrl = car.image_url
    ? urlFor(car.image_url).url()
    : "/path/to/fallback-image.jpg";

  return (
    <div>
      <Header/>
      <div className="payment-car">
        <div className="" style={{ backgroundColor: "#F6F7F9" }}>
          <div className="pl-[14px] pt-[32px] md:flex">
            <div className="w-[782px] h-[2176px] ">
              <div className="w-[390px] h-[636px] md:w-[790px] md:h-[336px] bg-white">
                <div className="flex">
                  <div className="w-[192px] h-[48px] pl-[20px] pt-[24px]">
                    <h1 className="w-[192px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">
                      Billing Info
                    </h1>
                    <h1 className="w-[192px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">
                      Please enter your billing info
                    </h1>
                  </div>
                  <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[510px] mt-[49px]">
                    Step 1 of 4
                  </h1>
                </div>

                <div className="md:flex md:flex-wrap">
                  <div className="w-[50%] px-[20px] mt-[32px]">
                    <label
                      htmlFor="name"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="w-[50%] px-[20px] mt-[32px]">
                    <label
                      htmlFor="address"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]"
                      placeholder="Phone Number"
                    />
                  </div>

                  <div className="w-[50%] px-[20px] mt-[24px]">
                    <label
                      htmlFor="name2"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="name2"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]"
                      placeholder="Address"
                    />
                  </div>
                  <div className="w-[50%] px-[20px] mt-[24px]">
                    <label
                      htmlFor="address2"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Town / City
                    </label>
                    <input
                      type="text"
                      id="address2"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px]"
                      placeholder="Town or City"
                    />
                  </div>
                </div>
              </div>

              <div className="w-[390px] h-[970px] md:w-[790px] md:h-[670px] bg-white mt-[32px]">
                <div className="flex">
                  <div className="w-[200px] h-[48px] p-[20px]">
                    <h1 className="w-[200px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">
                      Rental Info
                    </h1>
                    <h1 className="w-[200px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">
                      Please select your rental date
                    </h1>
                  </div>
                  <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[500px] mt-[49px]">
                    Step 2 of 4
                  </h1>
                </div>
                <div className="w-[92px] h-[20px] ml-[20px] mt-[32px] flex">
                  <Image
                    src={mark}
                    alt="mark"
                    className="w-[16px] h-[16px] mr-[8px] mt-[4px]"
                  ></Image>
                  <h1 className="w-[68px] h-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">
                    Pick - Up
                  </h1>
                </div>

                <div className="md:flex md:flex-wrap">
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label
                      htmlFor="name"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Locations
                    </label>
                    <select
                      id="name"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1"
                    >
                      <option value=" Select your city">
                        {" "}
                        Select your location
                      </option>
                      <option value="Gulshan">Gulshan</option>
                      <option value="P.E.C.H.S">P.E.C.H.S</option>
                      <option value="Saddar">Saddar</option>
                    </select>
                  </div>
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label
                      htmlFor="address"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Date
                    </label>
                    <select
                      id="name"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1"
                    >
                      <option value=" Select your city">
                        {" "}
                        Select your date
                      </option>
                      <option value="25-January-2025">25-January-2025</option>
                      <option value="27-January-2025">27-January-2025</option>
                      <option value="28-January-2025">28-January-2025</option>
                    </select>
                  </div>

                  <div className="w-[50%] px-[20px] mt-[20px]">
                    <label
                      htmlFor="name2"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Time
                    </label>
                    <select
                      id="name"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1"
                    >
                      <option value=" Select your city">
                        {" "}
                        Select your time
                      </option>
                      <option value="12:00 pm">12:00 pm</option>
                      <option value="2:00 pm">2:00 pm</option>
                      <option value="5:00 pm">5:00 pm</option>
                    </select>
                  </div>

                  <div className="w-[50%] px-[20px] mt-[20px]">
                    <label
                      htmlFor="name2"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Rent Duration
                    </label>
                    <select
                      id="name"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1"
                    >
                      <option value=" Select your city">
                        {" "}
                        Select Duration
                      </option>
                      <option value="12 hours">12 hours</option>
                      <option value="1  day">1 day</option>
                      <option value="2 days">2 days</option>
                      <option value="3 days">3 days</option>
                    </select>
                  </div>
                </div>

                <div className="w-[104px] h-[20px] ml-[20px] mt-[32px] flex">
                  <Image
                    src={mark}
                    alt="mark"
                    className="w-[16px] h-[16px] mr-[8px] mt-[4px]"
                  ></Image>
                  <h1 className="w-[80px] h-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">
                    Drop - Off
                  </h1>
                </div>

                <div className="flex flex-wrap">
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label
                      htmlFor="name"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Locations
                    </label>
                    <select
                      id="name"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1"
                    >
                      <option value=" Select your city">
                        {" "}
                        Select your Location
                      </option>
                      <option value="Gulshan">Gulshan</option>
                      <option value="P.E.C.H.S">P.E.C.H.S</option>
                      <option value="Saddar">Saddar</option>
                    </select>
                  </div>
                  <div className="w-[50%] px-[20px] mt-[28px]">
                    <label
                      htmlFor="address"
                      className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                    >
                      Date
                    </label>
                    <select
                      id="name"
                      className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-primary3 rounded-xl pl-[30px] mt-[16px] text-text1"
                    >
                      <option value=" Select your city">
                        {" "}
                        Select your date
                      </option>
                      <option value="26-January-2025">26-January-2025</option>
                      <option value="27-January-2025">27-January-2025</option>
                      <option value="28-January-2025">28-January-2025</option>
                      <option value="29-January-2025">29-January-2025</option>
                      <option value="30-January-2025">30-January-2025</option>
                    </select>
                  </div>
                </div>

                <div className="w-[790px] h-[596px] mt-[32px] bg-white">
                  <div>
                    <div className="flex">
                      <div className="w-[238px] h-[48px] pt-[24px] pl-[20px]">
                        <h1 className="w-[200px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">
                          Payment Method
                        </h1>
                        <h1 className="w-[236px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">
                          Please enter your payment method
                        </h1>
                      </div>
                      <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[460px] mt-[49px]">
                        Step 3 of 4
                      </h1>
                    </div>

                    <div className="w-[774px] h-[308px] bg-primary3 ml-[10px] mt-[32px]">
                      <div className="w-[140px] h-[20px] pl-[24px] pt-[24px] mt-[32px] flex ">
                        <Image
                          src={mark}
                          alt="mark"
                          className="w-[16px] h-[16px] mr-[8px] mt-[4px]"
                        ></Image>
                        <h1 className="w-[88px] h-[24px] text-[16px] font-semibold leading-[150%] tracking-percent1 ">
                          Credit Card
                        </h1>
                      </div>
                      <Image
                        src={Visa}
                        alt="visa img"
                        className="w-[92px] h-[20px] ml-[670px]"
                      ></Image>

                      <div className="flex flex-wrap">
                        <div className="w-[50%] px-[24px] mt-[32px]">
                          <label
                            htmlFor="name"
                            className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                          >
                            Card Number
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]"
                            placeholder="Card number"
                          />
                        </div>
                        <div className="w-[50%] px-[24px] mt-[32px]">
                          <label
                            htmlFor="address"
                            className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                          >
                            Expration Date
                          </label>
                          <input
                            type="text"
                            id="address"
                            className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]"
                            placeholder="DD / MM / YY"
                          />
                        </div>

                        <div className="w-[50%] px-[24px] mt-[24px]">
                          <label
                            htmlFor="name2"
                            className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                          >
                            Card Holder
                          </label>
                          <input
                            type="text"
                            id="name2"
                            className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]"
                            placeholder="Card holder"
                          />
                        </div>
                        <div className="w-[50%] px-[24px] mt-[24px]">
                          <label
                            htmlFor="address2"
                            className="w-[48px] h-[20px] text-[16px] font-medium leading-[150%] tracking-percent1"
                          >
                            CVC
                          </label>
                          <input
                            type="text"
                            id="address2"
                            className="w-full h-[56px] text-[14px] leading-[150%] tracking-percent1 font-medium bg-white rounded-xl pl-[30px] mt-[16px]"
                            placeholder="CVC"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={PayPal}
                    alt="paypal"
                    className="w-[754px] h-[56px] mt-[24px] ml-[20px]"
                  ></Image>
                  <Image
                    src={Bitcoin}
                    alt="paypal"
                    className="w-[754px] h-[56px] mt-[24px] ml-[20px]"
                  ></Image>
                </div>

                <div className="w-[790px] h-[484px] bg-white mt-[32px]">
                  <div className="flex">
                    <div
                      className="w-[436px] h-[48px] pt-[24px] pl-[20
                  px]"
                    >
                      <h1 className="w-[200px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">
                        Confirmation
                      </h1>
                      <h1 className="w-[436px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[4px]">
                        We are getting to the end. Just few clicks and your
                        rental is ready!
                      </h1>
                    </div>
                    <h1 className="w-[80px] h-[20px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 ml-[260px] mt-[49px]">
                      Step 3 of 4
                    </h1>
                  </div>

                  <div className="w-[774px] h-[136px] ml-[20px] mt-[32px]">
                    <div className="w-[754px] h-[56px] bg-primary3 pt-[16px] flex">
                      <Image
                        src={Ceklist}
                        alt="checklist"
                        className="w-[24px] h-[24px] ml-[32px] "
                      ></Image>
                      <h1 className="w-[683px] h-[24px] ml-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">
                        I agree with sending an Marketing and newsletter emails.
                        No spam, promissed!
                      </h1>
                    </div>
                    <div className="w-[754px] h-[56px] bg-primary3 pt-[16px] flex mt-[32px]">
                      <Image
                        src={Ceklist}
                        alt="checklist"
                        className="w-[24px] h-[24px] ml-[32px] "
                      ></Image>
                      <h1 className="w-[683px] h-[24px] ml-[20px] text-[16px] font-semibold leading-[150%] tracking-percent1">
                        I agree with our terms and conditions and privacy
                        policy.
                      </h1>
                    </div>
                    <div className="w-[140px] h-[56px] bg-primary1 text-[16px] font-bold text-white pt-[15px] pl-[30px] rounded-xl mt-[32px]">
                      <Link className="" href="/dashboard">
                        Rent Now
                      </Link>
                    </div>

                    <div className="mt-[32px] w-[548px] h-[100px] ">
                      <Image
                        className="w-[24px] h-[24px] "
                        src={security}
                        alt="security"
                      ></Image>
                      <div className="w-[548px] h-[52px] mt-[10px]">
                        <h1 className="w-[204px] h-[24px]  text-[16px] font-semibold leading-[150%] tracking-percent1">
                          All your data are safe
                        </h1>
                        <h1 className="text-[14px] font-semibold leading-[150%] tracking-percent1 w-[548px] h-[20px] text-text1 mt-2 ">
                          We are using the most advanced security to provide you
                          the best experience ever.
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[430px] h-[560px] bg-white ml-[20px] mr-[24px]">
              <div className="w-[424px] h-[76px] pt-[24px] pl-[16px]">
                <h1 className="w-[180px] h-[24px] text-[20px] font-bold leading-[150%] tracking-percent">
                  Confirmation
                </h1>
                <h1 className="w-[374px] h-[48px] text-[14px] font-medium leading-[150%] tracking-percent1 text-text1 mt-[6px]">
                  Prices may change depending on the length of the rental and
                  the price of your rental car.
                </h1>
              </div>
              <div className="flex border-b-2 pb-[40px] ml-[16px] mr-[16px]">
                <div className="w-[110px] h-[96px] mt-[52px] relative rounded-xl">
                  <Image
                    src={card1}
                    alt="car-pay"
                    className="bg-cover w-full h-full object-cover rounded-xl"
                  />

                  <Image
                    src={imageUrl}
                    alt="car-image"
                    className="absolute inset-3  object-cover mt-[20px]"
                    width={90}
                    height={25}
                  />
                </div>
                <div className="ml-[8px] w-[210px]">
                  <h1 className="  mt-[64px]  font-bold text-[24px]">
                    {car.name}
                  </h1>
                  <Image
                    src={Reviews}
                    alt="review"
                    className="w-[210px]"
                  ></Image>
                </div>
              </div>

              <div className="ml-[16px] mt-[30px] grid grid-cols-2 w-[404px] h-[20px] gap-60">
                <h1 className="text-[16px] font-medium text-text1 leading-[150%] tracking-percent1">
                  Subtotal
                </h1>
                <h1 className="text-[17px] font-semibold leading-[150%] tracking-percent1 mr-[10px]">
                  ${car.price_per_day}
                </h1>
              </div>
              <div className="ml-[16px] mt-[20px] w-[404px] h-[20px] flex">
                <h1 className="text-[17px] font-medium text-text1 leading-[150%] tracking-percent1">
                  Tax
                </h1>
                <h1 className="text-[17px] font-semibold leading-[150%] tracking-percent1 ml-[300px]">
                  10%
                </h1>
              </div>

              <div className="w-[394px] h-[56px] bg-primary3 ml-[16px] mt-[40px] rounded-xl flex">
                <input
                  className="text-[14px] leading-[150%] tracking-percent1 bg-primary3 text-text1 pt-[0px] pl-[30px] "
                  placeholder="Apply promo code"
                ></input>
                <Link
                  href={"Not-Available"}
                  className="text-[16px] leading-[150%] tracking-percent1 font-semibold pt-[16px] pl-[100px]"
                >
                  Apply now
                </Link>
              </div>
              <div className="flex">
                <div className="ml-[16px] mt-[20px]">
                  <h1 className="text-[18px] leading-[150%] tracking-percent font-bold">
                    Total Rental Price
                  </h1>
                  <h1 className="text-[14px] leading-[150%] tracking-percent1 font-medium text-text1">
                    Overall price and includes rental discount
                  </h1>
                </div>
                <h1 className="font-bold text-[32px] mt-[24px] ml-[30px]">
                  ${car.price_per_day}
                </h1>
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

// import Link from "next/link";
// import mark from "../public/mark.png";
// import imageUrlBuilder from '@sanity/image-url'
// import { client } from "@/sanity/lib/client"
// import Visa from "../public/Visa.png";
// import PayPal from "../public/PayPal.png";
// import Bitcoin from "../public/Bitcoin.png";
// import Ceklist from "../public/Ceklist.png";
// import security from "../public/security.png";
// import card1 from "../public/card1.jpeg";
// import Reviews from "../public/Reviews.png"
// import Image from "next/image";
// import React from "react";
// import { sanityFetch } from "@/sanity/lib/client";

// // Define the Car type
// type Car = {
//   _id: string;
//   id: number;
//   name: string;
//   type: string;
//   fuel_capacity: string;
//   transmission: string;
//   seating_capacity: string;
//   price_per_day: number;
//   tags: string;
//   image_url: string;
// };

// const builder = imageUrlBuilder(client)

// // Function to generate image URL
// function urlFor(source: any) {
//   return builder.image(source)
// }

// // Function to fetch car data by its ID
// const fetchCarData = async (paymentid: number): Promise<Car | null> => {
//     try {
//       const queryObject = {
//         query: `*[_type == "car" && id == $id]`,
//         params: { id: paymentid },
//       };

//       const cars: Car[] = await sanityFetch(queryObject);
//       console.log("Fetched cars:", cars);

//       return cars[0] || null;
//     } catch (error) {
//       console.error("Error fetching car data:", error);
//       return null;
//     }
// };

// // Dynamic CarPage component
// const CarPage = async ({ params }: { params: { payment: string } }) => {
//   const paymentid = parseInt(params.payment, 10);

//   if (isNaN(paymentid)) {
//     return <div>Invalid car ID: {params.payment}</div>;
//   }

//   const car = await fetchCarData(paymentid);

//   if (!car) {
//     return <div>Car not found for ID: {paymentid}</div>;
//   }

//   const imageUrl = car.image_url ? urlFor(car.image_url).url() : '/path/to/fallback-image.jpg';

//   return (
//     <div>
//       <div className="payment-car">
//         <div className="bg-gray-50">
//           <div className="pl-4 pt-8 flex flex-col sm:flex-row">
//             <div className="w-full sm:w-2/3 lg:w-2/3">
//               <div className="w-full bg-white p-4">
//                 <div className="flex justify-between items-center">
//                   <div className="flex flex-col">
//                     <h1 className="text-2xl font-bold">Billing Info</h1>
//                     <p className="text-sm text-gray-600">Please enter your billing info</p>
//                   </div>
//                   <p className="text-sm text-gray-600">Step 1 of 4</p>
//                 </div>
//                 <div className="flex flex-wrap mt-4">
//                   <div className="w-full sm:w-1/2 lg:w-1/2 px-4 mt-8">
//                     <label htmlFor="name" className="text-lg font-medium">Name</label>
//                     <input type="text" id="name" className="w-full h-14 text-sm bg-gray-200 rounded-xl p-4 mt-2" placeholder="Your name" />
//                   </div>
//                   <div className="w-full sm:w-1/2 lg:w-1/2 px-4 mt-8">
//                     <label htmlFor="address" className="text-lg font-medium">Phone Number</label>
//                     <input type="text" id="address" className="w-full h-14 text-sm bg-gray-200 rounded-xl p-4 mt-2" placeholder="Phone Number" />
//                   </div>
//                   <div className="w-full sm:w-1/2 lg:w-1/2 px-4 mt-6">
//                     <label htmlFor="name2" className="text-lg font-medium">Address</label>
//                     <input type="text" id="name2" className="w-full h-14 text-sm bg-gray-200 rounded-xl p-4 mt-2" placeholder="Address" />
//                   </div>
//                   <div className="w-full sm:w-1/2 lg:w-1/2 px-4 mt-6">
//                     <label htmlFor="address2" className="text-lg font-medium">Town / City</label>
//                     <input type="text" id="address2" className="w-full h-14 text-sm bg-gray-200 rounded-xl p-4 mt-2" placeholder="Town or City" />
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full bg-white p-4 mt-8">
//                 <div className="flex justify-between items-center">
//                   <div className="flex flex-col">
//                     <h1 className="text-2xl font-bold">Rental Info</h1>
//                     <p className="text-sm text-gray-600">Please select your rental date</p>
//                   </div>
//                   <p className="text-sm text-gray-600">Step 2 of 4</p>
//                 </div>
//                 <div className="w-full sm:w-1/2 lg:w-1/2 px-4 mt-8">
//                   <label htmlFor="location" className="text-lg font-medium">Pick-up Location</label>
//                   <select id="location" className="w-full h-14 text-sm bg-gray-200 rounded-xl p-4 mt-2">
//                     <option value="Select your location">Select your location</option>
//                     <option value="Gulshan">Gulshan</option>
//                     <option value="P.E.C.H.S">P.E.C.H.S</option>
//                     <option value="Saddar">Saddar</option>
//                   </select>
//                 </div>
//                 <div className="w-full sm:w-1/2 lg:w-1/2 px-4 mt-6">
//                   <label htmlFor="date" className="text-lg font-medium">Date</label>
//                   <select id="date" className="w-full h-14 text-sm bg-gray-200 rounded-xl p-4 mt-2">
//                     <option value="Select your date">Select your date</option>
//                     <option value="25-January-2025">25-January-2025</option>
//                     <option value="27-January-2025">27-January-2025</option>
//                     <option value="28-January-2025">28-January-2025</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="w-full bg-white p-4 mt-8">
//                 <div className="flex justify-between items-center">
//                   <div className="flex flex-col">
//                     <h1 className="text-2xl font-bold">Payment Method</h1>
//                     <p className="text-sm text-gray-600">Please enter your payment method</p>
//                   </div>
//                   <p className="text-sm text-gray-600">Step 3 of 4</p>
//                 </div>
//                 <div className="w-full px-4 mt-8">
//                   <div className="flex items-center">
//                     <Image src={Visa} alt="visa img" className="w-24 h-6" />
//                     <div className="ml-4">
//                       <label htmlFor="cardNumber" className="text-lg font-medium">Card Number</label>
//                       <input type="text" id="cardNumber" className="w-full h-14 text-sm bg-white rounded-xl p-4 mt-2" placeholder="Card number" />
//                     </div>
//                   </div>
//                   <div className="flex items-center mt-6">
//                     <Image src={PayPal} alt="paypal" className="w-56 h-14" />
//                     <Image src={Bitcoin} alt="bitcoin" className="w-56 h-14 ml-4" />
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full bg-white p-4 mt-8">
//                 <div className="flex justify-between items-center">
//                   <div className="flex flex-col">
//                     <h1 className="text-2xl font-bold">Confirmation</h1>
//                     <p className="text-sm text-gray-600">We are getting to the end. Just a few clicks and your rental is ready!</p>
//                   </div>
//                   <p className="text-sm text-gray-600">Step 4 of 4</p>
//                 </div>
//                 <div className="mt-8">
//                   <div className="w-full flex items-center mt-4">
//                     <Image src={Ceklist} alt="checklist" className="w-6 h-6 mr-4" />
//                     <p className="text-sm text-gray-600">I agree with sending marketing and newsletter emails. No spam, promised!</p>
//                   </div>
//                   <div className="w-full flex items-center mt-4">
//                     <Image src={security} alt="security" className="w-6 h-6 mr-4" />
//                     <p className="text-sm text-gray-600">I agree with our <Link href="/" className="text-blue-500">Terms & Conditions</Link>.</p>
//                   </div>
//                 </div>
//                 <div className="w-full flex justify-between items-center mt-8">
//                   <div className="text-lg font-semibold">{car.name} Rental</div>
//                   <div className="flex flex-col sm:flex-row lg:flex-row items-center text-right">
//                     <div className="text-xl font-semibold">${car.price_per_day}</div>
//                     <div className="ml-4 flex items-center">
//                       <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Proceed</button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full sm:w-1/3 lg:w-1/3 mt-8 sm:mt-0 lg:mt-0">
//               <Image src={card1} alt="card" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CarPage;
