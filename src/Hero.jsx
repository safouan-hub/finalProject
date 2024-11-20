import React from 'react'
import { Carousel, Card } from './component/ui/Apple-cards-carousel';
import img4 from './images/image4.jpg'
import img1 from './images/image1.jpg'
import img2 from './images/image2.jpg'
import img3 from './images/image3.jpg'

function Hero() {

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));
  return (
    <div className="w-50  h-50 py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
      Solutions That Matter.
      </h2>
      <Carousel items={cards} />
    </div>
  )
}

export default Hero

const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              
              <img 
                src={img4}
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
   
  const data = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: img4,
      content: <DummyContent />,
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: img3,
      content: <DummyContent />,
    },
    {
      category: "Product",
      title: "Launching the new Apple Vision Pro.",
      src: img2,
      content: <DummyContent />,
    },
   
    {
      category: "Product",
      title: "Maps for your iPhone 15 Pro Max.",
      src: img3,
      content: <DummyContent />,
    },
    {
      category: "iOS",
      title: "Photography just got better.",
      src: img1,
      content: <DummyContent />,
    },
    {
      category: "Hiring",
      title: "Hiring for a Staff Software Engineer",
      src:img1,
      content: <DummyContent />,
    },
  ];