import image from "@/assets/images/promoHome/banner.jpeg";

export async function GET() {
  const data = promoHomeData();
  const headers = { "Content-Type": "application/json" };
  return new Response(JSON.stringify(data), { headers });
}

function promoHomeData() {
  return [
    {
      images: [
        {
          id: 1,
          imge: image,
          title: "О нас",
          text: "Сплошной текст длинный который просто заполняет пространство",
        },
      ],
    },
  ];
}
