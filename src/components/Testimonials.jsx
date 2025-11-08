import { Profiler } from "react"
import { useState } from "react"
import TestimonialBox from "./TestimonialBox"

const Testimonials = () => {
    const [testData,setTestData]=useState([{id:1,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ipsum voluptas ducimus dolor. Ipsum, optio! A, repudiandae?',
        image:'profile-1.jpg',
        position:'Founder & CEO, Huddle',
        name:'Ahmed'

    },
{id:2,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ipsum voluptas ducimus dolor. Ipsum, optio! A, repudiandae?',
        image:'profile-2.jpg',
        position:'Founder & CEO, Huddle',
        name:'Mohamed'

    },
{id:3,
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit.  Ipsum voluptas ducimus dolor. Ipsum, optio! A, repudiandae?',
        image:'profile-3.jpg',
        position:'Founder & CEO, Huddle',
        name:'Eman'

    }])
  return (
   <section className="pb-[350px] mt-[100px]">
    <div className="container relative">
        <div className="absolute left-5 top-[-35px]">
            <img src="/src/assets/images/bg-quotes.png" alt="quote" />
         </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {testData.map((item)=>(
                
                   <TestimonialBox key={item.id} 
                    desc={item.desc} 
                    image={item.image}
                    position={item.position}
                    name={item.name}/>)
                )
                }
           
        </div>
    </div>
   </section>
  )
}

export default Testimonials