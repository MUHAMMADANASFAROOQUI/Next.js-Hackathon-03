import wallet from "../public/wallet.png";
import car10 from "../public/car10.png";
import chart from "../public/chart.png";
import calender from "../public/calendar.png";
import home from "../public/home.png";
import message from "../public/message.png";
import setting from "../public/setting.png";
import breifcase from "../public/briefcase.png";
import info from "../public/info.png";
import Group from "../public/Group.png";
import Logout from "../public/Logout.png";
import Maps from "../public/Maps.png";
import Look from "../public/Look.png";
import mark from "../public/mark.png";
import CarRental from "../public/CarRental.png";
import image7 from "../public/image7.png";
import image8 from "../public/image8.png";
import Car from "../public/Car.png";
import Car2 from "../public/Car2.png";

import Image from "next/image";

export default function dashboard() {
  return (
    <div>
      <div className=" bg-primary3">
        <div className="flex">
          <div className="bg-white w-[286px] h-[900px]">
            <div className="ml-[12px] mt-[36px] w-[176px] h-[352px]">
              <h1
                className="text-[12px] font-semibold tracking-percent1 opacity-40 ml-[22px]"
                style={{ textEmphasisColor: "#94A7CB" }}
              >
                M A I N M E N U
              </h1>
              <div className="mt-[36px]">
                <div className="flex bg-primary1 pt-[10px] pb-[10px] pl-[20px] pr-[20px] rounded-xl">
                  <Image
                    src={home}
                    alt="tick"
                    className="w-[24px] mt-[3px]  h-[24px]"
                  ></Image>
                  <h1 className="font-medium leading-[150%] tracking-percent1 text-[16px] ml-[10px] text-white mt-[2px] ">
                    Dashboard
                  </h1>
                </div>
              </div>
              <div className="ml-[22px]">
                <div className="flex ">
                  <Image
                    src={car10}
                    alt="tick"
                    className="w-[24px] mt-[25px]  h-[24px]"
                  ></Image>
                  <h1 className="font-medium text-[16px] ml-[10px]  mt-[22px] text-text1 ">
                    Car Rent
                  </h1>
                </div>
                <div className="flex ">
                  <Image
                    src={chart}
                    alt="tick"
                    className="w-[24px] mt-[35px]  h-[24px]"
                  ></Image>
                  <h1 className="font-medium text-[16px] ml-[10px]  mt-[32px] text-text1 ">
                    Insight
                  </h1>
                </div>
                <div className="flex ">
                  <Image
                    src={wallet}
                    alt="tick"
                    className="w-[24px] mt-[35px]  h-[24px]"
                  ></Image>
                  <h1 className="font-medium text-[16px] ml-[10px]  mt-[32px] text-text1 ">
                    Reimburse
                  </h1>
                </div>
                <div className="flex ">
                  <Image
                    src={message}
                    alt="tick"
                    className="w-[24px] mt-[35px]  h-[24px]"
                  ></Image>
                  <h1 className="font-medium text-[16px] ml-[10px]  mt-[32px]  text-text1">
                    Inbox
                  </h1>
                </div>
                <div className="flex ">
                  <Image
                    src={calender}
                    alt="tick"
                    className="w-[24px] mt-[35px]  h-[24px]"
                  ></Image>
                  <h1 className="font-medium text-[16px] ml-[10px]  mt-[32px] text-text1">
                    Calender
                  </h1>
                </div>
              </div>

              <div className="mt-[56px] w-[176px] h-[352px] ml-[22px]">
                <h1
                  className="text-[12px] font-semibold tracking-percent1 opacity-40"
                  style={{ textEmphasisColor: "#94A7CB" }}
                >
                  P R E F E R E N C E S
                </h1>
                <div className="mt-[36px]">
                  <div className="flex ">
                    <Image
                      src={setting}
                      alt="tick"
                      className="w-[24px] mt-[3px]  h-[24px]"
                    ></Image>
                    <h1 className="font-medium text-[16px] ml-[10px]  text-text1">
                      Settings
                    </h1>
                  </div>
                  <div className="flex ">
                    <Image
                      src={info}
                      alt="tick"
                      className="w-[24px] mt-[35px]  h-[24px]"
                    ></Image>
                    <h1 className="font-medium text-[16px] ml-[10px]  mt-[32px] text-text1">
                      Help & Center
                    </h1>
                  </div>
                  <div className="flex ">
                    <Image
                      src={breifcase}
                      alt="tick"
                      className="w-[24px] mt-[35px]  h-[24px]"
                    ></Image>
                    <h1 className="font-medium text-[16px] ml-[10px] w-[140px]  mt-[32px] text-text1">
                      Dark Mode
                    </h1>
                    <Image
                      src={Group}
                      alt="dark-mode"
                      className="w-[68px] h-[34px] mt-[35px] "
                    ></Image>
                  </div>
                </div>

                <Image
                  src={Logout}
                  alt="logout"
                  className="w-[104px] h-[28px] mt-[130px]"
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[534px] h-[836px] ml-[28px] mr-[28px] mt-[32px] mb-[32px] bg-white">
            <h1 className="text-[20px] font-bold leading-[150%] tracking-percent mt-[24px] ml-[24px]">
              Details Rental
            </h1>
            <Image
              src={Maps}
              alt="maps"
              className="w-[486px] h-[272px] mt-[24px] ml-[24px]"
            ></Image>

            <div className="flex">
              <Image
                src={Look}
                alt="car-small"
                className="w-[132px] h-[72px] ml-[24px] mt-[24px]"
              ></Image>
              <div className="flex-1 ml-[16px] mt-[32px]">
                <h1 className="text-[18px] font-bold leading-[150%] tracking-percent">
                  Nissan GT-R
                </h1>
                <h1 className="text-text1 text-[14px]">Sport</h1>
              </div>
              <h1
                className="text-[14px] font-medium leading-[150%] tracking-percent1 mr-[24px] mt-[32px]"
                style={{ textEmphasisColor: "#3D5278" }}
              >
                #9761
              </h1>
            </div>

            <div className="">
              <div className="m-[28px] border-b-2">
                <div className="">
                  <div className="w-[460px] h-[132px] bg-white mr-[20px]">
                    <div className="flex ">
                      <Image
                        src={mark}
                        alt="mark1"
                        className="w-[16px] h-[16px] mt-[24px] mr-[6px]"
                      />
                      <h1 className="text-[16px] leading-[150%] tracking-percent1 font-semibold mt-[19px]">
                        Pick - Up
                      </h1>
                    </div>
                    <div className="w-[486px] h-[48px]  mt-[20px] flex">
                      <div className="w-[170px] h-[48px] border-r-[1px]">
                        <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">
                          Locations
                        </h1>
                        <select
                          name="Select your city"
                          id="0"
                          className="text-[10px] w-[116px] h-[20px] mr-3"
                        >
                          <option value="Kota Semarang">Kota Semarang</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Peshawar">Peshawar</option>
                        </select>
                      </div>
                      <div className="w-[486px] h-[48px] ml-[20px]">
                        <div className="w-[140px] h-[48px] border-r-[1px]">
                          <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">
                            Date
                          </h1>
                          <select
                            name="Select your city"
                            id="0"
                            className="text-[10px] w-[116px] h-[20px]"
                          >
                            <option value="20 July 2022">20 July 2022</option>
                            <option value="8-12-2024">08-12-2024</option>
                            <option value="9-12-2024">09-12-2024</option>
                            <option value="10-12-2024">10-12-2024</option>
                            <option value="12-12-2024">11-12-2024</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-[486px] h-[48px]">
                        <div className="w-[170px] h-[48px]">
                          <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">
                            Time
                          </h1>
                          <select
                            name="Select your city"
                            id="0"
                            className="text-[10px] w-[116px] h-[20px] mr-[10px]"
                          >
                            <option value="07.00">07.00</option>
                            <option value="10:00 am">10:00 am</option>
                            <option value="11:00 am">11:00 am</option>
                            <option value="12:00 pm">12:00 pm</option>
                            <option value="01:00 pm">01:00 pm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-[460px] h-[132px] bg-white  ">
                    <div className="flex">
                      <Image
                        src={mark}
                        alt="mark1"
                        className="w-[16px] h-[16px] mt-[24px] mr-[6px]"
                      />
                      <h1 className="text-[16px] leading-[150%] tracking-percent1 font-semibold mt-[19px]">
                        Drop - Off
                      </h1>
                    </div>
                    <div className="w-[486px] h-[48px]  mt-[20px] flex">
                      <div className="w-[170px] h-[48px] border-r-[1px]">
                        <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">
                          Locations
                        </h1>
                        <select
                          name="Select your city"
                          id="0"
                          className="text-[10px] w-[116px] h-[20px] mr-3"
                        >
                          <option value="Kota Semarang">Kota Semarang</option>
                          <option value="Karachi">Karachi</option>
                          <option value="Lahore">Lahore</option>
                          <option value="Islamabad">Islamabad</option>
                          <option value="Peshawar">Peshawar</option>
                        </select>
                      </div>
                      <div className="w-[486px] h-[48px] ml-[20px]">
                        <div className="w-[140px] h-[48px] border-r-[1px]">
                          <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">
                            Date
                          </h1>
                          <select
                            name="Select your city"
                            id="0"
                            className="text-[10px] w-[116px] h-[20px]"
                          >
                            <option value="20 July 2022">20 July 2022</option>
                            <option value="8-12-2024">08-12-2024</option>
                            <option value="9-12-2024">09-12-2024</option>
                            <option value="10-12-2024">10-12-2024</option>
                            <option value="12-12-2024">11-12-2024</option>
                          </select>
                        </div>
                      </div>
                      <div className="w-[486px] h-[48px]">
                        <div className="w-[170px] h-[48px]">
                          <h1 className="font-bold text-[14px] leading-[150%] tracking-percent1">
                            Time
                          </h1>
                          <select
                            name="Select your city"
                            id="0"
                            className="text-[10px] w-[116px] h-[20px]"
                          >
                            <option value="07.00">07.00</option>
                            <option value="10:00 am">10:00 am</option>
                            <option value="11:00 am">11:00 am</option>
                            <option value="12:00 pm">12:00 pm</option>
                            <option value="01:00 pm">01:00 pm</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex ml-[24px]">
                <div className="">
                  <h1 className="text-[18px] leading-[150%] tracking-percent font-bold">
                    Total Rental Price
                  </h1>
                  <h1 className="text-[14px] leading-[150%] tracking-percent1 font-medium text-text1">
                    Overall price and includes rental discount
                  </h1>
                </div>
                <h1 className="font-bold text-[32px] mt-[4px] ml-[120px]">
                  $80.00
                </h1>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-[32px] mr-[28px]">
              <Image
                src={CarRental}
                alt="car-rental"
                className="w-[527px] h-[324px]"
              ></Image>
              <div className="w-[450px] h-[480px] bg-white mt-[32px]">
                <div className="w-[476px] h-[24px] pl-[24px] pt-[24px] flex">
                  <h1 className="text-[20px] font-bold leading-[150%] tracking-percent ">
                    Recent Transaction
                  </h1>
                  <h1 className="text-[12px] font-medium leading-[200%] text-primary1 ml-[180px]">
                    View All
                  </h1>
                </div>
                <div className="w-[400px] h-[376px] bg-white mt-[70px] pl-[24px]">
                  <div className="w-[400px] h-[70px] bg-white">
                    <div className="flex border-b-2">
                      <div className="w-[132px] h-[70px] mt-[10px]">
                        <Image
                          src={image8}
                          alt="car1-d"
                          className="w-[114px] h-[36px]"
                        ></Image>
                      </div>
                      <div className="w-[108px] h-[56px]">
                        <div className="flex-1">
                          <h1 className="text-[16px] font-bold leading-[150%] tracking-percent">
                            Nissan GT-R
                          </h1>
                          <h1 className="text-text1 text-[12px] mt-[2px] font-medium">
                            Sport Car
                          </h1>
                        </div>
                      </div>
                      <div className="pl-[100px]">
                        <h1 className="text-[12px] font-medium tracking-percent1 text-text1 pl-[20px]">
                          20 July
                        </h1>
                        <h1 className="text-[20px] font-bold tracking-percent leading-[150%]">
                          $80.00
                        </h1>
                      </div>
                    </div>

                    <div className="w-[400px] h-[70px] mt-[20px] bg-white">
                      <div className="flex border-b-2">
                        <div className="w-[132px] h-[70px] mt-[10px]">
                          <Image
                            src={image7}
                            alt="car1-d"
                            className="w-[114px] h-[36px]"
                          ></Image>
                        </div>
                        <div className="w-[108px] h-[56px]">
                          <div className="flex-1">
                            <h1 className="text-[16px] font-bold leading-[150%] tracking-percent">
                              Koegnigsegg
                            </h1>
                            <h1 className="text-text1 text-[12px] mt-[2px] font-medium">
                              Sport Car
                            </h1>
                          </div>
                        </div>
                        <div className="pl-[100px]">
                          <h1 className="text-[12px] font-medium tracking-percent1 text-text1 pl-[20px]">
                            19 July
                          </h1>
                          <h1 className="text-[20px] font-bold tracking-percent leading-[150%]">
                            $99.00
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="w-[400px] h-[70px] mt-[30px] bg-white">
                      <div className="flex border-b-2">
                        <div className="w-[132px] h-[70px] mt-[10px]">
                          <Image
                            src={Car}
                            alt="car1-d"
                            className="w-[114px] h-[36px]"
                          ></Image>
                        </div>
                        <div className="w-[108px] h-[56px]">
                          <div className="flex-1">
                            <h1 className="text-[16px] font-bold leading-[150%] tracking-percent">
                              Rolls - Royce
                            </h1>
                            <h1 className="text-text1 text-[12px] mt-[2px] font-medium">
                              Sport Car
                            </h1>
                          </div>
                        </div>
                        <div className="pl-[100px]">
                          <h1 className="text-[12px] font-medium tracking-percent1 text-text1 pl-[20px]">
                            18 July
                          </h1>
                          <h1 className="text-[20px] font-bold tracking-percent leading-[150%]">
                            $96.00
                          </h1>
                        </div>
                      </div>
                    </div>

                    <div className="w-[400px] h-[70px] mt-[30px] bg-white">
                      <div className="flex">
                        <div className="w-[132px] h-[70px] mt-[10px]">
                          <Image
                            src={Car2}
                            alt="car1-d"
                            className="w-[110px] h-[44px]"
                          ></Image>
                        </div>
                        <div className="w-[108px] h-[56px]">
                          <div className="flex-1">
                            <h1 className="text-[16px] font-bold leading-[150%] tracking-percent">
                              CR - V
                            </h1>
                            <h1 className="text-text1 text-[12px] mt-[2px] font-medium">
                              SUV
                            </h1>
                          </div>
                        </div>
                        <div className="pl-[100px]">
                          <h1 className="text-[12px] font-medium tracking-percent1 text-text1 pl-[20px]">
                            27 July
                          </h1>
                          <h1 className="text-[20px] font-bold tracking-percent leading-[150%]">
                            $80.00
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
