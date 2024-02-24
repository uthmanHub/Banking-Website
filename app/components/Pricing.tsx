"use client";

import { useState } from "react";
import { IoBookmark } from "react-icons/io5";

const Pricing = () => {
  const [flipCard, setFlipCard] = useState(false);

  const handleFlip = () => {
    setFlipCard(!flipCard);
  };

  const pricingData = [
    {
      id: 1,
      frontFace: {
        amount: "20",
        validityPeriod: "/per Month",
        packageName: "Basic",
        packageDescription: "For Beginner wwho want to scale Business Globaly",
        packageBenefits: [
          {
            id: 1,
            icon: <IoBookmark />,
            benefit: "Expense Manageement",
          },
          {
            id: 2,
            icon: <IoBookmark />,
            benefit: "Card Manageement",
          },
          {
            id: 3,
            icon: <IoBookmark />,
            benefit: "Instant Statistics",
          },
          {
            id: 4,
            icon: <IoBookmark />,
            benefit: "Bookmark Function",
          },
          {
            id: 5,
            icon: <IoBookmark />,
            benefit: "Accounting System",
          },
        ],
      },
      backFace: {
        amount: "120",
        validityPeriod: "/per year",
        packageName: "Basic",
        packageDescription: "For Beginner wwho want to scale Business Globaly",
        packageBenefits: [
          {
            id: 1,
            icon: <IoBookmark />,
            benefit: "Expense Manageement",
          },
          {
            id: 2,
            icon: <IoBookmark />,
            benefit: "Card Manageement",
          },
          {
            id: 3,
            icon: <IoBookmark />,
            benefit: "Instant Statistics",
          },
          {
            id: 4,
            icon: <IoBookmark />,
            benefit: "Bookmark Function",
          },
          {
            id: 5,
            icon: <IoBookmark />,
            benefit: "Accounting System",
          },
        ],
      },
    },
    {
      id: 2,
      frontFace: {
        amount: "50",
        validityPeriod: "/per Month",
        packageName: "Standard",
        packageDescription: "For Beginner wwho want to scale Business Globaly",
        packageBenefits: [
          {
            id: 1,
            icon: <IoBookmark />,
            benefit: "Expense Manageement",
          },
          {
            id: 2,
            icon: <IoBookmark />,
            benefit: "Card Manageement",
          },
          {
            id: 3,
            icon: <IoBookmark />,
            benefit: "Instant Statistics",
          },
          {
            id: 4,
            icon: <IoBookmark />,
            benefit: "Bookmark Function",
          },
          {
            id: 5,
            icon: <IoBookmark />,
            benefit: "Accounting System",
          },
        ],
      },
      backFace: {
        amount: "150",
        validityPeriod: "/per Year",
        packageName: "Standard",
        packageDescription: "For Beginner wwho want to scale Business Globaly",
        packageBenefits: [
          {
            id: 1,
            icon: <IoBookmark />,
            benefit: "Expense Manageement",
          },
          {
            id: 2,
            icon: <IoBookmark />,
            benefit: "Card Manageement",
          },
          {
            id: 3,
            icon: <IoBookmark />,
            benefit: "Instant Statistics",
          },
          {
            id: 4,
            icon: <IoBookmark />,
            benefit: "Bookmark Function",
          },
          {
            id: 5,
            icon: <IoBookmark />,
            benefit: "Accounting System",
          },
        ],
      },
    },
    {
      id: 3,
      frontFace: {
        amount: "100",
        validityPeriod: "/per Month",
        packageName: "Premium",
        packageDescription: "For Beginner wwho want to scale Business Globaly",
        packageBenefits: [
          {
            id: 1,
            icon: <IoBookmark />,
            benefit: "Expense Manageement",
          },
          {
            id: 2,
            icon: <IoBookmark />,
            benefit: "Card Manageement",
          },
          {
            id: 3,
            icon: <IoBookmark />,
            benefit: "Instant Statistics",
          },
          {
            id: 4,
            icon: <IoBookmark />,
            benefit: "Bookmark Function",
          },
          {
            id: 5,
            icon: <IoBookmark />,
            benefit: "Accounting System",
          },
        ],
      },
      backFace: {
        amount: "500",
        validityPeriod: "/per Year",
        packageName: "Premium",
        packageDescription: "For Beginner wwho want to scale Business Globaly",
        packageBenefits: [
          {
            id: 1,
            icon: <IoBookmark />,
            benefit: "Expense Manageement",
          },
          {
            id: 2,
            icon: <IoBookmark />,
            benefit: "Card Manageement",
          },
          {
            id: 3,
            icon: <IoBookmark />,
            benefit: "Instant Statistics",
          },
          {
            id: 4,
            icon: <IoBookmark />,
            benefit: "Bookmark Function",
          },
          {
            id: 5,
            icon: <IoBookmark />,
            benefit: "Accounting System",
          },
        ],
      },
    },
  ];

  return (
    <section id='pricing' className='bg-color-primary-light'>
      <div className='container py-20'>
        <div className='text-center m-auto mb-20 md:w-1/2'>
          <h4 className='font-bold text-color-secondary mb-4'>Pricing</h4>
          <h1 className='title'>Get a Reasonable price</h1>
        </div>

        {/* rounded switch button */}
        <div className='flex gap-4 mb-9 justify-center mt-5 items-center  '>
          <p>Bill Monthly</p>
          <label className='cursor-pointer relative inline-block w-20 h-8 rounded-full'>
            <input
              type='checkbox'
              id='toggleBtn'
              className='peer opacity-0 w-0 h-0'
              onChange={handleFlip}
            />
            <span className='absolute top-0 left-0 right-0 bottom-0 bg-color-primary-light border border-solid border-color-gray rounded-full duration-300 before:content-[""] before:absolute before:w-6 before:h-6 before:bottom-1 before:left-1 before:rounded-full before:bg-color-white before:duration-300 peer-checked:before:translate-x-12 peer-checked:before:bg-color-secondary '></span>
          </label>
          <p>Bill Anually</p>
        </div>

        {/* display cards */}
        <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
          {pricingData.map(({ id, frontFace, backFace }) => {
            return (
              <div key={id} className='card relative h-auto w-auto'>
                {/* front-face of the card */}
                <div
                  className={` ${
                    flipCard ? "-rotate-y-180" : ""
                  } front px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full`}
                >
                  <div className='relative'>
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0 ">
                      {frontFace.amount}{" "}
                      <span className='text-sm font-normal tracking-widest '>
                        {frontFace.validityPeriod}
                      </span>
                    </p>
                  </div>

                  <div className='py-10'>
                    <h3 className='text-xl font-bold pb-3 '>
                      {frontFace.packageName}
                    </h3>
                    <p className='leading-relaxed '>
                      {frontFace.packageDescription}
                    </p>
                  </div>

                  <ul className='space-y-4  pb-10 '>
                    {frontFace.packageBenefits.map(({ id, icon, benefit }) => {
                      return (
                        <li key={id} className='flex items-center'>
                          <span
                            className={`inline ${
                              id > 2
                                ? "text-color-gray "
                                : "text-color-secondary"
                            }`}
                          >
                            {icon}
                          </span>
                          <span className='pl-4  '>{benefit}</span>
                        </li>
                      );
                    })}
                  </ul>
                  {<button className='card_btn '>Get Started</button>}
                </div>

                {/* back-face of the card */}
                <div
                  className={` ${
                    flipCard ? "" : "rotate-y-180"
                  }  back  px-7 py-11 rounded-2xl border-2 border-solid border-color-gray h-full w-full absolute top-0 left-0 `}
                >
                  <div className='relative'>
                    <p className="text-6xl pl-2 font-bold before:content-['$'] before:absolute before:text-sm before:top-0 before:left-0 ">
                      {backFace.amount}{" "}
                      <span className='text-sm font-normal tracking-widest '>
                        {backFace.validityPeriod}
                      </span>
                    </p>
                  </div>

                  <div className='py-10'>
                    <h3 className='text-xl font-bold pb-3 '>
                      {backFace.packageName}
                    </h3>
                    <p className='leading-relaxed '>
                      {backFace.packageDescription}
                    </p>
                  </div>

                  <ul className='space-y-4 pb-10 '>
                    {backFace.packageBenefits.map(({ id, icon, benefit }) => {
                      return (
                        <li key={id} className='flex items-center'>
                          <span
                            className={`inline ${
                              id > 2
                                ? "text-color-gray "
                                : "text-color-secondary"
                            }`}
                          >
                            {icon}
                          </span>
                          <span className='pl-4'>{benefit}</span>
                        </li>
                      );
                    })}
                  </ul>
                  <button className='card_btn'>Get Started</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
