"use client";
import Spline from "@splinetool/react-spline";
import ClientForm from "./ClientForm";

export default function SplineSection() {
  return (
    <section className="w-full bg-[#E2FBFE] flex justify-center items-center py-8">

          <div className="w-full h-[1000px] rounded-2xl bg-white flex items-center justify-center">
            <Spline
              scene="https://prod.spline.design/KKFTeXzXLr4FrgN9/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
  
    </section>
  );
}


