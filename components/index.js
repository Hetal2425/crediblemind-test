// import Head from 'next/head';
// import { signIn, signOut, useSession } from 'next-auth/react';

// export default function Home() {
// //   const [session, loadingSession] = useSession();

// //   if (loadingSession) {
// //     return <p>Loading...</p>;
// //   }

//   return (
//     <div >
//       <Head>
//         <title>NextAuth Google Authentication</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <h1>Google Authentication with NextAuth </h1>
//       <button  onClick={() => signIn()}>
//         Sign In
//       </button>

//       {/* {!session && (
//         <>
//         </>
//       )} */}

//       {/* {session && (
//         <>
//           <h4>You are logged as: {session.user.name}</h4>
//           <div >
//             <h4>Email: {session.user.email}</h4>
//             <br />
//             {session.user.image && (
//               <span>
//                 <img src={session.user.image} alt={session.user.name} />
//               </span>
//             )}
//           </div>
//           <br />
//           <br />
//           <button onClick={() => signOut()}>
//             Sign Out
//           </button>
//         </>
//       )} */}
//     </div>
//   );
// }