import verticalDartBoard from "@/assets/images/verticalDarts.jpg"
import { Link } from 'react-router-dom';


const stats = [
    { id: 1, name: 'Creators on the platform', value: '8,000+' },
    { id: 2, name: 'Flat platform fee', value: '3%' },
    { id: 3, name: 'Uptime guarantee', value: '99.9%' },
    { id: 4, name: 'Paid out to creators', value: '$70M' },
  ]

  
  export default function Discoveries() {
    return (
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
              <h2 className="text-base font-semibold leading-8 text-indigo-600">Our track record</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                90% Accurate Personal Best Prediction
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our model can predcit the personal bests of throwers within three meters for 90% of throwers. 
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
  