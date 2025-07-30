import { useDemo } from '@/hooks/useSdk'
import { FC } from 'react'

export const Home: FC = () => {
  const { data } = useDemo()

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <h1>Home</h1>
          {data && <p>{data}</p>}
        </div>
      </div>
    </div>
  )
}
