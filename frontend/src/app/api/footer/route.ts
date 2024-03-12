export async function GET() {
  const data = infoData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

function infoData() {
  return [
    {
      info: [
        {
          id: 1,
          number: "500220254",
          email: "muratbaevking.@gmail.com",
          adress: "turusbekova 109/1",
        },
      ],
    },
  ];
}
