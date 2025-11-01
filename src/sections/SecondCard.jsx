import React from 'react'

const SecondCard = () => {
  return (
    <div className='cards-wrapper-second'>
        <div className="card-parent">
            <div className="text-part">
            <h1>Try Salesforce for free. No credit card required, no software to install.</h1>
            <div className="btns-wrapper">
                <button>Start free trial</button>
                <button>See Pricing <i class="ri-external-link-fill"></i></button>
            </div>
        </div>
        <div className="img-part">
            <img src="https://wp.sfdcdigital.com/en-in/wp-content/uploads/sites/21/2023/12/php-free-trial-mobile-inr2000-940w.png?resize=768,654" alt="" />
        </div>
        </div>
    </div>
  )
}

export default SecondCard