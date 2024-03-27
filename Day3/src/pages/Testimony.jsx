/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import '../assets/css/Testimony.css';


function Testimony () {
    let message = `Our top customer reviews`;
    return (
      <section className="section-white">
        <br/><br/><br/>
        <p className="heading2">{message}</p>
    <div className="container1">
 
        <div className="row">


                                       
            <div className="col-sm-6 col-md-4">

                  <div className="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" className="team-img" alt="pic" />                   
                      <h3> Emily Johnson</h3>            
                      <div className="team-info"><p> Booked an Enchanted Garden Birthday Bash </p></div>
                      <p>I recently booked EventEuphoria for my daughter's Enchanted Garden themed birthday party, and I couldn't have been happier with the experience. From the initial consultation to the day of the event, Dhrisha and her team were incredibly attentive and professional.  </p>
                  
                     
                      
                  
                </div>
            </div> 
              
            <div className="col-sm-6 col-md-4">

                  <div className="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className="team-img" alt="pic" />
                     
                      <h3>Michael Patel</h3>
                      
                      <div className="team-info"><p>Superhero Extravaganza Birthday Bash</p></div>

                      <p>I recently organized my son's Superhero Extravaganza birthday bash with EventEuphoria, and I have to say, it was a blast! Dhrisha and her team went above and beyond to create an action-packed event that had all the kids feeling like real superheroes. </p>
                  
                      
                      
                  </div>

            </div> 
            <div className="col-sm-6 col-md-4">

                  <div className="team-item">
                  
                      <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className="team-img" alt="pic" />
                     
                      <h3>Sarah Thompson</h3>
                      
                      <div className="team-info"><p>Vintage Tea Party Birthday Bash</p></div>

                      <p>I recently celebrated my milestone birthday with a Vintage Tea Party organized by EventEuphoria, and it was absolutely delightful. Dhrisha and her team captured the elegance and charm of a bygone era with their exquisite décor and attention to detail. </p>
                  
                      
                      
                  </div>

            </div> 
        
        </div> 
    
    </div> 

    </section>
    )
}

export default Testimony;