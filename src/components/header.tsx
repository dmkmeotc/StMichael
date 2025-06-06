import Image from 'next/image'

const Header = () => {
    return (
         <div > 
            <div className=' flex w-full justify-center items-center m-0 '>

         <Image
          src="/croos2.png" // place your image inside the /public/images folder
          alt="Holy Celebration"
          width={70}
          height={150}
          className='m-0 p-0'
        />
            </div>  
          <h1 className="church-name">Debre Meheret St. Michael Church</h1>
          <h2 className="church-subname">Ethiopian Orthodox Tewahedo Church</h2>
           <h2 className="page-title">Where faith meets tradition...</h2>
           
   
    </div> 
    
  );
} 
 
export default Header;