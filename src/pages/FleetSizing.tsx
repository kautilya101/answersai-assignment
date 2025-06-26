import { Frown, Ship } from 'lucide-react'

const FleetSizing = () => {
  return (
    <div className='w-full h-full bg-zinc-900/50 text-white'>
      <div className="flex gap-4 p-6 flex-col h-full">
        <div className="">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <span className=" mr-2"><Ship /></span>
            Fleet Sizing
          </h1>
        </div>
        <div className="flex flex-1 justify-center items-center flex-col gap-4">
          <Frown size={40}/>
          No Data Found
        </div>
      </div>
    </div>
  )
}

export default FleetSizing
