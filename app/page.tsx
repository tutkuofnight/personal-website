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
import socialMedia from "@/components/social-media"
import SocialMedia from "@/components/social-media"

export default async function Home() {
  const techstack: string = await TechStack()
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <main className="w-full md:w-1/2">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-between gap-10">
          <div>
            <Image src="/askeladd.jpeg" width={300} height={300} className="rounded" draggable={false} alt="Tutku Ucan" />
            <SocialMedia />
          </div>
          <aside className="w-full xl:w-[500px] px-40 md:px-0">
            <h1 className="text-3xl font-bold">Tutku Ucan</h1>
            <small className="text-base">full-stack developer ~ streamer ~ freelancer</small>
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
                      Since 4 years interest with Software Development.
                      Last 3 years of this passed with Web Development.
                      I Graduated in highschool IT and Web Design.
                      I was student at Tekirdag Namık Kemal University Computer Programming but i left after getting job from eQuota GmbH.
                      I worked as Frontend Develoepr 9 months.
                      In this period, i contribute many projects and i made a presentation to other developers about “Writing Test in Frontend”.
                      Currently i continue to develop my own web projects and working at Carbon Interaktif as Frontend Developer.
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
      <div
        className="w-[1000px] h-[200px] rounded-lg absolute -z-[1] opacity-100 blur-3xl top-[200px] -left-40 rotate-45 opacity-75"
        style={{
          background: `linear-gradient(to right, #325650, #0a1c1f)`
        }}
      ></div>
            <div
        className="w-[500px] h-[200px] rounded-lg absolute -z-[1] opacity-100 blur-3xl -top-10 left-[200px] rotate-45 opacity-70"
        style={{
          background: `linear-gradient(to right, #325650, #0a1c1f)`
        }}
      ></div>
    </div>
  );
}
