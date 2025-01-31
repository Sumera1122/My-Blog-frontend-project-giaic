import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface cardType {
  
  date: string;
  subtitle: string;
  title: string;
  description: string;
  image: string;
  button: string;
  id:number;
}

const cards: cardType[] = [
  {
    
    date: '11.02.2022',
    subtitle: 'culture',
    title: 'The Ultimate Guide to Healthy Eating on a Budget',
    description:
      'Maintaining a healthy diet does not have to cost a fortune. In this guide, we will show you how to make smarter food choices while staying within your budget. Learn how to plan meals, shop smart, and cook delicious, nutritious dishes without overspending.',
    image: '/images/card1.jpg',
    button: 'Read More',
    id:1,
  },
  {
    
    date: '11.02.2022',
    subtitle: 'culture',
    title: 'The Transformative Power of Yoga: Benefits for Mind, Body, and Soul',
    description:
      'Yoga is more than just exercise it is a practice that nurtures your mind, body, and spirit. In this post, discover how yoga can enhance flexibility, reduce stress, and improve overall well being. Whether you are a beginner or an experienced yogi, explore tips for starting your practice and integrating it into your daily routine. From calming your mind to building strength, yoga offers countless benefits that can transform your life, one pose at a time',
    image: '/images/yoga2.jpg',
    button: 'Read More',
    id:2,
  },
  {
    
    date: '11.02.2022',
    subtitle: 'culture',
    title: '10 Quick and Healthy Breakfast Ideas to Kickstart Your Day',
    description:
      'Start your morning with energy and nutrition by trying these 10 quick and healthy breakfast ideas. From smoothie bowls packed with fruits and nutrients to hearty avocado toasts and protein rich overnight oats, these recipes are perfect for busy mornings.',
    image: '/images/breakfast.jpg',
    button: 'Read More',
    id:3,
  },
  {
    
    date: '11.02.2022',
    subtitle: 'culture',
    title: 'Cultivating Positive Mental Health: Simple Habits for a Happier You',
    description:
      'Your mental health is just as important as your physical well being.',
    image: '/images/mentalhealth.jpg',
    button: 'Read More',
    id:4,
  },
];

const Card = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col md:space-y-16 max-sm:space-y-8  max-md:space-y-8'>
        {cards.map((items) => (
          <div key={items.id} className=' flex max-sm:flex-col gap-4'>
            <div className=" flex justify-center items-center">
              <Image src={items.image} alt="image" width={300} height={140} className='max-sm:w-[200px] rounded-lg'/>
            </div>

            <div className="md:flex-1 flex flex-col gap-2 md:w-[90%]">
              <div className='flex gap-2'>
                <h6 className='text-[12px]'>{items.date}</h6>
                <span className='text-[12px]'>{items.subtitle}</span>
              </div>


              <h2 className=' text-[16px] md:text-2xl font-bold'>{items.title}</h2>
              <p className='md:text-[14px] max-sm:text-[10px] max-md:text-[10px]'>{items.description}</p>
              <div className="bg-yellow-300 text-black w-[120px] h-[40px] flex justify-center items-center font-semibold md:p-4 text-[12px] rounded-2xl">
                <Link href={'#'}>{items.button}</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;










