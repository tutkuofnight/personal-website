export default async function TechStack(){
  const response: any = await fetch("https://skillicons.dev/icons?i=js,go,html,css,sass,react,vue,nodejs,nextjs,nuxtjs,mongodb,postgresql,redis")
  const text:string = await response.text()
  return text
}