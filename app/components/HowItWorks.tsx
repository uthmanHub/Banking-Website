const HowItWorks = () => {
  const steps = [
    {
      stepCount: 1,
      stepName: "Expenses",
      stepDescription:
        "We use an application designed a testing gnose to keep away",
    },
    {
      stepCount: 2,
      stepName: "Setup your Profile",
      stepDescription:
        "We use an application designed a testing gnose to keep away",
    },
    {
      stepCount: 3,
      stepName: "Enjoy the feature",
      stepDescription:
        "We use an application designed a testing gnose to keep away",
    },
  ];

  return (
    <section>
      <div className=' py-20'>
        <div className='text-center m-auto mb-20 md:w-1/2'>
          <h4 className='font-bold text-color-secondary mb-4'>How it Works</h4>
          <h1 className='title'>Grow up your money saving</h1>
        </div>

        <div className='flex flex-col item-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-6'>
          {/* card  */}
          {steps.map(({ stepCount, stepName, stepDescription }) => {
            return (
              <div key={stepCount} className='text-center cursor-pointer'>
                <div
                  className={`relative ${
                    stepCount === 2
                      ? "bg-color-secondary"
                      : "bg-color-primary-dark"
                  } inline-block px-6 py-3 rounded-lg cursor-pointer ${
                    stepCount === 2
                      ? ""
                      : "hover:bg-color-secondary ease-in duration-200"
                  }`}
                >
                  <p
                    className={`text-6xl ${
                      stepCount === 3 ? "" : "line line2"
                    } `}
                  >
                    {stepCount}
                  </p>
                </div>

                <h3 className='text-xl font-bold py-4'>{stepName}</h3>
                <p className='leading-relaxed'>{stepDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
