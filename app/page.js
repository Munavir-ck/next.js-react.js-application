import Banner from '@/components/Banner'
import Content from '@/components/Content'
import Foot from '@/components/Foot'
import Footer from '@/components/Footer'
import Form from '@/components/Form'
import Navbar from '@/components/Navbar'
import Image from 'next/image'


export default function Home() {
  
  return (
    <main className='overflow-hidden bg-black'>
<Navbar/>
<Banner/>
<Content/>
<Foot/>
<Footer/>
    </main>
  )
}
