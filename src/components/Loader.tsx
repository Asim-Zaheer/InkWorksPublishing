'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const booksRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          // Hide loader after animation
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: () => setIsLoading(false),
          });
        },
      });

      // Logo animation
      tl.from(logoRef.current, {
        scale: 0,
        rotation: -180,
        duration: 1,
        ease: 'back.out(1.7)',
      });

      // Books floating animation
      tl.from(
        booksRef.current,
        {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );

      // Continuous floating animation for books
      booksRef.current.forEach((book, index) => {
        if (book) {
          gsap.to(book, {
            y: -20,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        }
      });

      // Text animation
      tl.from(
        textRef.current,
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.5'
      );

      // Progress bar animation
      tl.to(
        progressBarRef.current,
        {
          width: '100%',
          duration: 2,
          ease: 'power2.inOut',
        },
        '-=0.8'
      );

      // Pulse animation on logo
      gsap.to(logoRef.current, {
        scale: 1.1,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, loaderRef);

    return () => ctx.revert();
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 flex items-center justify-center"
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-accent-300/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center">
        {/* Logo */}
        <div
          ref={logoRef}
          className="mb-8 inline-block"
        >
          <div className="text-8xl font-bold text-white drop-shadow-2xl">
            InkWorksPublishing
          </div>
        </div>

        {/* Floating Books */}
        <div className="flex justify-center gap-4 mb-8">
          <div
            ref={(el) => {
              booksRef.current[0] = el;
            }}
            className="w-16 h-20 bg-gradient-to-br from-white to-orange-100 rounded-lg shadow-2xl transform -rotate-12"
          >
            <div className="p-2">
              <div className="w-full h-1 bg-primary-400/30 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-primary-400/30 rounded mb-1"></div>
              <div className="w-1/2 h-1 bg-primary-400/30 rounded"></div>
            </div>
          </div>

          <div
            ref={(el) => {
              booksRef.current[1] = el;
            }}
            className="w-16 h-20 bg-gradient-to-br from-accent-200 to-accent-300 rounded-lg shadow-2xl"
          >
            <div className="p-2">
              <div className="w-full h-1 bg-white/40 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-white/40 rounded mb-1"></div>
              <div className="w-1/2 h-1 bg-white/40 rounded"></div>
            </div>
          </div>

          <div
            ref={(el) => {
              booksRef.current[2] = el;
            }}
            className="w-16 h-20 bg-gradient-to-br from-white to-orange-100 rounded-lg shadow-2xl transform rotate-12"
          >
            <div className="p-2">
              <div className="w-full h-1 bg-primary-400/30 rounded mb-1"></div>
              <div className="w-3/4 h-1 bg-primary-400/30 rounded mb-1"></div>
              <div className="w-1/2 h-1 bg-primary-400/30 rounded"></div>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div
          ref={textRef}
          className="mb-6"
        >
          <p className="text-white text-xl font-semibold tracking-wider">
            Loading Your Digital Library
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-white to-accent-200 rounded-full shadow-lg"
              style={{ width: '0%' }}
            ></div>
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center gap-2 mt-6">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}
