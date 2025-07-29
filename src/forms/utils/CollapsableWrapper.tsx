import { useState, useRef, useEffect, type ReactNode } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

interface IProps {
  open: boolean;
  children: ReactNode;
}

const CollapsibleFormWrapper = ({ open, children }: IProps) => {
  const [isOpen, setIsOpen] = useState(open);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("auto");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "30px");
    }
  }, [isOpen]);

  return (
    <div>
      <div
        // ref={contentRef}
        style={{
          // height: height,
          // overflow: "hidden",
          // transition: "height 0.3s ease",
          position: "relative",
        }}
      >
        <div style={{ position: "absolute", top: "2%", right: 0 }}>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
        </div>
        <div
          ref={contentRef}
          style={{
            height: height,
            overflow: "hidden",
            transition: "height 0.3s ease",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleFormWrapper;
