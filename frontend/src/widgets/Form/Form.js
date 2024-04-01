import {React} from 'react'

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const Form = ({action,method,onSubmit,title,children,formClass,OverlayClass,FormClose}) => {

  return (
    <section className={`bg-[#10182788] min-w-[100vw] ${OverlayClass??''}`}>
  <div className="flex items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className={`w-full bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700 relative ${formClass??''}`}>
        <section className='top-0 absolute right-0 -translate-y-[50%]'>
            <button onClick={()=>{FormClose()}} className='group hover:border-[#771313] duration-[300ms] hover:bg-[#771313] p-1.5 border border-solid border-[#000000] w-fit aspect-[1/1] flex items-center justify-center rounded-lg'><FontAwesomeIcon className="text-[#771313] group-hover:text-[white] duration-[300ms]" icon={faXmark} /></button>
        </section>
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-[clamp(16px,3vw,32px)] font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  {title ?? 'Title'}
              </h1>
    <form className={`space-y-4 md:space-y-6`} action={action} method={method} onSubmit={onSubmit}>
        {children?? 'Empty Form'}
    </form>
    </div>
      </div>
  </div>
</section>
  )
}

export default Form