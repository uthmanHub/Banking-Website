import { FaPhoneAlt } from "react-icons/fa";
import { FaChartColumn } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";

const Features = () => {
  const featureList = [
    {
      id: 1,
      name: "Expenses",
      description:
        "We use an application designed a testing gnose to keep away",
      icon: <SlCalender />,
    },
    {
      id: 2,
      name: "FInance Snapshot",
      description:
        "We use an application designed a testing gnose to keep away",
      icon: <FaChartColumn />,
    },
    {
      id: 3,
      name: "Support 24/24",
      description:
        "We use an application designed a testing gnose to keep away",
      icon: <FaPhoneAlt />,
    },
  ];

  return (
    <section id='feature' className=' bg-color-primary-light'>
      <div className='container py-20'>
        <div className='text-center m-auto mb-20 md:w-1/2'>
          <h4 className='font-bold text-color-secondary mb-4'>Our Feature</h4>
          <h1 className='title'>Easy to manage all your payment by our App</h1>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-12 lg:gap-8 px-4 sm:px-6 lg:px-8'>
          {featureList.map(({ id, name, description, icon }) => (
            <div
              key={id}
              className='border-2 border-solid border-color-gray text-center py-10 px-5 rounded-2xl cursor-pointer hover:bg-color-primary-dark ease-in duration-200'
            >
              <div className='bg-color-secondary inline-block rounded-2xl py-5 px-6'>
                <div className='text-4xl'>{icon}</div>
              </div>
              <h3 className='text-xl font-bold py-4'>{name}</h3>
              <p className='leading-relaxed'>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
