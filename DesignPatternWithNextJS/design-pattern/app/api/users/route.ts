import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const users = [
    { id: 1, name: "Jhon" },
    { id: 2, name: "Cena" },
    { id: 3, name: "Orton" },
  ];
  //   return new Response(JSON.stringify(users));
  return NextResponse.json(JSON.stringify(users));
}

// import { NextResponse } from "next/server";

// export async function GET(request: Request) {
//   const users = [
//     { id: 1, name: "Jhon" },
//     { id: 2, name: "Cena" },
//     { id: 3, name: "Orton" },
//   ];

//   // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//   //   headers: {
//   //     'Content-Type': 'application/json',
//   //     'API-Key': process.env.DATA_API_KEY,
//   //   },
//   // });
//   const product = JSON.stringify(users);

//   //   return NextResponse.json({ product });
//   return new Response(JSON.stringify(users));
// }
