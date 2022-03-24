import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";

const Faq = () => {

  return <div>
  <div className="form-tilte">
  <div className="search-input">
  <input type="text" name="searchbar"  placeholder="Search a course"/>
  <div className="icons" style={{marginTop:42}}><AiOutlineSearch/></div>
  <div className="icon2"><AiOutlineBell/></div>
  <div className="for-pepole"> </div>
  </div> 
  </div>;
  <div className="Heading">
    <h1 style={{fontFamily:'Quicksand'}}> FAQ'S</h1>
   </div>
   <div className="input-section"> 
   <input type="text" name="question"  placeholder="Have a question ?"/>
   <div className="icon1"><BsFillCursorFill/></div>
</div>

   <div className="autofill-box"> 
   <h3 style={{fontFamily:'Quicksand'}}> Is my payment safe and secure? </h3>
   <hr/>
   <p> Yes! Your payments are completed secured by RazorPay and all transactions on the app are monitored on manual basis to ensure this fact. </p>

   </div>

   <div className="autofill-box"> 
   <h3 style={{fontFamily:'Quicksand'}}> How to register for a course? </h3>
   <hr/>
   <p> To register a course, simply select it and click on register. It shows the price of the course, if it is not a free course and then takes you to the fee payment portal on clicking 'proceed to pay'. Make the payment, if the course is not free and you are instantly registered with the course.</p>

   </div>

   <div className="autofill-box"> 
   <h3 style={{fontFamily:'Quicksand'}}> Can I teach a course? </h3>
   <hr/>
   <p> Yes! Anyone registered with Upsilon can teach a course. For teaching a paid course, you must fill out your payment details. You will be prompted if you have not done that the first time you offer a paid course. </p>
   </div>  
</div>
};

export default Faq;
