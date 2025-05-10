
import { useEffect } from 'react';
import { categories, mocknavdata } from '../assets/mocknavdata'
import HeroImage from '../assets/Images/hero-page.png'
import InfoSection from '../components/infosection';
import CategorySection from '../components/CategorySection';
import { setproducts } from '../redux/productslice';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard  from '../components/productcard';
import Shop from './Shop';



const Home = () => {
   
   const dispatch = useDispatch()
   const products = useSelector(state => state.product)
  
   useEffect(() => {
      dispatch(setproducts(mocknavdata))

   }, [])


  return (
   
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
     <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-0.5 md:space-x-4">
       <div className="w-full md:w-3/12">
        
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">SHOP BY CATEGORIES</div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
             {categories.map((category, index) => (
                  <li key={index} className="flex items-center text-sm font-medium"> 
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>

                       {category}
                  </li>
             ))}
          </ul>
 
         </div>
      


         <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={HeroImage} alt="" className="w-full h-full"/>
            <div className="absolute top-16 left-6">
              
              <h2 className="text-3xl font-bold">WELCOME TO E-SHOPPING</h2>
              <p className="text-lg mt-2.5 font-bold text-gray-800">MILLIONS + PRODUCTS</p>
              <button className="bg-red-600 px-5 py-2 text-white mt-4 hover:bg-red-700 
              transform transition-transform duration-300 hover:scale-105">SHOP NOW</button>
            </div>
         </div>
       </div>
         
       <InfoSection />
       <CategorySection />


       <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.products.slice(0, 5).map(((product) => (
                <ProductCard product={product} />
              )))}
          </div>
        
       </div>

     
       
      <Shop />
      </div>

     
    
  );
};

export default Home;
