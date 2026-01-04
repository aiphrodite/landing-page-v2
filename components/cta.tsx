'use client';

import { useEffect, useRef, useState } from "react";

function RotatingWords({
  words = ["fast", "reliable", "beautiful"],
  durations = 2500, // number or array of numbers (ms) visible per-word
  fadeDuration = 300, // ms for fade-out transition
}: {
  words?: string[];
  durations?: number | number[];
  fadeDuration?: number;
}) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const holdTimeout = useRef<number | null>(null);
  const fadeTimeout = useRef<number | null>(null);

  const getDuration = (idx: number) => {
    if (Array.isArray(durations)) {
      return durations[idx] ?? durations[durations.length - 1] ?? 2500;
    }
    return durations;
  };

  useEffect(() => {
    // clear any existing timers
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
    }
    if (fadeTimeout.current) {
      clearTimeout(fadeTimeout.current);
    }

    // hold current word for its duration, then trigger fade-out and swap
    holdTimeout.current = window.setTimeout(() => {
      setVisible(false);
      fadeTimeout.current = window.setTimeout(() => {
        setIndex((n) => (n + 1) % words.length);
        setVisible(true);
      }, fadeDuration);
    }, getDuration(index));

    return () => {
      if (holdTimeout.current) clearTimeout(holdTimeout.current);
      if (fadeTimeout.current) clearTimeout(fadeTimeout.current);
    };
  }, [index, words.length, durations, fadeDuration]);

  return (
    <span className="relative inline-block h-6">
      <span
        className={`left-0 top-0 transform transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
        }`}
        key={index}
      >
        {words[index]}
      </span>
    </span>
  );
}


export default function Cta() {
  return (
    <section>
      <div className="w-full bg-aip-orange-melon text-black py-10 px-8 md:py-16 md:px-12 shadow-2xl" data-aos="zoom-y-out">

        <div className="flex flex-col max-w-6xl mx-auto lg:flex-row justify-between items-center">
          <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
            <h3 className="h3 mb-2">Ready to get started?</h3>

            <p className="text-lg opacity-75">
              test{' '}
              <RotatingWords
                words={['anything', 'sentiment', 'ads', 'products', 'movies']}
                durations={[5000, 2000, 2000, 2000, 2000]}
                fadeDuration={300}
              />
              , the smarter way
            </p>
          </div>
          <div>
            <a className="btn bg-aip-orange-bittersweet" href="https://calendly.com/aiphrodite/discover">Book a Discovery Call</a>
          </div>

        </div>

      </div>
    </section>
  )
}