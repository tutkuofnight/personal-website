"use client"
import Image from "next/image"

export default function() {
  type Company = {
    name: string
    image: string
  }
  const companies: Company[] = [
    {
      name: "eQuota GmbH",
      image: "equota.jpg"
    },
    {
      name: "Brancoll",
      image: "brancoll.png"
    },
    {
      name: "Carbon Interaktif",
      image: "carbon.jpg"
    },
    {
      name: "CoRepollt",
      image: "corepollt.jpg"
    },
    {
      name: "R",
      image: "r.jpg"
    }
  ]

  return (
    <div className="flex flex-wrap items-baseline gap-3">
      {companies.map((company,key) => (
        <Image key={key} className="rounded" src={"/companies/" + company.image} width={140} height={70} alt={company.name} />
      ))}
    </div>
  )
}
