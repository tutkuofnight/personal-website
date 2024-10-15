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
      link: "#",
      icon: <Github />,
    },
    {
      name: "Twitch",
      link: "#",
      icon: <Twitch />
    },
    {
      name: "Linkedin",
      link: "#",
      icon: <Linkedin />
    },
    {
      name: "Instagram",
      link: "#",
      icon: <Instagram />
    },
  ]

  return (
    <div className="flex justify-evenly mt-9">
      {socials.map(media => (
        <a href={media.link}>
          {media.icon}
        </a>
      ))}
    </div>
  )
}