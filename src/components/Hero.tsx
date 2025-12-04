'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power3.out',
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        ease: 'power3.out',
      });

      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1.2,
        delay: 0.4,
        ease: 'power3.out',
      });

      // Parallax scroll effect
      gsap.to(heroRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 200,
        opacity: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50 to-primary-100 pt-16 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
            >
              Discover Your Next Great Read
            </h1>
            <p
              ref={subtitleRef}
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
            >
              Explore thousands of ebooks across all genres. Your digital library awaits with endless stories and knowledge.
            </p>
            <div ref={buttonRef} className="flex gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Books
              </button>
              <button className="px-8 py-4 bg-white text-primary-500 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-all hover:scale-105 shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Book stack illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-80">
                  {/* Book 1 */}
                  <div className="absolute bottom-0 left-0 w-48 h-64 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="p-6">
                      <div className="w-full h-3 bg-white/30 rounded mb-3"></div>
                      <div className="w-3/4 h-3 bg-white/30 rounded mb-3"></div>
                      <div className="w-1/2 h-3 bg-white/30 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Book 2 */}
                  <div className="absolute bottom-4 right-0 w-48 h-64 bg-gradient-to-br from-accent-300 to-accent-400 rounded-lg shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <div className="p-6">
                      <div className="w-full h-3 bg-white/40 rounded mb-3"></div>
                      <div className="w-3/4 h-3 bg-white/40 rounded mb-3"></div>
                      <div className="w-1/2 h-3 bg-white/40 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Book 3 */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-64 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300">
                    <div className="p-6">
                      <div className="w-full h-3 bg-white/30 rounded mb-3"></div>
                      <div className="w-3/4 h-3 bg-white/30 rounded mb-3"></div>
                      <div className="w-1/2 h-3 bg-white/30 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
