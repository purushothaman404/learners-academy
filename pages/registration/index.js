import React from "react";
import MainHome from "../../components/Layout/MainHome";
import StudentReg from "../../components/Registration/StudentRegistration";
import StaffReg from "../../components/Registration/StaffRegistration";
import { useRouter } from "next/router";

export default function Registration(props) {
  const route = useRouter();
  return (
    <>
      <MainHome className="homecontainer">
        {route.query?.role === "staff" ? <StaffReg /> : <StudentReg />}
      </MainHome>
    </>
  );
}
