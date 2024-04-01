import { useRef, useState ,  React } from 'react'

//widgets
import Input from './Input'
import Form from './Form'

const SignupForm = ({onClose}) => {
  //ref variables
const emailRef = useRef(null);
const passwordRef = useRef(null);
const confirmPassRef = useRef(null);
const nameRef = useRef(null)

//state variables
const [isAgreement, setIsAgreement] = useState(false)

  //submit form
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(passwordRef.current.value !== confirmPassRef.current.value){
      //passwords do not match
      alert("Password do not match");
      return
    }

    try{
      
      const formData = {
        userName: emailRef.current.value,
        password: passwordRef.current.value,
        name: nameRef.current.value
      }

      const response = await fetch('http://localhost:5000/api/auth/signup' , {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json' },
      })

      const results = await response.json()

      if(results.Exception !== ""){
        alert(results.Exception)
      }else{
        alert("Signup was done succesfully");
        onClose(false);
      }
    }catch(err){
      console.log(console.err);
    }
  }

  return (     
              <Form onSubmit={handleSubmit} FormClose={()=>{onClose(false)}} title={'Signup'} OverlayClass={'fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'} formClass={'max-w-[600px]'}>
                <Input ref={emailRef} type="email" placeholder="Enter your Email" name="email" ></Input>
                <Input ref={passwordRef} type="password" name="password" placeholder="••••••••"></Input>
                <Input ref={confirmPassRef} type="password" name = "Confirm Password" placeholder="••••••••"></Input>
                <Input ref={nameRef} type="text" name = "name" placeholder="Enter your name"></Input>

                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input onChange={(e) => { setIsAgreement(e.target.checked) }} id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-[clamp(10px,3vw,14px)]">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button disabled={!isAgreement} type="submit" class="w-full text-white bg-[#438EFF] disabled:cursor-not-allowed hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 md:py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-[#3E5A6B]">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-[clamp(10px,3vw,14px)]">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
                  </Form>
         
  )
}

export default SignupForm