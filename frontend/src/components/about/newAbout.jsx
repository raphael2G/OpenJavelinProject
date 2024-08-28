import { CloudArrowUpIcon } from '@heroicons/react/20/solid'
import javelinThrowImg1 from "@/assets/images/javelinThrowHorizontal1.avif";

// old, non responsive
// export default function About() {
//   return (

//     <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-32 lg:overflow-visible lg:px-0 rounded-lg">
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {/* <svg
//           aria-hidden="true"
//           className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
//         >
//           <defs>
//             <pattern
//               x="50%"
//               y={-1}
//               id="e813992c-7d03-4cc4-a2bd-151760b470a0"
//               width={200}
//               height={200}
//               patternUnits="userSpaceOnUse"
//             >
//               <path d="M100 200V.5M.5 .5H200" fill="none" />
//             </pattern>
//           </defs>
//           <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
//             <path
//               d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
//               strokeWidth={0}
//             />
//           </svg>
//           <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
//         </svg> */}
//       </div>
//       <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
//         <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
//           <div className="lg:pr-4">
//             <div className="lg:max-w-lg">
//               <p className="text-base font-semibold leading-7 text-indigo-600">About</p>
//               <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">How does one's physical attributes effect their ability to throw the javelin?</h1>
//               <p className="mt-6 text-xl leading-8 text-gray-700">
//                 That's the question we hope to answer, and when we do we'll share it with you. 
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
//           <img
//             alt=""
//             src={javelinThrowImg1}
//             className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
//           />
//         </div>
//         <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
//           <div className="lg:pr-4">
//             <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
//               <p>
//                 When it comes to what makes someone throw the javelin far, it is reasonable to break it down into two 
//                 (perhaps not exclusive) categories: technique and physical attributes. The open javelin projects focusses
//                 on the later; how does one's physical attributes effect their ability to throw the javelin? 
//               </p>
//               <ul role="list" className="mt-8 space-y-8 text-gray-600">
//                 <li className="flex gap-x-3">
//                   <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
//                   <span>
//                     <strong className="font-semibold text-gray-900">Powerful Predictive Models</strong> We're trying to build a powerful,
//                     predictive model which will predict how far one can throw the javelin given their physical attributes. 
//                   </span>
//                 </li>
//                 {/* <li className="flex gap-x-3">
//                   <LockClosedIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
//                   <span>
//                     <strong className="font-semibold text-gray-900">SSL certificates.</strong> Anim aute id magna aliqua
//                     ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
//                   </span>
//                 </li>
//                 <li className="flex gap-x-3">
//                   <ServerIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
//                   <span>
//                     <strong className="font-semibold text-gray-900">Data</strong> We need data, and a lot of it. 
//                   </span>
//                 </li> */}
//               </ul>
//               {/* <p className="mt-8">
//                 Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
//                 fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
//                 adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
//               </p>
//               <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
//               <p className="mt-6">
//                 Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
//                 Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
//                 tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
//                 turpis ipsum eu a sed convallis diam.
//               </p> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-4 py-8 sm:py-12 lg:py-32 lg:overflow-visible lg:px-0 rounded-lg">
      <div className="absolute inset-0 -z-10 overflow-hidden"></div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-sm sm:text-base font-semibold leading-7 text-indigo-600">About</p>
              <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                How does one's physical attributes affect their ability to throw the javelin?
              </h1>
              <p className="mt-4 sm:mt-6 text-base sm:text-xl leading-6 sm:leading-8 text-gray-700">
                That's the question we hope to answer, and when we do we'll share it with you.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start -ml-0 sm:-ml-12 -mt-6 sm:-mt-12 p-6 sm:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src={javelinThrowImg1}
            className="w-full sm:w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-sm sm:text-base leading-6 sm:leading-7 text-gray-700 lg:max-w-lg">
              <p>
                When it comes to what makes someone throw the javelin far, it is reasonable to break it down into two
                (perhaps not exclusive) categories: technique and physical attributes. The open javelin projects focuses
                on the latter; how does one's physical attributes affect their ability to throw the javelin?
              </p>
              <ul role="list" className="mt-8 space-y-6 sm:space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <CloudArrowUpIcon aria-hidden="true" className="mt-1 h-5 w-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Powerful Predictive Models</strong> We're trying to
                    build a powerful, predictive model which will predict how far one can throw the javelin given their
                    physical attributes.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
