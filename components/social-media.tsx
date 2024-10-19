"use client"
import Image from "next/image"
import { Github, Twitch, Linkedin, Instagram } from "lucide-react"
import React from "react"

export default function () {
  type Social = {
    name: string
    link: string
    icon: React.ReactNode
  }
  const socials: Social[] = [
    {
      name: "Github",
      link: "https://github.com/tutkuofnight",
      icon: <Github />,
    },
    {
      name: "Twitch",
      link: "https://twitch.tv/tutkuofnight",
      icon: <Twitch />
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/tutkuucan",
      icon: <Linkedin />
    },
    {
      name: "Instagram",
      link: "https://instagram.com/tutkuofnight",
      icon: <Instagram />
    },
  ]

  return (
    <div className="flex justify-evenly desktop:gap-6 mt-9">
      {socials.map((media, key) => (
        <a key={key} href={media.link}>
          {media.icon}
        </a>
      ))}
    </div>
  )
}
