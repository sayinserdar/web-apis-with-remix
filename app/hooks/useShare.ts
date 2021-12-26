import { useEffect, useRef,useState } from "react";
const useShare = () => {
    const shareRef = useRef<boolean | undefined>();
    const [isSupported, setIsSupported] = useState<boolean>(null);

  useEffect(() => {
      if (!navigator.canShare) {
          console.error("Your browser does not support the Share API");
          setIsSupported(false);
          return;
      } else { 
          shareRef.current = navigator.canShare;
          setIsSupported(true);
      }
  }, []);
    
    const share = async (data: ShareData): boolean => {
        if (!shareRef.current) {
            console.error("Your browser does not support the Share API");
            return false;
        } else {
            if (isShareable(data)) {
                try {
                     await navigator.share(data);
                    return true;
                }
                catch (err) {
                    console.error(err);
                    return false;
                }
                
            } else {
                console.error("Can't share this data, check its validity https://developer.mozilla.org/en-US/docs/Web/API/Navigator/canShare ");
                return false;
            }
        }
      
    };
    const isShareable = (data?: ShareData): boolean => { 
        return navigator.canShare(data);
    }

  return { share,isShareable,isSupported };
};

export default useShare;
