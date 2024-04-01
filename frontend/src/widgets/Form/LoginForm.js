import { useRef, React } from 'react'
import { useRouter } from 'next/router';

//widgets
import Input from './Input'
import Form from './Form'

const LoginForm = ({onClose}) => {
  //define router
  const router = useRouter();

  //submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    try{
      
      const formData = {
        userName: emailRef.current.value,
        password: passwordRef.current.value
      }

      const response = await fetch('http://localhost:5000/api/auth/login' , {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json' },
      })

      const results = await response.json()
      if(results.Exception !== ""){
        alert(results.Exception)
      }

      // Save token to localStorage
      if(results.token){
        localStorage.setItem('token', results.token);
      }

      onClose(false);

      router.push("/dashboard")
    
    }catch(err){
      console.log(console.err);
    }
  }

  //ref variables
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  return (     
              <Form onSubmit={handleSubmit} FormClose={()=>{onClose(false)}} title={'Login'} OverlayClass={'fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'} formClass={'max-w-[600px]'}>
                <Input ref={emailRef} type="email" name="email" ></Input>
                <Input ref={passwordRef} type="password" name="password" placeholder="••••••••"></Input>
                
                  <button type="submit" className="w-full text-white bg-[#438EFF] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 md:py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Login</button>
                  </Form>
         
  )
}

export default LoginForm