import React from 'react';
import Heading from '../Heading/Heading';

import { PiFactory, PiPlant } from 'react-icons/pi';
import { BsTruck } from 'react-icons/bs';
import { SiCodefactor } from 'react-icons/si';

const steps = [
  {
    id: 1,
    number: '1',
    title: 'Sourcing',
    para: 'It is a long established fact that a reader',
    icon: <PiPlant />,
    position: 'lg:mt-44',
  },
  {
    id: 2,
    number: '2',
    title: 'Manufacturing',
    para: 'It is a long established fact that a reader',
    icon: <PiFactory />,
    position: 'lg:mt-0',
  },
  {
    id: 3,
    number: '3',
    title: 'Quality Control',
    para: 'It is a long established fact that a reader',
    icon: <SiCodefactor />,
    position: 'lg:mt-44',
  },
  {
    id: 4,
    number: '4',
    title: 'Logistics',
    para: 'It is a long established fact that a reader',
    icon: <BsTruck />,
    position: 'lg:mt-0',
  },
];

const Process = () => {

  const renderSteps = steps.map((item) => {
    return (
      <div
        key={item.id}
        className={`flex flex-col gap-10 ${item.position}`}
      >
        <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-white bg-zinc-800 text-4xl font-bold text-white outline-[3px] outline-offset-4 outline-dashed outline-zinc-800 shadow-[0_0_0_3px_#27272a]">
          {item.number}
        </span>

        <div className="flex items-start gap-6">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-orange-500 text-3xl text-white">
            {item.icon}
          </span>

          <div>
            <h4 className="text-2xl font-bold text-zinc-900">
              {item.title}
            </h4>

            <p className="mt-3 max-w-[250px] text-base leading-6 text-zinc-600">
              {item.para}
            </p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-20">

        <div className="w-fit mr-auto">
          <Heading highlight="our" heading="Process" />
        </div>

        <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-20 mt-24 lg:min-h-[430px]">
          {renderSteps}
        </div>

      </div>
    </section>
  );
};

export default Process;
