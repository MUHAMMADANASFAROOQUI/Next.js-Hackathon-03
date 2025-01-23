"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allcars } from "@/sanity/lib/queries";
import Header from "../components/navbar";
import spesfication from "../public/spesfication.png";
import spesfication2 from "../public/spesfication2.png";
import spesfication3 from "../public/spesfication3.png";

type Car = {
  _id: string;
  id: number;
  name: string;
  type: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: string;
  price_per_day: number;
  image: string;
};

function CategoryClient() {
  const [cars, setCars] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [filters, setFilters] = useState({ type: "", capacity: "", price: "" });

  useEffect(() => {
    const fetchCars = async () => {
      const data = await client.fetch(allcars);
      setCars(data);
      setFilteredCars(data);
    };
    fetchCars();
  }, []);

  const applyFilters = () => {
    let result = cars;

    if (filters.type)
      result = result.filter((car) => car.type === filters.type);
    if (filters.capacity)
      result = result.filter((car) =>
        car.seating_capacity.includes(filters.capacity)
      );
    if (filters.price) {
      const maxPrice = parseFloat(filters.price.replace("$", ""));
      result = result.filter((car) => car.price_per_day <= maxPrice);
    }

    setFilteredCars(result);
  };

  const updateFilter = (key: string, value: string) => {
    setFilters({ ...filters, [key]: value });
    applyFilters();
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="bg-white md:w-[360px] h-auto md:h-[1100px] py-10 px-6">
          <h1 className="text-[20px] font-bold mb-4">Filters</h1>
          <div className="mb-8">
            <h2 className="text-[20px] font-semibold mb-6">Type</h2>
            {[
              "Sport",
              "SUV",
              "Sedan",
              "Electric",
              "Diesel",
              "Hybrid",
              "Hatchback",
            ].map((type) => (
              <button
                key={type}
                className={`block w-full mb-2 py-2 px-4 rounded ${
                  filters.type === type
                    ? "bg-primary1 text-white"
                    : "bg-primary1 text-white"
                }`}
                onClick={() =>
                  updateFilter("type", filters.type === type ? "" : type)
                }
              >
                {type}
              </button>
            ))}
          </div>
          <div className="mb-8">
            <h2 className="text-[20px] font-semibold mb-6">Capacity</h2>
            {["2", "4", "6", "7"].map((capacity) => (
              <button
                key={capacity}
                className={`block w-full mb-2 py-2 px-4 rounded ${
                  filters.capacity === capacity
                    ? "bg-primary1 text-white"
                    : "bg-primary1 text-white"
                }`}
                onClick={() =>
                  updateFilter(
                    "capacity",
                    filters.capacity === capacity ? "" : capacity
                  )
                }
              >
                {capacity} People
              </button>
            ))}
          </div>
          <div>
            <h2 className="text-[20px] font-semibold mb-6">Max Price</h2>
            {["100", "150", "200"].map((price) => (
              <button
                key={price}
                className={`block w-full mb-2 py-2 px-4 rounded ${
                  filters.price === price
                    ? "bg-primary1 text-white"
                    : "bg-primary1 text-white"
                }`}
                onClick={() =>
                  updateFilter(
                    "price",
                    filters.price === price ? "" : `$${price}`
                  )
                }
              >
                Up to ${price}
              </button>
            ))}
          </div>
        </div>

        {/* Car Listing */}
        <div className="w-full bg-[#F3F5F7] p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {filteredCars.length === 0 ? (
              <div>No cars available with the selected filters.</div>
            ) : (
              filteredCars.map((car) => (
                <div
                  key={car.id}
                  className="bg-white rounded-[10px] hover:scale-105 transition-transform p-4"
                >
                  <Link href={`detail-car-rent/${car.id}`}>
                    <h2 className="text-xl font-bold">{car.name}</h2>
                    <p className="opacity-50">{car.type}</p>
                    <Image
                      src={car.image}
                      alt={car.name}
                      className="w-full h-auto mt-4"
                      height={100}
                      width={200}
                    />
                    <div className="grid grid-cols-3 mt-4">
                      <div className="flex items-center">
                        <Image
                          src={spesfication}
                          alt="Fuel"
                          width={20}
                          height={16}
                        />
                        <h1 className="ml-1">{car.fuel_capacity}</h1>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={spesfication2}
                          alt="Transmission"
                          width={20}
                          height={16}
                        />
                        <h1 className="ml-1">{car.transmission}</h1>
                      </div>
                      <div className="flex items-center">
                        <Image
                          src={spesfication3}
                          alt="Seating"
                          width={20}
                          height={16}
                        />
                        <h1 className="ml-1">{car.seating_capacity}</h1>
                      </div>
                    </div>
                  </Link>
                  <div className="flex justify-between items-center mt-4">
                    <h2 className="text-xl font-bold">
                      ${car.price_per_day}/<span className="text-sm">day</span>
                    </h2>
                    <Link
                      href={`/payment/${car.id}`}
                      className="bg-primary1 text-white py-2 px-4 rounded hover:scale-105 transition-transform"
                    >
                      Rent Now
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CategoryClient;
