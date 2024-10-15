"use client"

export default function Background(){
  return (
    <div className="absolute -z-[1] overflow-hidden w-screen h-screen">
      <div
        className="w-[1000px] h-[200px] rounded-lg blur-3xl absolute top-[200px] -left-40 rotate-45 opacity-75"
        style={{
          background: `linear-gradient(to right, #325650, #0a1c1f)`
        }}>
      </div>
      <div
        className="w-[500px] h-[200px] rounded-lg blur-3xl -top-0 absolute left-[300px] rotate-45 opacity-70"
        style={{
          background: `linear-gradient(to right, #325650, #0a1c1f)`
        }}>
      </div>
    </div>
  )
}
