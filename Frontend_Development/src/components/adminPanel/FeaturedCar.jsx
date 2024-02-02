import React, { useState, useEffect } from "react";

const FeaturedCars = () => {
  // Sample data, replace with your actual user data
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    {
      id: 1,
      name: "John Doe",
      image: "/assets/images/adminPanel/pic-1.jpg",
      email: "john@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Apurba Ray",
      image: "/assets/images/adminPanel/pic-2.jpg",
      email: "abc@gmail.com",
      price: "1000",
      paidStatus: "paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Rekha Baitharu",
      image: "/assets/images/adminPanel/pic-3.jpg",
      email: "def@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Ibtessam Fatma",
      image: "/assets/images/adminPanel/pic-4.jpg",
      email: "ghi@gmail.com",
      price: "1000",
      paidStatus: "paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Amit Satapathy",
      image: "/assets/images/adminPanel/pic-5.jpg",
      email: "jkl@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Not Started",
    },
    {
      id: 2,
      name: "Priyabrata Dash",
      image: "/assets/images/adminPanel/pic-6.jpeg",
      email: "mno@gmail.com",
      price: "1000",
      paidStatus: "not-paid",
      staus: "Pending",
    },
    {
      id: 2,
      name: "Manish Singh",
      image: "/assets/images/adminPanel/pic-7.png",
      email: "pqr@gmail.com",
      price: "1000",
      paidStatus: "not-paid",
      staus: "Pending",
    },
    {
      id: 2,
      name: "Shaktiswarupa Jena",
      image: "/assets/images/adminPanel/pic-8.png",
      email: "stu@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Rajesh Biswal",
      image: "/assets/images/adminPanel/pic-9.jpeg",
      email: "duv@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    {
      id: 2,
      name: "Tushar Doe",
      image: "/assets/images/adminPanel/pic-10.jpg",
      email: "wxy@gmail.com",
      price: "1000",
      paidStatus: "pre-paid",
      staus: "Completed",
    },
    // Add more user data as needed
  ];

  return (
    <div className=" max-h-screen overflow-y-auto scrollbar-hide border border-[#707070]">
        <div className="sticky top-0 left-0 w-full bg-white z-10 p-2 pt-10">
        <h2 className="text-4xl md:text-3xl font-bold text-center mb-4 text-[#A64AC9]">FEATURED CARS</h2>
      </div>
       <div className="mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/Cars/car-2.jpg"
            alt="Mountain"
          />
          <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <div>
              <div>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/petrol.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Petrol
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/manual.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Manual
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/two-seater.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  2 Seater
                </a>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-between">
              <div>
                <h2 className="text-sm font-semibold">$ 250/Day</h2>
              </div>
              <a
                href="#"
                className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  src="/assets/images/Cars/kilometer.png"
                  alt="Mountain"
                  className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                />
                20 KM Driven
              </a>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div>
              <h1 className="text-xl font-semibold text-[#707070]">$ 2500 Total</h1>
              <p className="text-g font-semibold text-[#707070]">Car Rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/Cars/car-3.jpeg"
            alt="River"
          />
           <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <div>
              <div>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/petrol.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Petrol
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/manual.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Manual
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/two-seater.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  2 Seater
                </a>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-between">
              <div>
                <h2 className="text-sm font-semibold">$ 250/Day</h2>
              </div>
              <a
                href="#"
                className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  src="/assets/images/Cars/kilometer.png"
                  alt="Mountain"
                  className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                />
                20 KM Driven
              </a>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div>
              <h1 className="text-xl font-semibold text-[#707070]">$ 2500 Total</h1>
              <p className="text-g font-semibold text-[#707070]">Car Rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/Cars/car-3.jpeg"
            alt="River"
          />
           <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <div>
              <div>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/petrol.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Petrol
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/manual.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Manual
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/two-seater.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  2 Seater
                </a>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-between">
              <div>
                <h2 className="text-sm font-semibold">$ 250/Day</h2>
              </div>
              <a
                href="#"
                className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  src="/assets/images/Cars/kilometer.png"
                  alt="Mountain"
                  className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                />
                20 KM Driven
              </a>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div>
              <h1 className="text-xl font-semibold text-[#707070]">$ 2500 Total</h1>
              <p className="text-g font-semibold text-[#707070]">Car Rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/Cars/car-4.jpeg"
            alt="Forest"
          />
           <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <div>
              <div>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/petrol.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Petrol
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/manual.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Manual
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/two-seater.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  2 Seater
                </a>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-between">
              <div>
                <h2 className="text-sm font-semibold">$ 250/Day</h2>
              </div>
              <a
                href="#"
                className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  src="/assets/images/Cars/kilometer.png"
                  alt="Mountain"
                  className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                />
                20 KM Driven
              </a>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div>
              <h1 className="text-xl font-semibold text-[#707070]">$ 2500 Total</h1>
              <p className="text-g font-semibold text-[#707070]">Car Rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/Cars/car-2.jpg"
            alt="Mountain"
          />
          <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <div>
              <div>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/petrol.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Petrol
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/manual.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Manual
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/two-seater.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  2 Seater
                </a>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-between">
              <div>
                <h2 className="text-sm font-semibold">$ 250/Day</h2>
              </div>
              <a
                href="#"
                className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  src="/assets/images/Cars/kilometer.png"
                  alt="Mountain"
                  className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                />
                20 KM Driven
              </a>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div>
              <h1 className="text-xl font-semibold text-[#707070]">$ 2500 Total</h1>
              <p className="text-g font-semibold text-[#707070]">Car Rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/Cars/car-3.jpeg"
            alt="River"
          />
           <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <div>
              <div>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/petrol.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Petrol
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/manual.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Manual
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/two-seater.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  2 Seater
                </a>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-between">
              <div>
                <h2 className="text-sm font-semibold">$ 250/Day</h2>
              </div>
              <a
                href="#"
                className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  src="/assets/images/Cars/kilometer.png"
                  alt="Mountain"
                  className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                />
                20 KM Driven
              </a>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div>
              <h1 className="text-xl font-semibold text-[#707070]">$ 2500 Total</h1>
              <p className="text-g font-semibold text-[#707070]">Car Rating</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="/assets/images/Cars/car-3.jpeg"
            alt="River"
          />
           <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <div>
              <div>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/petrol.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Petrol
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/manual.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  Manual
                </a>
                <a
                  href="#"
                  className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                >
                  <img
                    src="/assets/images/Cars/two-seater.png"
                    alt="Mountain"
                    className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                  />
                  2 Seater
                </a>
              </div>
            </div>
            <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="flex justify-between">
              <div>
                <h2 className="text-sm font-semibold">$ 250/Day</h2>
              </div>
              <a
                href="#"
                className="inline-flex mr-1 items-center justify-center border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
              >
                <img
                  src="/assets/images/Cars/kilometer.png"
                  alt="Mountain"
                  className="w-4 h-4 me-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                />
                20 KM Driven
              </a>
            </div>
          </div>
          <div className="px-2 pb-2">
            <div>
              <h1 className="text-xl font-semibold text-[#707070]">$ 2500 Total</h1>
              <p className="text-g font-semibold text-[#707070]">Car Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
