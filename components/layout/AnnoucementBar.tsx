import TallyModalButton from "../TallyForm";

export default function AnnouncementBar() {
  return (
    <div className="
      w-full 
      bg-[#f8f5ef]
      text-black 
      h-12
      flex 
      items-center 
      justify-center 
      gap-3 
      text-center 
      relative 
      z-[60]     
    ">
      

      <TallyModalButton
        id="lbal8W"
        className="
        text-black
          text-sm md:text-base 
          underline 
          underline-offset-4 
          hover:no-underline 
          shadow-none 
          px-0 
          py-0 
          bg-transparent
          hover:bg-transparent
          hover:shadow-none
          hover:cursor-pointer
        "
      >
        
        Take our quick quiz and unlock a discount!
      
      </TallyModalButton>
    </div>
  );
}
