import { getRandomColor } from '@/lib/utils'
import { Badge } from './ui/badge'
import Image from 'next/image'

function CourseworkCard() {

  const color = getRandomColor()

  return (
    <>
      <div className={`border rounded-[10px] shadow col-span-1 h-40 bg-gradient-to-r from-slate-50 ${color} p-[4px] flex`}>

        <div className='rounded-[10px] h-full w-[250px] border bg-white'>
        </div>
        <div className='pl-2'>
          <p className='font-bold text-lg text-ellipsis'>heading</p>
          <p className='text-ellipsis text-sm font-light'>desc</p>
          <Badge variant="secondary" className='gap-1 font-light'>
            <Image src="/usersmall.png" alt="badge1" width={12} height={12} />
            Physics HL
          </Badge>
          <Badge variant="secondary" className='gap-1 font-light'>
            <Image src="/clock.png" alt="badge2" width={15} height={15} />
            18 min read
          </Badge>
          <Badge variant="secondary" className='gap-1 font-light'>
            <Image src="/words.png" alt="badge3" width={15} height={15} />
            2334 words
          </Badge>
          <Badge variant="secondary" className='gap-1 font-light'>
            <Image src="/star.png" alt="badge4" width={15} height={15} />
            7/7
          </Badge>
          <Badge variant="secondary" className='gap-1 font-light'>
            <Image src="/language.png" alt="badge5" width={15} height={15} />
            Physics HL
          </Badge>
        </div>
      </div>
    </>
  )
}

export default CourseworkCard
