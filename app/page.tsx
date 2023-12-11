import Image from 'next/image'
import Home from '@/components/main/Home'
import Skill from '@/components/main/Skill'
import Projects from '@/components/main/Project'

export default function _Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Home />
        <Skill />
        <Projects />
      </div>
    </main>
  )
}
