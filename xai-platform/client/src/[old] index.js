// import { Inter } from "next/font/google";
// import { useState } from "react";

// import TextHighlighter from "@/components/TextHighlighter";
// import ModelCard from "@/components/ModelCard";
// import { Button } from "flowbite-react";

// const inter = Inter({ subsets: ["latin"] });

// const serverUrl = process.env.SERVER_URL ?? "http://localhost:4000";

// import defaultData from "./data/defaultValues.js";

// export async function getStaticProps() {
//   console.log("Getting static props from", serverUrl);
//   let res;
//   try {
//     res = await fetch(`${serverUrl}/explainer`);
//   } catch (e) {
//     console.log("Error fetching explainer at ", serverUrl);
//     console.log(e);
//     return {
//       props: {
//         data: {
//           error: "Error fetching explainer",
//           defaultData: defaultData,
//         },
//       },
//     };
//   }

//   if (!res?.ok) {
//     console.log("Error fetching explainer at ", serverUrl);
//     console.log(res);
//     return {
//       props: {
//         data: {
//           error: "Error fetching explainer",
//           ...defaultData,
//         },
//       },
//     };
//   }
//   const data = await res.json();

//   return {
//     props: { data },
//   };
// }

// function ExplainerDisplay({ data, showAttributions }) {
//   console.log(data);
//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   if (data.length === 0) {
//     return <div>No data yet</div>;
//   }

//   if (data.error) {
//     data = data.defaultData;
//   }

//   return (
//     <table className="table-auto w-full">
//       <thead className="border-b">
//         <tr>
//           <th>Feature Attributions</th>
//           <th>Details</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((d, i) => {
//           const { tokens, attributions } = d;
//           return (
//             <tr key={`tr-${i}`}>
//               <td>
//                 <TextHighlighter
//                   text={tokens}
//                   fAttribution={attributions}
//                   showAttributions={showAttributions}
//                   key={i}
//                 ></TextHighlighter>
//               </td>
//               <td>
//                 <div className="flex justify-center">
//                   <Button>Details</Button>
//                 </div>
//               </td>
//             </tr>
//           );
//         })}
//       </tbody>
//     </table>
//   );
// }

// export default function Home({ data }) {
//   const [showAttributions, setShowAttributions] = useState(false);

//   return (
//     <main
//       className={`flex min-h-screen min-w-screen flex-col items-center justify-between py-24 ${inter.className}`}
//     >
//       <ModelCard model={data.model}></ModelCard>
//       <label>
//         <input
//           value={showAttributions}
//           type="checkbox"
//           onChange={(e) => setShowAttributions(!showAttributions)}
//         ></input>
//         <span className="p-1">Show Attributions</span>
//       </label>
//       <ExplainerDisplay
//         data={data.data}
//         showAttributions={showAttributions}
//       ></ExplainerDisplay>
//       <div className="flex gap-2">
//         <Button>
//           <a href="/compare">Comparision view</a>
//         </Button>
//         <Button
//           onClick={(e) => {
//             e.preventDefault();
//             console.log("Resetting state");
//             fetch(`${serverUrl}/empty-state`, {
//               method: "POST",
//             }).then((response) => {
//               console.log("State reset");
//               console.log(response);
//               if (response.status !== 200) {
//                 console.log("Error resetting state");
//                 console.log(r);
//                 return;
//               }
//               window.location.reload();
//             });
//           }}
//         >
//           Reset state
//         </Button>
//       </div>
//     </main>
//   );
// }