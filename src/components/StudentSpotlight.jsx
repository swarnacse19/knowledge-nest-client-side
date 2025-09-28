import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const spotlightStudents = [
  {
    name: "Prema Chowdhury",
    image: "https://i.ibb.co/bjfz1Dv4/student1.jpg",
    description: "A passionate tech blogger and full-stack enthusiast.",
  },
  {
    name: "Shantona Rahman",
    image: "https://i.ibb.co/Qjn8Lb78/student2.jpg",
    description: "Loves to write about AI and Data Science trends.",
  },
  {
    name: "Sumaiya Shrabon",
    image: "https://i.ibb.co/Pz4MMyKD/student3.webp",
    description:
      "Enjoys exploring UI/UX design and writing clean frontend code.",
  },
  {
    name: "Rafia Ahmed",
    image: "https://i.ibb.co.com/g2hWK7s/law4.jpg",
    description: "Machine Learning enthusiast and problem solver.",
  },
  {
    name: "Nadia Hasan",
    image: "https://i.ibb.co.com/yFvQHpZ3/law7.jpg",
    description: "Creative thinker and passionate about web development.",
  },
];

const StudentSpotlight = () => {
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="my-28 px-4 md:px-14 mx-auto text-black">
      <h2 className="text-3xl md:text-4xl flex items-center gap-3 font-bold justify-center mb-12 text-[#773d30]">
        <FaGraduationCap /> Student Spotlight
      </h2>
      <Slider {...settings}>
        {spotlightStudents.map((student, idx) => (
          <div key={idx} className="px-3">
            <div className="shadow-md border bg-[#F4B7A8] border-gray-400 rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-xl h-64">
              <img
                src={student.image}
                alt={student.name}
                className="w-24 h-24 rounded-full mb-4 border-black border-4 object-cover"
              />
              <h3 className="text-lg font-semibold">
                {student.name}
              </h3>
              <p className="mt-2 text-sm">
                {student.description}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentSpotlight;
