import { useState, useEffect } from "react";

const TextType = ({
  text = [],
  typingSpeed = 100,
  pauseDuration = 1000,
  showCursor = true,
  cursorCharacter = "|",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index === text.length) setIndex(0);

    if (subIndex === text[index]?.length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), pauseDuration);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % text.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, text, typingSpeed, pauseDuration]);

  return (
    <span className="inline-block">
      {`${text[index]?.substring(0, subIndex)}`}
      {showCursor && <span className="animate-pulse">{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
