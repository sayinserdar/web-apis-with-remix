import useShare from "~/hooks/useShare";
export default function Share() {
  const { share, isShareable, isSupported } = useShare();
  const handleClick = async () => {
    if (isSupported) {
      const shareData: ShareData = {
        title: "MDN",
        text: "Learn web development on MDN!",
        url: "ps://developer.mozilla.org",
      };
      const res = await share(shareData);
    }
  };

  return (
    <div>
      <div>Share</div>
      {isSupported ? (
        <button onClick={handleClick}>Share</button>
      ) : (
        <div>Not supported</div>
      )}
    </div>
  );
}
