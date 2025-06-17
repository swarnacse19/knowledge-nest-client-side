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
    description: "Enjoys exploring UI/UX design and writing clean frontend code.",
  },
];

const StudentSpotlight = () => {
  const settings = {
    centerMode: true,
    centerPadding: "160px",
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
  };
  return (
    <div className="mt-16 mb-20 max-w-11/12 mx-auto">
      <h2 className="text-3xl flex items-center gap-3 font-bold justify-center mb-8"><FaGraduationCap color="purple"/> Student Spotlight</h2>
      <Slider {...settings} className="gap-3">
        {spotlightStudents.map((student, idx) => (
          <div key={idx} className="px-4">
            <div
            className="bg-base-300 max-w-4xl shadow-md rounded-2xl p-6 flex flex-col items-center text-center transition hover:shadow-xl"
          >
            <img
              src={student.image}
              alt={student.name}
              className="w-24 mx-auto h-24 rounded-full mb-4 border-4 border-purple-500"
            />
            <h3 className="text-xl font-semibold text-black">{student.name}</h3>
            <p className="text-gray-600 mt-2">{student.description}</p>
          </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default StudentSpotlight;
