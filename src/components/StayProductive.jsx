const StayProductive = () => {
  return (
    <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
            <div>
                <img src="src/assets/images/illustration-stay-productive.png" alt="stay-productive" />
            </div>
            <div className="text-white">
                <h3 className="font-medium text-[35px] leading-[50px]">
                    Stay productive,
                    <br />
                    wherever you are
                </h3>
           
            <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
                <p className="mb-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nam praesentium incidunt et vel vero. Molestiae non mollitia nostrum nobis, 
                    aliquam quia nulla cupiditate qui cumque iusto nam cum. Quasi, similique.</p>
                         
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nam praesentium incidunt et vel vero. Molestiae non mollitia nostrum nobis, 
                    aliquam quia nulla cupiditate qui cumque iusto nam cum. Quasi, similique.</p>
           
            </div>

            <a href="/" className=" flex items-center gap-[15px] w-fit text-[#67dbda] hover:text-[#42b0d1] border-b-2 border-[#67dbda] border-solid transition-colors duration-200 pb-[5px]">See how Fylo works
            <img src="/src/assets/images/icon-arrow.svg" alt="arrow-img" className="w-s h-s object-contain animate-moveRight"/></a>

          </div>
        </div>
    </section>
  )
}

export default StayProductive