import Banner from '@/components/Banner'
import Content from '@/components/Content'
import PreFoot from '@/components/PreFoot'
import Footer from '@/components/Footer'

import Navbar from '@/components/Navbar'
import Image from 'next/image'


export default function Home() {
  
  return (
    <main className='overflow-hidden bg-black'>
<Navbar/>
<Banner/>
<Content/>
<PreFoot/>
<Footer/>
    </main>
  )
}
