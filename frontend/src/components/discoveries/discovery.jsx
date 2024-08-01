import { StarIcon } from '@heroicons/react/20/solid'

export default function Discovery() {
  return (
    <section className="bg-white px-6 sm:py-4 lg:px-8">
      <figure className="mx-auto max-w-2xl">
      <div className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl lg:max-w-lg">
              <h2 className="text-base font-semibold leading-8 text-indigo-600">Our track record</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                90% Accurate Personal Best Prediction
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our model can predcit the personal bests of throwers within three meters for 90% of throwers. 
              </p>
              {/* <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
                {stats.map((stat) => (
                  <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                    <dt className="text-sm leading-6 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl> */}

                {/* <Link to="/discoveries" className="text-blue-500 hover:text-blue-700 transition font-medium">
                    See our Discoveries
                </Link> */}
            </div>
          </div>
      </figure>
    </section>
  )
}
