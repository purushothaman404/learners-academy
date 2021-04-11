import React from "react";

export default function CarouselData() {
  const carousel = [
    {
      name: "student-reg",
      src: "/carousal1.jpg",
      alt: "Register Student",
      head: "Are you a student ?",
      detail: "Register and start your learning",
      btn: "Register here",
      routing: ["/registration?role=student", "/registration/student"],
    },
    {
      name: "staff-reg",
      src: "/carousal2.jpg",
      alt: "Register Staff",
      head: "Are you a teacher ?",
      detail: "Start teaching your skills",
      btn: "Register here",
      routing: ["/registration?role=staff", "/registration/staff"],
    },
    {
      name: "demo-reg",
      src: "/carousal4.jpg",
      alt: "Free Demo",
      head: "Free demo",
      detail: "Avail for a free demo by registering here",
      btn: "Register here",
      routing: ["/registration?role=demo", "/registration/demo"],
    },
  ];

  return { carousel };
}
