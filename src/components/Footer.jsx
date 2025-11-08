import { useState } from "react"
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";


const Footer = () => {
  const [contact ,setContact] = useState ([
    {icon:'icon-phone.svg', text:'+20121212121'},
    {icon:'icon-email.svg', text:'example@fylo.com'},
  ])

  const [links ,setLinks] = useState (['About us' ,
    'Contact Us',
    'Jobs',
    'Terms',
    'Press',
    'Privacy',
    'Blog'
  ])

  const [socialIcons, setSocialIcons] = useState ([
    'facebook',
    'twitter' ,
    'instagram',
  ])




  return (
    <section className="bg-[#0c1524] pt-80 md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
        <img src="/src/assets/images/logo.svg" alt="log-img"
         className="w-[175px] h-[66px] object-contain"/>
        </a>

        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img src="/src/assets/images/icon-location.svg" alt="loaction-image"
            className="w-[18px] h-[18px] object-contain" />
            <p className="font-normal text-sm tracking-[0.8px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Voluptatum sunt earum accusamus suscipit eaque molestias esse nihil,
                similique quo voluptatem fugiat, alias perferendis.</p>
          </div>

          <div>
            {contact.map((item)=>(
              <div key={item.text} className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0" >
                <img src={`/src/assets/images/${item.icon}`} alt="icon" 
                className="w-[18px] h-[18px] object-contain"/>

                <p>{item.text}</p>

              </div>

              
            ))}

          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5" >
            {links.map((link)=>(
              <li key={link}>
                <a href={`/${link.toLowerCase()}`}
              className="hover:text-[#67dbda] transition-colors duration-200 text-base">{link}</a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((socialIcon)=>(
              <li key={socialIcon}><a href="" className="group">
                    <div className="w-10 h-10 element-center border border-white rounded-full">
                      {socialIcon === 'facebook' ? <FaFacebookF className="group-hover:hover:text-[#67dbda] transition-all duration-200"/>: socialIcon === 'twitter' ?<FaTwitter  className="group-hover:hover:text-[#67dbda] transition-all duration-200"/> : <FaInstagram className="group-hover:hover:text-[#67dbda] transition-all duration-200" />}


                    </div>
                </a>
              </li>
            ))}
          </ul>
       


        </div>
      </div>
    </section>
  )
}

export default Footer