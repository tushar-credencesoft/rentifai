import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import "./list_car.css";
import axios from "axios";
import { toast } from "react-toastify";

const CarLicensepage = () => {
  const navigate = useNavigate();
  const [uploadedImages, setUploadedImages] = useState([]);
  const [carLicenceSection, setCarLicenceSection] = useState({
    showSection1: true,
    showSection2: false,
    showSection3: false,
    showSection4: false,
  });
  const [resultListOpeningState, setResultListOpeningState] = useState({
    openMakeList: false,
    openModelList: false,
    openCarTypeList: false,
    openFuelTypeList: false,
  });

  const [section2ResultListOpeningState, setSection2ResultListOpeningState] =
    useState({
      openYearsList: false,
      openNoOfSeatsList: false,
    });

  const [showSection3, setShowSection3] = useState(false);
  const [showSection4, setShowSection4] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [hoveredOne, setHoveredOne] = useState(false);
  const [hoveredtwo, setHoveredtwo] = useState(false);
  const [hoveredthree, setHoveredthree] = useState(false);

  // Input fields for section one.
  const [make, setMake] = useState("");
  const [carType, setCarType] = useState("");
  const [model, setModel] = useState("");
  const [fuelType, setFuelType] = useState("");

  // Input fields for section two.
  const [vehicleYear, setVehicleYear] = useState("");
  const [noOfSeats, setNoOfSeats] = useState("");
  const [totalKmDriven, setTotalKmDriven] = useState("");

  const [fetchedMakes, setFetchedMakes] = useState([]);
  const [AllCarTypes, setAllCarTypes] = useState([
    "Sedan",
    "SUV",
    "Truck",
    "Convertible",
    "Coupe",
    "Hatchback",
    "Minivan",
    "Crossover",
    "Electric",
    "Hybrid",
    "Sports Car",
    "Luxury Car",
    "Compact Car",
    "Off-road Vehicle",
    "Pickup Truck",
    "Station Wagon",
    "Van",
    "Classic Car",
    "Microcar",
    "Subcompact Car",
    "Limousine",
    "Race Car",
    "Muscle Car",
    "Estate Car",
    "Compact SUV",
    "Midsize SUV",
    "Full-size SUV",
    "City Car",
    "Supermini",
    "Hot Hatch",
    "Grand Tourer",
    "Supercar",
    "Kit Car",
    "Antique Car",
    "Vintage Car",
    "Targa Top",
    "Compact MPV",
    "Luxury SUV",
    "Rally Car",
    "Compact Pickup Truck",
    "Commercial Vehicle",
    "Armored Car",
    "Emergency Vehicle",
  ]);
  const [searchedCarType, setSearchedCarType] = useState([]);
  const [fetchedModels, setFetchedModels] = useState([]);
  const [vehicleYears, setVehicleYears] = useState([]);
  const [searchedFuelType, setSearchedFuelType] = useState([]);
  const [AllFuelTypes, setAllFuelTypes] = useState([
    "Gasoline",
    "Diesel",
    "Electricity",
    "Hybrid (Gasoline/Electric)",
    "Hydrogen",
    "Compressed Natural Gas (CNG)",
    "Liquefied Petroleum Gas (LPG)",
    "Biofuel",
    "Flex-fuel (E85)",
    "Plug-in Hybrid",
    "Ethanol",
    "Methanol",
    "Biodiesel",
    "Propane",
    "Solar (Solar-powered vehicles)",
    "Petrol",
  ]);

  const fetchMake = async () => {
    if (make.length === 0) {
      setResultListOpeningState((prev) => {
        return { ...prev, openMakeList: false };
      });
    }
    await axios
      .get(
        `https://rentifai-dev-node.coinbitwallet.com/rentifai/feature/car-brand?brand=${make}`
      )
      .then((response) => {
        setFetchedMakes(response?.data?.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchCarType = () => {
    if (carType.length === 0) {
      setResultListOpeningState((prev) => {
        return { ...prev, openCarTypeList: false };
      });
      setSearchedCarType([]);
      return;
    }

    AllCarTypes.map((car, i) => {
      if (car.toLowerCase().startsWith(carType.toLowerCase())) {
        setSearchedCarType((prev) => [...prev, car]);
      }
    });
  };

  const fetchModel = async () => {
    if (model.length > 0 && make.length === 0) {
      return toast.warn(
        "First enter the Car Brand so that you will get all its models."
      );
    }
    if (model.length === 0) {
      setResultListOpeningState((prev) => {
        return { ...prev, openModelList: false };
      });
    }
    // https://rentifai-dev-node.coinbitwallet.com
    await axios
      .get(
        `https://rentifai-dev-node.coinbitwallet.com/rentifai/feature/car-model?brand=${make}&model=${model}`
      )
      .then((response) => {
        setFetchedModels(response?.data?.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const fetchFuelType = () => {
    if (fuelType.length === 0) {
      setResultListOpeningState((prev) => {
        return { ...prev, openFuelTypeList: false };
      });
      setSearchedFuelType([]);
      return;
    }

    AllFuelTypes.map((fuel, i) => {
      if (fuel.toLowerCase().startsWith(fuelType.toLowerCase())) {
        setSearchedFuelType((prev) => [...prev, fuel]);
      }
    });
  };

  useEffect(() => {
    fetchMake();
  }, [make]);

  useEffect(() => {
    fetchCarType();
  }, [carType]);

  useEffect(() => {
    fetchModel();
  }, [model]);

  useEffect(() => {
    fetchFuelType();
  }, [fuelType]);

  // Section2 Details
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [noOfSeatsArray, setNoOfSeatsArray] = useState([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ]);

  const SelectCarYear = () => {
    if (vehicleYear === "") {
      setSection2ResultListOpeningState({
        openYearsList: false,
        openNoOfSeatsList: false,
      });
      setSelectedYears([]);
      return;
    }

    vehicleYears.map((year, i) => {
      if (year.startsWith(vehicleYear)) {
        setSelectedYears((prev) => [...prev, year]);
      }
    });
  };

  const SelectNumberOfSeats = () => {
    if (noOfSeats === "") {
      setSection2ResultListOpeningState((prev) => {
        return { ...prev, openNoOfSeatsList: false };
      });
    }

    noOfSeatsArray.map((seat, i) => {
      if (seat.startsWith(noOfSeats)) {
        setSelectedSeats((prev) => [...prev, seat]);
      }
    });
  };

  useEffect(() => {
    SelectCarYear();
  }, [vehicleYear]);

  useEffect(() => {
    SelectNumberOfSeats();
  }, [noOfSeats]);

  // Section 3 details
  const [yourPrice, setYourPrice] = useState("");
  const [locationDropPrice, setLocationDropPrice] = useState("");
  const [approxDropRange, setApproxDropRange] = useState("");

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  const handleCheckbox2Click = () => {
    setIsChecked2(!isChecked2);
  };

  const handleCheckbox3Click = () => {
    setIsChecked3(!isChecked3);
  };

  const handleCheckbox4Click = () => {
    setIsChecked4(!isChecked4);
  };

  const handleCheckbox5Click = () => {
    setIsChecked5(!isChecked5);
  };

  const handleCheckbox6Click = () => {
    setIsChecked6(!isChecked6);
  };
  // /^-?\d*(\.\d+)?$/: Float Validating Regex
  const handleNextButtonClick = () => {
    if (carLicenceSection.showSection1) {
      if (make.trim() === "") {
        return toast.warn("Please Enter the Car Brand.");
      } else if (model.trim() === "") {
        return toast.warn("Please Enter the Car Model.");
      } else if (carType.trim() === "") {
        return toast.warn("Please Enter the Car Type.");
      } else if (fuelType.trim() === "") {
        return toast.warn("Please Enter the Fuel Type.");
      } else {
        setCarLicenceSection((prev) => {
          return { ...prev, showSection1: false, showSection2: true };
        });
        setResultListOpeningState({
          openMakeList: false,
          openModelList: false,
          openCarTypeList: false,
          openFuelTypeList: false,
        });
      }
    } else if (carLicenceSection.showSection2) {
      if (vehicleYear.trim() === "") {
        return toast.warn("Please enter the vehicle year.");
      } else if (noOfSeats.trim() === "") {
        return toast.warn("Please Enter the number of seats.");
      } else if (totalKmDriven === "") {
        return toast.warn("Please Enter Total K.M. driven.");
      } else if (!/^\d+$/.test(noOfSeats)) {
        return toast.warn("Please Enter Valid No. Of Seats");
      } else if (!/^-?\d*(\.\d+)?$/.test(totalKmDriven)) {
        return toast.warn("Please Enter Valid K.M. driven.");
      } else {
        setCarLicenceSection((prev) => {
          return { ...prev, showSection2: false, showSection3: true };
        });
        setSection2ResultListOpeningState({
          openYearsList: false,
          openNoOfSeatsList: false,
        });
      }
    } else if (carLicenceSection.showSection3) {
      if (yourPrice === "") {
        return toast.warn("Please Enter Your Price.");
      } else if (locationDropPrice === "") {
        return toast.warn("Please Enter Location Drop Price.");
      } else if (approxDropRange === "") {
        return toast.warn("Please Enter Approx Drop Range.");
      } else if (!/^-?\d*(\.\d+)?$/.test(yourPrice)) {
        return toast.warn("Please Enter Valid Price.");
      } else if (!/^-?\d*(\.\d+)?$/.test(locationDropPrice)) {
        return toast.warn("Please Enter Valid Location Drop Price.");
      } else if (!/^-?\d*(\.\d+)?$/.test(approxDropRange)) {
        return toast.warn("Please Enter Valid Approx range.");
      } else {
        setCarLicenceSection((prev) => {
          return { ...prev, showSection3: false, showSection4: true };
        });
      }
    }
  };

  const handelPrevButtonClick = () => {
    if (carLicenceSection.showSection2) {
      setCarLicenceSection((prev) => {
        return { ...prev, showSection2: false, showSection1: true };
      });
    } else if (carLicenceSection.showSection3) {
      setCarLicenceSection((prev) => {
        return { ...prev, showSection3: false, showSection2: true };
      });
    } else if (carLicenceSection.showSection4) {
      setCarLicenceSection((prev) => {
        return { ...prev, showSection4: false, showSection3: true };
      });
    }
  };

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [...uploadedImages];

    for (let i = 0; i < files.length; i++) {
      const imageURL = URL.createObjectURL(files[i]);
      newImages.push({ id: i, src: imageURL });
    }

    setUploadedImages(newImages);
  };

  const removeImage = (id) => {
    const updatedImages = uploadedImages.filter((image) => image.id !== id);
    setUploadedImages(updatedImages);
  };

  return (
    <div className="pb-20 max-md:pb-6">
      <div className="absolute top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>

      <p className="text-center text-[37px] lg:text-[65px] font-Bebas mb-[10px] mt-[20px]">
        LET'S GET STARTED WITH ADDING YOUR{" "}
        <span className="text-[#A64AC9]">CAR</span>{" "}
      </p>

      {carLicenceSection.showSection1 && (
        <>
          {" "}
          <p className="text-center text-[19px] lg:text-[29px] font-bold Poppins">
            What is your car license number
          </p>
          <div className="flex items-center justify-center mt-12">
            <div className="grid grid-cols-1 md:flex gap-5 items-center max-w-md">
              <div className="md:col-span-2 relative">
                <div className="absolute left-0 top-0 bottom-0 bg-[#05518C] w-[70px] justify-center">
                  <img
                    src="/assets/images/starter_page_images/starss.png"
                    alt="Left Image"
                    className="h-10 ml-5"
                  />
                  <p className="text-[#fff] text-center">NZ</p>
                </div>
                <input
                  className={`border border-gray-400 rounded p-4 text-center font-bold text-xl w-full bg-white`}
                  style={{
                    paddingLeft: "calc(1em + 20px)",
                    paddingRight: "calc(1em + 20px)",
                  }}
                />
                <div className="absolute right-0 top-0 bottom-0 bg-[#05518C] w-[50px] flex items-center justify-center">
                  <img
                    src="/assets/images/starter_page_images/feathure.png"
                    alt="Right Image"
                    className="h-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1 mt-4 md:mt-0 flex justify-center">
                <button className="text-white rounded-xl px-[30px] lg:py-[20px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black ">
                  Verify
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-6 justify-center">
            <input
              type="checkbox"
              id="manualCheckbox"
              checked={isChecked2}
              className="hidden"
            />
            <div
              className={`relative h-5 w-5 border border-gray-400 ${
                isChecked2 ? "bg-purple-500" : "white"
              } cursor-pointer`}
              onClick={handleCheckbox2Click}
            >
              {isChecked2 && (
                <svg
                  className="absolute top-0 left-0 w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                ></svg>
              )}
            </div>
            <label htmlFor="manualCheckbox" className="ml-2 text-gray-500">
              Enter your car details manually
            </label>
          </div>
          <div className="flex items-center max-sm:flex-col justify-center mt-12 lg:gap-[259px] gap-[30px]">
            <div className="text-start inline-flex flex-col">
              <label htmlFor="carBrand" className="text-lg font-bold mb-2">
                Car Brand:
              </label>
              <div className="w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex relative">
                <input
                  type="text"
                  id="carBrand"
                  className="rounded-[17px] bg-white border-[1px] border-[#707070] h-[50px] w-[150px] md:w-[250px] lg:w-[300px] text-[20px] px-[18px] pr-8 focus:outline-0"
                  placeholder="Select Make"
                  value={make}
                  onChange={(e) => {
                    setMake(e.target.value.trim());
                    setResultListOpeningState({
                      openMakeList: true,
                      openModelList: false,
                      openCarTypeList: false,
                      openFuelTypeList: false,
                    });
                  }}
                />

                {resultListOpeningState.openMakeList && (
                  <>
                    <ul
                      className={`absolute z-40 p-0.5 max-h-60 h-fit overflow-y-scroll bg-white border border-[#707070] mt-[50px] rounded-lg w-[150px] md:w-[250px] lg:w-[300px]`}
                    >
                      {fetchedMakes.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-purple-500 hover:text-white"
                          onClick={() => {
                            setMake(option.make);
                            setResultListOpeningState((prev) => {
                              return { ...prev, openMakeList: false };
                            });
                            setFetchedMakes([]);
                          }}
                        >
                          {option.make}
                        </li>
                      ))}

                      {fetchedMakes.length === 0 && (
                        <li className="px-4 py-2 text-center">No Make Found</li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>

            <div className="text-start inline-flex flex-col">
              <label htmlFor="carType" className="text-lg font-bold mb-2">
                Car Type:
              </label>
              <div className="w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex relative">
                <input
                  type="text"
                  id="carType"
                  className="rounded-[17px] bg-white border-[1px] border-[#707070] h-[50px] w-[150px] md:w-[250px] lg:w-[300px] text-[20px] px-[18px] pr-8 focus:outline-0"
                  placeholder="Select Type"
                  value={carType}
                  onChange={(e) => {
                    setCarType(e.target.value.trim());
                    setResultListOpeningState({
                      openMakeList: false,
                      openModelList: false,
                      openCarTypeList: true,
                      openFuelTypeList: false,
                    });
                    setSearchedCarType([]);
                  }}
                />

                {resultListOpeningState.openCarTypeList && (
                  <>
                    <ul
                      className={`absolute z-40 p-0.5 max-h-60 h-fit overflow-y-scroll bg-white border border-[#707070] mt-[50px] rounded-lg w-[150px] md:w-[250px] lg:w-[300px]`}
                    >
                      {searchedCarType.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-purple-500 hover:text-white"
                          onClick={() => {
                            setCarType(option);
                            setResultListOpeningState((prev) => {
                              return { ...prev, openCarTypeList: false };
                            });
                          }}
                        >
                          {option}
                        </li>
                      ))}

                      {searchedCarType.length === 0 && (
                        <li className="px-4 py-2">No Make Found</li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center max-sm:flex-col justify-center mt-12 lg:gap-[259px] gap-[30px]">
            <div className=" text-start inline-flex flex-col">
              <label htmlFor="carBrand" className="text-lg font-bold mb-2">
                Model:
              </label>
              <div className="w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex relative">
                <input
                  type="text"
                  id="carModel"
                  className="rounded-[17px] bg-white border-[1px] border-[#707070] h-[50px] w-[150px] md:w-[250px] lg:w-[300px] text-[20px] px-[18px] pr-8 focus:outline-0"
                  placeholder="Select Model"
                  value={model}
                  onChange={(e) => {
                    setModel(e.target.value.trim());
                    setResultListOpeningState({
                      openMakeList: false,
                      openModelList: true,
                      openCarTypeList: false,
                      openFuelTypeList: false,
                    });
                  }}
                />
                {resultListOpeningState.openModelList && (
                  <>
                    <ul
                      className={`absolute z-40 p-0.5 max-h-60 h-fit overflow-y-scroll bg-white border border-[#707070] mt-[50px] rounded-lg w-[150px] md:w-[250px] lg:w-[300px]`}
                    >
                      {fetchedModels.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-purple-500 hover:text-white"
                          onClick={() => {
                            setModel(option.model);
                            setResultListOpeningState((prev) => {
                              return { ...prev, openModelList: false };
                            });
                            setFetchedModels([]);
                            setVehicleYears(option.vehicle_years);
                          }}
                        >
                          {option.model}
                        </li>
                      ))}

                      {fetchedModels.length === 0 && (
                        <li className="px-4 py-2 text-center text-sm">
                          No Model Found Please Manually enter.
                        </li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>
            <div className=" text-start inline-flex flex-col">
              <label htmlFor="carType" className="text-lg font-bold mb-2">
                Fuel Type:
              </label>
              <div className="w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex relative">
                <input
                  type="text"
                  id="carModel"
                  className="rounded-[17px] bg-white border-[1px] border-[#707070] h-[50px] w-[150px] md:w-[250px] lg:w-[300px] text-[20px] px-[18px] pr-8 focus:outline-0"
                  placeholder="Select Model"
                  value={fuelType}
                  onChange={(e) => {
                    setFuelType(e.target.value.trim());
                    setResultListOpeningState({
                      openMakeList: false,
                      openModelList: false,
                      openCarTypeList: false,
                      openFuelTypeList: true,
                    });
                    setSearchedFuelType([]);
                  }}
                />

                {resultListOpeningState.openFuelTypeList && (
                  <>
                    <ul
                      className={`absolute z-40 p-0.5 max-h-60 h-fit overflow-y-scroll bg-white border border-[#707070] mt-[50px] rounded-lg w-[150px] md:w-[250px] lg:w-[300px]`}
                    >
                      {searchedFuelType.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-purple-500 hover:text-white"
                          onClick={() => {
                            setFuelType(option);
                            setResultListOpeningState((prev) => {
                              return { ...prev, openFuelTypeList: false };
                            });
                          }}
                        >
                          {option}
                        </li>
                      ))}

                      {searchedFuelType.length === 0 && (
                        <li className="px-4 py-2 text-center text-sm">
                          No fuel type found please enter manually.
                        </li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="text-center mt-8 mb-6">
            <button
              onClick={handleNextButtonClick}
              className="text-white rounded-xl px-[35px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black"
            >
              Next
            </button>
          </div>
        </>
      )}

      {carLicenceSection.showSection2 && (
        <>
          <p className="text-center text-[37px] lg:text-[65px] font-Bebas mb-[20px] ">
            <span className="text-[#A64AC9]">CAR DETAILS</span>{" "}
          </p>

          <div className="flex items-center justify-center mt-12 xl:gap-[143px] max-md:flex-col gap-[30px] ">
            {/* Year */}
            <div className=" text-start inline-flex flex-col">
              <label
                htmlFor="yearOfManufacture"
                className="text-lg font-bold mb-2"
              >
                Year of Manufacturing:
              </label>
              <div className="w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex">
                <input
                  type="text"
                  id="yearOfManufacture"
                  className="rounded-[17px] bg-white border-[1px] border-[#707070] h-[50px] w-[150px] md:w-[250px] lg:w-[300px] text-[20px] px-[18px] pr-8 focus:outline-0"
                  placeholder="Enter Vehicle Year"
                  value={vehicleYear}
                  onChange={(e) => {
                    setVehicleYear(e.target.value.trim());
                    setSection2ResultListOpeningState({
                      openYearsList: true,
                      openNoOfSeatsList: false,
                    });
                    setSelectedYears([]);
                  }}
                />

                {section2ResultListOpeningState.openYearsList && (
                  <>
                    <ul
                      className={`absolute z-40 p-0.5 max-h-60 h-fit overflow-y-scroll bg-white border border-[#707070] mt-[50px] rounded-lg w-[150px] md:w-[250px] lg:w-[300px]`}
                    >
                      {selectedYears.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-purple-500 hover:text-white"
                          onClick={() => {
                            setVehicleYear(option);
                            setSection2ResultListOpeningState((prev) => {
                              return { ...prev, openYearsList: false };
                            });
                            setSelectedYears([]);
                          }}
                        >
                          {option}
                        </li>
                      ))}

                      {selectedYears.length === 0 && (
                        <li className="px-4 py-2 text-center text-sm">
                          No year found please enter it manually.
                        </li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* No of seats */}
            <div className=" text-start inline-flex flex-col">
              <label htmlFor="carType" className="text-lg font-bold mb-2">
                Number of Seats:
              </label>
              <div className="w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex">
                <input
                  type="text"
                  id="yearOfManufacture"
                  className="rounded-[17px] bg-white border-[1px] border-[#707070] h-[50px] w-[150px] md:w-[250px] lg:w-[300px] text-[20px] px-[18px] pr-8 focus:outline-0"
                  placeholder="Enter no. of seats"
                  value={noOfSeats}
                  onChange={(e) => {
                    setNoOfSeats(e.target.value.trim());
                    setSection2ResultListOpeningState({
                      openYearsList: false,
                      openNoOfSeatsList: true,
                    });
                    setSelectedSeats([]);
                  }}
                />

                {section2ResultListOpeningState.openNoOfSeatsList && (
                  <>
                    <ul
                      className={`absolute z-40 p-0.5 max-h-60 h-fit overflow-y-scroll bg-white border border-[#707070] mt-[50px] rounded-lg w-[150px] md:w-[250px] lg:w-[300px]`}
                    >
                      {selectedSeats.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 cursor-pointer rounded-lg hover:bg-purple-500 hover:text-white"
                          onClick={() => {
                            setNoOfSeats(option);
                            setSection2ResultListOpeningState((prev) => {
                              return { ...prev, openNoOfSeatsList: false };
                            });
                            setSelectedSeats([]);
                          }}
                        >
                          {option}
                        </li>
                      ))}

                      {selectedSeats.length === 0 && (
                        <li className="px-4 py-2 text-center text-sm">
                          Enter number of seats manually.
                        </li>
                      )}
                    </ul>
                  </>
                )}
              </div>
            </div>

            {/* Km Driven */}
            <div className=" text-start inline-flex flex-col">
              <label htmlFor="kmDriven" className="text-lg font-bold mb-2">
                Km Driven:
              </label>
              <div className="w-full me-0 sm:me-4 mb-6 sm:mb-0 inline-flex  ">
                <input
                  type="text"
                  id="kmDriven"
                  value={totalKmDriven}
                  className="rounded-[17px] bg-white border-[1px] border-[#707070] h-[50px] w-full lg:w-[300px] text-[20px] px-[18px] pr-8 focus:outline-0"
                  placeholder="No. of km"
                  onChange={(e) => {
                    setTotalKmDriven(e.target.value.trim());
                    setSection2ResultListOpeningState({
                      openYearsList: false,
                      openNoOfSeatsList: false,
                    });
                  }}
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-center text-[37px] lg:text-[65px] font-Bebas mb-[40px] mt-[50px] text-[#A64AC9]">
              UPLOAD YOUR CARS PHOTOS
            </p>
            <div className="flex items-center justify-center mt-4">
              <div className="text-center">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  className="hidden"
                  id="imageUpload"
                />
                <label
                  htmlFor="imageUpload"
                  className="cursor-pointer rounded-md border-dashed border-2 border-gray-400 p-4"
                >
                  Click to upload images
                </label>
              </div>
            </div>

            {uploadedImages.length > 0 && (
              <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
                  {uploadedImages.map((image) => (
                    <div key={image.id} className="text-center">
                      <div
                        className="border border-black p-2 rounded-md mx-auto"
                        style={{ width: "300px", height: "200px" }}
                      >
                        <img
                          src={image.src}
                          alt={`Uploaded ${image.id}`}
                          className="max-h-full max-w-full mx-auto"
                        />
                        <button
                          className="mt-2 bg-purple-500 text-white px-2 py-1 rounded-md"
                          onClick={() => removeImage(image.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handelPrevButtonClick}
              className="text-white rounded-xl px-[35px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black  md-10"
            >
              Prev
            </button>
            <button
              onClick={handleNextButtonClick}
              className="text-white rounded-xl px-[35px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black  md-10"
            >
              Next
            </button>
          </div>
        </>
      )}

      {carLicenceSection.showSection3 && (
        <>
          <div>
            <p className="text-center text-[37px] lg:text-[65px] font-Bebas mb-[40px] mt-[20px]">
              <span className="text-[#A64AC9]">SETTING YOUR PRICE</span>{" "}
            </p>

            <div className="xl:flex flex flex-col xl:items-center justify-center mt-12 mb-10">
              <div className="flex flex-col md:flex-row md:justify-between md:gap-4 lg:gap-8 ml-[5px] mr-[5px]">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                  <label className="block text-center text-[#A64AC9] font-bold text-[18px] mb-2">
                    Your Price
                  </label>
                  <div className="relative ">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#707070] text-[20px] font-bold">
                      $
                    </span>
                    <input
                      type="text"
                      value={yourPrice}
                      className="pl-10 pr-4 py-[15px] border rounded-lg w-full md:w-auto "
                      placeholder="Enter your price"
                      onChange={(e) => setYourPrice(e.target.value.trim())}
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto mb-4 md:mb-0">
                  <label className="block text-center text-[#A64AC9] font-bold text-[18px] mb-2">
                    Location Drop Price
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#707070] text-[20px] font-bold">
                      $
                    </span>
                    <input
                      type="text"
                      value={locationDropPrice}
                      className="pl-10 pr-4 py-[15px] border rounded-lg w-full md:w-auto"
                      placeholder="Enter drop price"
                      onChange={(e) =>
                        setLocationDropPrice(e.target.value.trim())
                      }
                    />
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <label className="block text-center text-[#A64AC9] font-bold text-[18px] mb-2">
                    Approx. Drop off range
                  </label>
                  <input
                    type="text"
                    value={approxDropRange}
                    className="pl-10 pr-4 py-[15px] border rounded-lg w-full md:w-auto"
                    placeholder="Enter drop off range"
                    onChange={(e) => setApproxDropRange(e.target.value.trim())}
                  />
                </div>
              </div>

              {/* Checkbox Section */}
              <div className="flex items-center mt-10 justify-center">
                <input
                  type="checkbox"
                  id="priceCheckbox"
                  checked={isChecked}
                  className="hidden"
                />
                <div
                  className={`relative h-5 w-5 border border-gray-400 ${
                    isChecked ? "bg-purple-500" : "white"
                  } cursor-pointer`}
                  onClick={handleCheckboxClick}
                >
                  {isChecked && (
                    <svg
                      className="absolute top-0 left-0 w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    ></svg>
                  )}
                </div>
                <label htmlFor="priceCheckbox" className="ml-2 text-[#000]">
                  Let us decide the best price of your car
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handelPrevButtonClick}
              className="text-white rounded-xl px-[35px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black  md-10"
            >
              Prev
            </button>
            <button
              onClick={handleNextButtonClick}
              className="text-white rounded-xl px-[35px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black  md-10"
            >
              Next
            </button>
          </div>
        </>
      )}

      {carLicenceSection.showSection4 && (
        <>
          <div>
            <p className="text-center text-[35px] lg:text-[51px] font-Bebas mb-[10px] mt-[5px] ">
              <span className="text-[#A64AC9]">
                {" "}
                CALENDER AVAILABILITY AND PLANS{" "}
              </span>{" "}
            </p>

            <div className="flex flex-wrap justify-center">
              <div
                className="w-full sm:w-1/2 md:w-1/4 p-4 cursor-pointer"
                onClick={handleCheckbox3Click}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  {hovered && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-20 text-white">
                      <span className="text-[200px] font-extrabold "> + </span>
                    </div>
                  )}

                  <div className="bg-white rounded-lg overflow-hidden border border-gray-400 ">
                    <div className="py-2 border-b-[1px] border-gray-400 mb-[30px]">
                      <p className="text-center font-bold text-[#A64AC9] text-[20px]">
                        Weekly
                      </p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden border border-gray-400 mt-4 ml-1 mr-1 mb-1">
                      <div className="py-1 mb-[150px]">
                        <p className="text-center border-b-[1px] border-gray-400 text-[#A64AC9] font-bold">
                          January 2024
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-between mt-4 ml-2 mr-3 mb-[30px]"
                      onClick={handleCheckbox3Click}
                    >
                      <label
                        for="locationDropOff"
                        className="text-center text-[#A64AC9] font-bold"
                      >
                        Location drop off
                      </label>
                      <div
                        className={`h-5 w-5 border border-gray-400 ${
                          isChecked3 ? "bg-purple-500" : "white"
                        } cursor-pointer`}
                        onClick={handleCheckbox3Click}
                      >
                        {isChecked3 && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          ></svg>
                        )}
                      </div>
                    </div>

                    <div className="p-2 mb-[40px]">
                      <p className="font-bold text-gray-400 border-b-[1px] border-gray-400">
                        Price
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full sm:w-1/2 md:w-1/4 p-4 cursor-pointer"
                onClick={handleCheckbox4Click}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredOne(true)}
                  onMouseLeave={() => setHoveredOne(false)}
                >
                  {hoveredOne && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-20 text-white">
                      <span className="text-[200px] font-extrabold "> + </span>
                    </div>
                  )}

                  <div className="bg-white rounded-lg overflow-hidden border border-gray-400 ">
                    <div className="py-2 border-b-[1px] border-gray-400 mb-[30px]">
                      <p className="text-center font-bold text-[#A64AC9] text-[20px]">
                        Monthly
                      </p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden border border-gray-400 mt-4 ml-1 mr-1 mb-1">
                      <div className="py-1 mb-[150px]">
                        <p className="text-center border-b-[1px] border-gray-400 text-[#A64AC9] font-bold">
                          January 2024
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-between mt-4 ml-2 mr-3 mb-[30px]"
                      onClick={handleCheckbox4Click}
                    >
                      <label
                        for="locationDropOff"
                        className="text-center text-[#A64AC9] font-bold"
                      >
                        Location drop off
                      </label>
                      <div
                        className={`h-5 w-5 border border-gray-400 ${
                          isChecked4 ? "bg-purple-500" : "white"
                        } cursor-pointer`}
                        onClick={handleCheckbox4Click}
                      >
                        {isChecked4 && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          ></svg>
                        )}
                      </div>
                    </div>

                    <div className="p-2 mb-[40px]">
                      <p className="font-bold text-gray-400 border-b-[1px] border-gray-400">
                        Price
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full sm:w-1/2 md:w-1/4 p-4 cursor-pointer"
                onClick={handleCheckbox5Click}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredtwo(true)}
                  onMouseLeave={() => setHoveredtwo(false)}
                >
                  {hoveredtwo && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-20 text-white">
                      <span className="text-[200px] font-extrabold "> + </span>
                    </div>
                  )}
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-400 ">
                    <div className="py-2 border-b-[1px] border-gray-400 mb-[30px]">
                      <p className="text-center font-bold text-[#A64AC9] text-[20px]">
                        Quaterly
                      </p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden border border-gray-400 mt-4 ml-1 mr-1 mb-1">
                      <div className="py-1 mb-[150px]">
                        <p className="text-center border-b-[1px] border-gray-400 text-[#A64AC9] font-bold">
                          January 2024
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-between mt-4 ml-2 mr-3 mb-[30px]"
                      onClick={handleCheckbox5Click}
                    >
                      <label
                        for="locationDropOff"
                        className="text-center text-[#A64AC9] font-bold"
                      >
                        Location drop off
                      </label>
                      <div
                        className={`h-5 w-5 border border-gray-400 ${
                          isChecked5 ? "bg-purple-500" : "white"
                        } cursor-pointer`}
                        onClick={handleCheckbox5Click}
                      >
                        {isChecked5 && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          ></svg>
                        )}
                      </div>
                    </div>

                    <div className="p-2 mb-[40px]">
                      <p className="font-bold text-gray-400 border-b-[1px] border-gray-400">
                        Price
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full sm:w-1/2 md:w-1/4 p-4 cursor-pointer"
                onClick={handleCheckbox6Click}
              >
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredthree(true)}
                  onMouseLeave={() => setHoveredthree(false)}
                >
                  {hoveredthree && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-20 text-white">
                      <span className="text-[200px] font-extrabold "> + </span>
                    </div>
                  )}
                  <div className="bg-white rounded-lg overflow-hidden border border-gray-400 ">
                    <div className="py-2 border-b-[1px] border-gray-400 mb-[30px]">
                      <p className="text-center font-bold text-[#A64AC9] text-[20px]">
                        Yearly
                      </p>
                    </div>

                    <div className="bg-white rounded-lg overflow-hidden border border-gray-400 mt-4 ml-1 mr-1 mb-1">
                      <div className="py-1 mb-[150px]">
                        <p className="text-center border-b-[1px] border-gray-400 text-[#A64AC9] font-bold">
                          January 2024
                        </p>
                      </div>
                    </div>
                    <div
                      className="flex items-center justify-between mt-4 ml-2 mr-3 mb-[30px]"
                      onClick={handleCheckbox6Click}
                    >
                      <label
                        for="locationDropOff"
                        className="text-center text-[#A64AC9] font-bold"
                      >
                        Location drop off
                      </label>
                      <div
                        className={`h-5 w-5 border border-gray-400 ${
                          isChecked6 ? "bg-purple-500" : "white"
                        } cursor-pointer`}
                        onClick={handleCheckbox6Click}
                      >
                        {isChecked6 && (
                          <svg
                            className="w-5 h-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          ></svg>
                        )}
                      </div>
                    </div>

                    <div className="p-2 mb-[40px]">
                      <p className="font-bold text-gray-400 border-b-[1px] border-gray-400">
                        Price
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-[20px] mt-[5px] flex items-center justify-center gap-4">
                <button
                  onClick={handelPrevButtonClick}
                  className="text-white rounded-xl px-[35px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black  md-10"
                >
                  Prev
                </button>
                <button
                  onClick={() =>
                    navigate("/owner-list/dashboard", { state: true })
                  }
                  className="text-white rounded-xl px-[35px] py-[15px] font-bold bg-[#A64AC9] hover:bg-black  md-10"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CarLicensepage;
