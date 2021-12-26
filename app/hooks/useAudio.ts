import { useEffect, useRef } from "react";
const useAudio = () => {
  const audioContextRef = useRef(null);
  useEffect(() => {
    if (audioRef.current) {
      return;
    } else {
      if (!window.AudioContext && !window.webkitAudioContext) {
        console.error("Your browser does not support the Web Audio API");
        return;
      }
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContext();
      audioContextRef.current = audioContext || AudioContext;
    }
    return () => {};
  }, []);

  return { audioContextRef };
};

export default useAudio;
