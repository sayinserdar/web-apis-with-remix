import useEyeDropper from "~/hooks/useEyeDropper";
import { useState } from "react";
export default function EyeDropper() {
  const { openEyeDropper, isSupported } = useEyeDropper();
  const [color, setColor] = useState<string | null>(null);
  const handleClick = async () => {
    if (isSupported) {
      const res = await openEyeDropper();
      if (res) {
        setColor(res);
      }
    }
  };
  return (
    <div>
      Eye Dropper
      <button onClick={handleClick}>Drop</button>
      <div
        className="w-24 p-4 min-h-12 rounded m-4"
        style={{ backgroundColor: color }}
      >
        Testing colors
      </div>
    </div>
  );
}
