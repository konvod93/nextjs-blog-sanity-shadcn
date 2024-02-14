import { Card } from "@/components/ui/card";
import { simpleBlogCard } from "./lib/interface";
import { client, urlFor } from "./lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data)
  
  return (
    <div className="grig grid-cols-1 lg:grid-cols-4 mt-5">      
      {data.map((post, idx) => (
        <Card key={idx}>
          <Image src={urlFor(post.titleImage).url()} alt="image" width={500} height={500} />

        </Card>
      ))}
    </div>
  );
}
