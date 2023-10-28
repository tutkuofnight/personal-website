import {description , experiences , projects , socialMediaLinks} from './content'
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="background"></div>
      
      <main className="w-[85%] lg:w-[70%] py-20 mx-auto">
        <header>
          <small className="text-xl text-slate-300">Heyo, I am</small>
          <h1 className="text-4xl font-bold">Tutku Uçan</h1>
        </header>
        <section>
          <p>{description}</p>
          <div className='flex flex-wrap gap-3 my-5'>
            {socialMediaLinks.map((media , index) => (
              <a key={index} href={media.url} target='_blank' className='flex items-center gap-3 p-2 bg-white text-black font-bold'>
                {media.icon}
                <span>{media.name}</span>
              </a>
            ))}
          </div>
        </section>
        <section>
          <h1 className='text-4xl font-bold'>Experiences</h1>
          <div className='my-5'>
            {experiences.map((job , index) => (
              <div key={index} className='border-l-2 p-5 relative before:box-content before:absolute before:w-3 before:h-3 before:bg-white before:left-[-7px] before:top-[25px] first:before:bg-red-400 first:before:w-4 first:before:h-4 first:before:left-[-9px] first:before:top-[26px]'>
                <h1 className='text-xl'>{job.position}</h1>
                <div className='flex gap-3 items-center'>
                  <h3 className='text-md text-slate-300 sm:pr-2 sm:border-r-2'>{job.companyName}</h3>
                  <small>{job.date.started} - {job.date.ended}</small>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h1 className='text-4xl font-bold'>Projects</h1>
          <div className='my-5'>
            {projects.map((project , index) => (
              <div key={index}>
                <h1 className='text-xl'>{project.name}</h1>
                <div className='flex gap-3 items-center text-slate-200'>
                  <p>{project.description}</p>
                </div>
                <div>
                  {Object.entries(project.techStack).map((stack , index) => (
                    <div key={index} className='my-2'>
                      {stack[0]}
                      <div className='my-1'>
                        {stack[1].join(', ')}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    
    </div>
  )
}
