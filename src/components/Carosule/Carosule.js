import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Project from '../Project/Project'
import {AiFillLeftCircle, AiFillRightCircle} from 'react-icons/ai'
const Carosule = () => {
  const data = [
    {
      project_type: "Frontened",
      project_name:  "🤡 Hulu Clone",
      project_des: " Designed clone of a streaming platform HULU that is fully responsive for every screen size ",
      tech_stack: ["Next.Js","TailwindCss", "Features: Server-side Rendering and Lazy-Loading"]
      
  },
  {
    project_type: "Web Development",
    project_name:  "🎵 Music Player",
    project_des: " Created a Music Player with functionalities like shuffle , replay",
    tech_stack: ["Html", "Css","JavaScript"]
},
    {
        project_type: "Machine Learning",
        project_name: "🎥Movie Recommendation",
        project_des: "Content based Movie recommendation System that recommends movies similar to the movie user likes and analyse the sentiment on the reviews given by user for that movie  ",
        tech_stack: ["Python", "Machine Learning","Html","Css","JavaScript" ]
        
    },
    
    {
        project_type: "Machine Learning",
        project_name:  "🏠House Price Prediction",
        project_des: "This is a machine learning project for prediting the value for house.",
        tech_stack: ["Python", "Machine Learning Algo : Linear Regression"]
        
        
    },
    

  ]

  
  return (
    <Carousel showThumbs={false}
    renderArrowPrev={(clickHandler, hasPrev) => {
        return (
          <div className='relative bottom-[10%] left-[80%]'
            onClick={clickHandler}
          >
            <AiFillLeftCircle className='h-8 w-8 text-gray-500 cursor-pointer' />
          </div>
        );
      }}
      renderArrowNext={(clickHandler, hasNext) => {
        return (
          <div className='relative left-[80%]'
            onClick={clickHandler}
          >
            <AiFillRightCircle  className='h-8 w-8 text-gray-500 cursor-pointer'/>
          </div>
        );
      }}
    
    autoPlay>
    {data.map((d,i)=> <Project project_type={d.project_type} project_name={d.project_name} project_des={d.project_des} 
    tech_stack={d.tech_stack} 
    />)}
</Carousel>
  )
}

export default Carosule