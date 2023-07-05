import React,{useState,useEffect} from 'react';
import {Loader,Card,FormField} from '../components';

const RenderCards =({data,title}) =>{
  if(data?.length>0) {
    return data.map((post) => <Card key={post.id}{...post}/>)
  }
  return(
    <h2 className='text-[#6449ff] mt-5 font-bold uppercase'>{title}</h2>
  )
}

const Home = () => {
  const [loading,setLoading] = useState(false);
  const [allPosts, setAllPost] = useState(null);
  const [searchText, setSearchText] = useState('');


  return (
    <section className='mx-auto max-w-7xl'>
      <div>
        <h1 className='font-extrabold text-[#222328] text-[32px]'>The Showcase</h1>
        <p className='mt-2 text-[#666e75] text-[16px] max-w-[600px]'>Browse through a collection of visually stunning images generated by Dall-E</p>
      </div>
      
      <div className='mt-16'>
        <FormField/>
      </div>

      <div className='mt-10'>
        {loading ? (
          <div className='flex items-center justify-center '><Loader/></div>
        ):(
          <>
            {searchText && (
              <h2 className='font-medium text-[#666e75] text-xl mb-3'>
                Showing results for <span className='text-[222328]'>{searchText}</span>
              </h2>
            )}
            <div className='grid grid-cols-1 gap-3 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 '>
              {searchText ? (
                <RenderCards 
                  data = {[]}
                  title = 'No search results found'
                />
              ):(
                <RenderCards
                  data = {[]}
                  title = 'No posts found'
                />
              )}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Home

