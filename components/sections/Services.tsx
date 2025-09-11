// import React from 'react'
// import { SERVICES_HEADING, SERVICES_SUBTEXT, SERVICES } from '@/lib/constants'

// const Services = () => {

//   return (
//     <div id="services" className="py-16 bg-secondary">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
//             {SERVICES_HEADING}
//           </h2>
//           <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
//             {SERVICES_SUBTEXT}
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {SERVICES.map((service, index) => (
//             <div key={index} className="bg-card rounded-lg shadow-md overflow-hidden border border-border group hover:shadow-lg transition-all duration-300 relative h-64 hover:bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary">
//               {/* Main content */}
//               <div className="p-6 h-full flex flex-col justify-center group-hover:opacity-0 transition-opacity duration-300 ">
//                 <h3 className="text-xl font-semibold text-card-foreground mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {service.description}
//                 </p>
//               </div>
              
//               {/* Overlay features section */}
//               <div className="absolute inset-0 bg-card p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col hover:bg-gradient-to-br from-brand-primary via-brand-accent to-brand-secondary">
//                 <h3 className="text-lg font-semibold text-card-foreground mb-2">
//                   {service.title}
//                 </h3>
//                 <h4 className="text-sm font-medium text-card-foreground mb-3">
//                   What&apos;s included:
//                 </h4>
//                 <ul className="space-y-2 flex-1 overflow-y-auto">
//                   {service.features.map((feature, i) => (
//                     <li key={i} className="flex items-start">
                     
//                       <span className="text-sm text-primary">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Services