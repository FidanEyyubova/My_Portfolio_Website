import React from "react";
import { education2 } from "../constants";

const Education2 = () => {
  return (
    <section className="py-16 px-6 sm:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
          My Education
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {education2.map((item, index) => (
            <div
              key={index}
              className="relative h-[203px] aspect-[1.579] rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 ease-in bg-gradient-to-br from-[#dce4ff] to-[#eef1ff] hover:rotate-[1deg] hover:scale-110 hover:[transform:rotateY(10deg)] hover:shadow-[0_5em_2em_rgba(50,50,120,0.4)]"
            >
              {/* rotating highlight */}
              <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-[linear-gradient(115deg,rgba(80,80,160,0.25)_12%,rgba(255,255,255,0.33)_27%,rgba(255,255,255,0.33)_31%,rgba(80,80,160,0.25)_52%)] overflow-hidden before:content-[''] before:absolute before:h-[50em] before:aspect-[1.58] before:rounded-xl before:bg-[linear-gradient(115deg,rgba(70,80,200,1)_42%,rgba(255,255,255,1)_47%,rgba(255,255,255,1)_51%,rgba(70,80,200,1)_52%)] before:opacity-0 hover:before:opacity-[0.08] hover:before:animate-[rotate_4s_linear_infinite] before:z-[1]">
                <div className="relative h-[12.5em] aspect-[1.586] rounded-xl bg-gradient-to-r from-[#8da8ff] via-[#b5c3ff] to-[#d1dbff] opacity-80 border border-[#cdd5ff]">
                  <div className="absolute inset-0 rounded-lg border border-[#cdd5ff] bg-gradient-to-br from-[#aebeff]/50 to-[#bfcaff]/70 box-border">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[12em] aspect-[1.604] rounded-lg border border-[#aaa] shadow-[ -1px_-1px_0_#ddd] bg-gradient-to-r from-[#9eb3ff] via-[#c0ceff] to-[#d1dbff] flex flex-col items-start justify-start p-4 text-white/85">
                      <p className="text-lg font-semibold text-[#eaf1ff] drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                        {item.title}
                      </p>
                      <p className="text-xs text-[#ffffffaa] mt-[-4px] self-end mr-4">
                        Education
                      </p>
                      <p className="text-sm text-[#dfe7ff] mt-auto mb-1">
                        {item.institution}
                      </p>
                      <p className="text-[13px] text-gray-200 opacity-90 leading-snug">
                        {item.description}
                      </p>
                      <p className="text-xs text-gray-300 mt-1">{item.year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom keyframes in Tailwind */}
      <style>
        {`
          @keyframes rotate {
            0% { transform: translate(-25em, -15em); }
            20% { transform: translate(25em, 15em); }
            100% { transform: translate(25em, 15em); }
          }
        `}
      </style>
    </section>
  );
};

export default Education2;
