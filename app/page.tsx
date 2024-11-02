import Image from "next/image"
import TechStack from "@/components/tech-stack"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import WorkedCompanies from "@/components/worked-companies"
import SocialMedia from "@/components/social-media"
import Background from "@/components/background"

export default async function Home() {
  const techstack: string = await TechStack()
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <main>
        <div className="flex flex-row desktop:flex-col desktop:items-center gap-10">
          <div className="desktop:flex desktop:items-center desktop:flex-col">
            <Image src="/askeladd.jpeg" width={300} height={300} className="rounded" draggable={false} alt="Tutku Ucan" />
            <SocialMedia />
          </div>
          <aside className="phone:w-full phone:px-10 w-[500px]">
            <h1 className="text-3xl font-bold phone:text-center">Tutku Ucan</h1>
            <div className="text-base phone:text-sm phone:text-center">full-stack developer ~ streamer ~ freelancer</div>
            <Tabs defaultValue="about" className="w-full">
              {/* <TabsList>
                <TabsTrigger value="about">About Me</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList> */}
              <TabsContent value="about">
                <Accordion type="single" collapsible className="w-100">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Who I Am?</AccordionTrigger>
                    <AccordionContent>
                      Hi! This is Tutku.
                      Since 5 years interest with Software Development.
                      Last 4 years of this passed with Web Development.
                      I Graduated in highschool IT and Web Design.
                      I was student at Tekirdag Namık Kemal University Computer Programming but i left after getting job from eQuota GmbH.
                      I worked as Frontend Develoepr 9 months there.
                      In this period, i contribute many projects and i made a presentation to other developers about “Writing Test in Frontend”.
                      Later, I worked as a Frontend and Full-Stack Developer in several companies.
                      Currently i am developing my own projects, learning go and trying to make myself better again.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-100">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Worked Companies</AccordionTrigger>
                    <AccordionContent>
                      <WorkedCompanies />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <Accordion type="single" collapsible className="w-100">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Tech Stack</AccordionTrigger>
                    <AccordionContent>
                      <ScrollArea>
                        <div className="mb-3 w-[300px]" dangerouslySetInnerHTML={{ __html: techstack }}></div>
                        <ScrollBar orientation="horizontal" />
                      </ScrollArea>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="other"></TabsContent>
            </Tabs>
          </aside>
        </div>
      </main>
      <Background />
    </div>
  );
}
