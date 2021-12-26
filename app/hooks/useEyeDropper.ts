import { useEffect, useRef,useState } from "react";

interface EyeDropperResult {
  sRGBHex: string;
}

interface EyeDropper {
  open(): Promise<EyeDropperResult>;
}

const useEyeDropper = () => {
  const eyeDropperRef = useRef<EyeDropper>(null);
  const [isSupported, setIsSupported] = useState<boolean>(null);
  
  useEffect(() => {
    if (eyeDropperRef.current) {
      setIsSupported(true);
      return;
    } else {
      if (!window.EyeDropper) {
        console.error("Your browser does not support the EyeDropper API");
        setIsSupported(false);
        return;
      }
      eyeDropperRef.current = new EyeDropper();
      setIsSupported(true);
    }
    return () => {};
  }, []);

  const openEyeDropper = async (): string | boolean => {
    try {
      const result = await eyeDropperRef.current.open();
      return result.sRGBHex;
    } catch (err) { 
      console.error(err);
      return false;
    }
  };

  return { openEyeDropper,isSupported };
};
export default useEyeDropper;
