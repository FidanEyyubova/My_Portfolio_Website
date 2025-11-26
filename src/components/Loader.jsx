import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as="div"
      center
      className="flex flex-col items-center justify-center mt-25"
    >
      <span
        className="w-12 h-12 rounded-full border-4 border-white/30 border-t-white animate-spin"
        aria-hidden="true"
      ></span>

      <p className="mt-10 text-[14px] font-extrabold text-[#F1F1F1]">
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
