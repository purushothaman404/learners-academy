import React from "react";

export default function ActivetyPros() {
  const activety = [
    {
      name: "student-reg",
      src: "/MaskGroup4.svg",
      alt: "Interactive sessions",
      head: "Interactive sessions ",
      detail: "Ask questions, get your doubts cleared",
    },
    {
      name: "staff-reg",
      src: "/MaskGroup3.svg",
      alt: "Don't stop with classes",
      head: "Don't stop with classes",
      detail: "mock tests and lecture notes shared as PDFs for your revision",
    },
    {
      name: "demo-reg",
      src: "/MaskGroup5.svg",
      alt: "Learn at comfort ",
      head: "Learn at comfort ",
      detail: "How about getting a A+ by learning at home ?",
    },
  ];

  return { activety };
}
