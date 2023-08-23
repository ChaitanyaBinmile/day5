
import Line from '../assets/Line 4.png'
function Menu_small() {
  return (
    <div className='flex gap-[20px]  lg:hidden'>
        <p className='text-black font-[18px] w-[40px]' > Menu</p> 
        <div className="flex flex-col gap-[4px] w-[30px]"> 
            <img  src={Line} alt="" />
            <img src={Line} alt="" />
            <img src={Line} alt="" />
        </div>
    </div>
  )
}

export default Menu_small
