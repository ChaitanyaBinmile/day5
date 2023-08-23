
import Icon from './Icon'
import Button from './Button'
import Menu_small from './Menu_small'

function Header() {
  return (
    <div className=' flex justify-between items-center  h-[69px]
    w-screen rounded-md p-[60px] fixed top-0 lg:p-[80px]' >
      <Icon></Icon>

      <Menu_small></Menu_small>

      <div className='hidden gap-5 lg:flex'>
        <Button children='Create a resume' variant='primary' />
        <Button children='Sign In'  variant='secondary' />
      </div>
      
    </div>

  )
}

export default Header
