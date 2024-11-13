"use client"

import PageViewer from "@/components/pageViewer/page";
import s from "./page.module.scss";
import "./global.scss";
import { useRef } from "react";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPageIdx, _currentPageIdx] = useState(0);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);

  const onPrev = () => {
    _currentPageIdx((prevPageIdx) => (prevPageIdx > 0 ? prevPageIdx - 1 : 0));
  };
  const onNext = () => {
    _currentPageIdx((prevPageIdx) =>
      prevPageIdx < 2 ? prevPageIdx + 1 : 2 - 1
    );
  };

  const scrollToPosition = (y: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    scrollToPosition(height * currentPageIdx);
  }, [height, currentPageIdx]);

  return (
    <main ref={scrollContainerRef} className={s._}>
      <PageViewer idx={1} isActive={currentPageIdx == 0} next={onNext} />
      <PageViewer idx={2} isActive={currentPageIdx == 1} prev={onPrev} />
    </main>
  );
}
