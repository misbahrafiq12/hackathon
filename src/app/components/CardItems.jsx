import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart } from '@fortawesome/free-solid-svg-icons';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import Link from "next/link";

const CardItems = () => {
  return (
    <Card className="w-[304px] h-[420px] gap-0 rounded-tl-[10px] opacity-100 mt-10 ml-10 bg-[#FFFFFF]">
      <CardHeader className="w-[128px] h-[48px] top-[24px] left-[24px] gap-[4px] opacity-[1] font-plusJakartaSans text-[20px] font-bold leading-[25.2px] text-left text-underline-position-[from-font] text-decoration-skip-ink-none ">
      
        <CardTitle>  CR - V</CardTitle>
        <CardDescription className="w-[128px] h-[20px] gap-0 opacity-100 font-plusJakartaSans text-[14px] font-bold leading-[17.64px] text-left text-underline-position-[from-font] text-decoration-skip-ink-none text-[#90A3BF] ;
">
          SUV
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-row gap-4 mt-20 bg-[#FFFFFF] border-0">
  <div className="flex flex-col items-center gap-4">
    {/* Image */}
    <Image
      src="/Car.png"
      alt="car"
      className="w-[248px] h-[100px] shadow-lg"
      width={248}
      height={100}
    />

    {/* Info Text */}
    <div className="flex flex-row w-[256px] h-[24px] gap-[16px] opacity-100 mt-[50px] ">
  <span className="w-[58px] h-[24px] text-center text-[#90A3BF]">80L</span>
  <span className="w-[76px] h-[24px] text-center text-[#90A3BF]">Manual</span>
  <span className="w-[90px] h-[24px] text-center text-[#90A3BF]">6 People</span>
</div>

  </div>
</CardContent>


      <CardFooter className='mt-[20px] gap-x-4 '>
        <div className="w-[128px] h-[44px] top-[320px] left-[24px] gap-[4px] opacity-100">
          <h3 className="w-[128px] h-[44px] gap-0 opacity-100 font-plusJakartaSans text-[20px] font-bold leading-[25.2px] text-left text-underline-position-[from-font] text-decoration-skip-ink-none">
            $ 80.00 <span className="font-plusJakartaSans text-[14px] font-bold leading-[17.64px] text-left text-underline-position-[from-font] text-decoration-skip-ink-none text-[#90A3BF]">/day</span>
          </h3>
        </div>
        <Link href={'/categories'}><Button className="w-[116px] h-[44px] top-[320px] left-[164px] p-[0px_20px] gap-[8px] rounded-l-[4px] opacity-100 bg-[#3563E9] font-plusJakartaSans text-[16px] font-semibold leading-[20.16px] text-center text-underline-position-[from-font] text-decoration-skip-ink-none text-white mb-4" >Rent Now</Button></Link>


      </CardFooter>
    </Card>
  );
};

export default CardItems;
