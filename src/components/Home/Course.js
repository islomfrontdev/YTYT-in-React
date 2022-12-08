import React from "react";

export default function Course() {
  const data = [
    {
      img: "/course1.png",
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      img: "/course1.png",
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      img: "/course1.png",
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      img: "/course1.png",
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      img: "/course1.png",
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
    {
      img: "/course1.png",
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },

    {
      img: "/course1.png",
      title: "Огромное количество практики",
      text: "Более 500 самостоятельных заданий и 20 полноценных больших проектов",
    },
  ];

  return (
    <div className="container">
      <h2 className="text-center">
        Обучение в YtYt – это удобно и результативно
      </h2>
      <div className="row justify-content-center">
        {data.map((item) => (
          <div className="col-12 col-sm-6 col-md-4 col-xl-3">
            <div className="course-box text-center p-2">
              <img src={item.img} />
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
