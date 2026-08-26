import React from 'react'

const Hero = ({preHeadig,Heading,Content}) => {
  return (
   <>
      <section className="section-7">
          <div className="hero d-flex align-items-center">
            <div className="container">
              <div className="text-left">
                <span>{preHeadig}</span>
                <h1>{Heading}
                </h1> 
                <p>{Content}
                </p>
              </div>
            </div>
          </div>
        </section>
   </>
  )
}

export default Hero