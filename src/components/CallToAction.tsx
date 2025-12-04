'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [booksCount, setBooksCount] = useState(0);
  const [readersCount, setReadersCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      // Counter animation
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: 'top 80%',
        onEnter: () => {
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            
            // Animate Books Counter
            gsap.to({ value: 0 }, {
              value: 10000,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                setBooksCount(Math.floor(this.targets()[0].value));
              }
            });

            // Animate Readers Counter
            gsap.to({ value: 0 }, {
              value: 50000,
              duration: 2.5,
              ease: 'power2.out',
              onUpdate: function() {
                setReadersCount(Math.floor(this.targets()[0].value));
              }
            });

            // Animate Rating Counter
            gsap.to({ value: 0 }, {
              value: 4.9,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                setRatingCount(Math.floor(this.targets()[0].value * 10) / 10);
              }
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-primary-500 to-primary-700"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Reading Journey Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of readers who have discovered their next favorite book with InkWorksPublishing. Sign up now and get access to our entire collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary-600 rounded-full font-semibold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-primary-800 text-white rounded-full font-semibold hover:bg-primary-900 transition-all hover:scale-105 shadow-xl">
              View Plans
            </button>
          </div>

          <div ref={statsRef} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">
                {booksCount > 0 ? `${(booksCount / 1000).toFixed(0)}K+` : '0'}
              </div>
              <div className="text-white/80">Books Available</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">
                {readersCount > 0 ? `${(readersCount / 1000).toFixed(0)}K+` : '0'}
              </div>
              <div className="text-white/80">Active Readers</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">
                {ratingCount > 0 ? `${ratingCount.toFixed(1)}★` : '0'}
              </div>
              <div className="text-white/80">User Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
