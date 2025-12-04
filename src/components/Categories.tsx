'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    name: 'Fiction',
    icon: '📚',
    count: '1,234',
    color: 'from-primary-400 to-primary-600',
  },
  {
    name: 'Technology',
    icon: '💻',
    count: '856',
    color: 'from-accent-300 to-accent-400',
  },
  {
    name: 'Business',
    icon: '💼',
    count: '678',
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Self-Help',
    icon: '🌟',
    count: '923',
    color: 'from-primary-600 to-primary-800',
  },
  {
    name: 'Science',
    icon: '🔬',
    count: '545',
    color: 'from-accent-300 to-primary-500',
  },
  {
    name: 'History',
    icon: '🏛️',
    count: '432',
    color: 'from-primary-400 to-primary-700',
  },
];

export default function Categories() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      });

      categoriesRef.current.forEach((category, index) => {
        if (category) {
          gsap.from(category, {
            scrollTrigger: {
              trigger: category,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            opacity: 0,
            scale: 0.8,
            rotation: -10,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="categories"
      className="py-20 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent"
        >
          Browse by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={(el) => {
                categoriesRef.current[index] = el;
              }}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-6 cursor-pointer hover:shadow-2xl transition-all duration-300`}
            >
              <div className="text-center">
                <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {category.name}
                </h3>
                <p className="text-white/80 text-sm">{category.count} books</p>
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
