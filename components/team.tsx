import Image from 'next/image'

const people = [
    {
      name: 'Snorky',
      role: 'Co-founder',
      imageUrl:
        '/snorky.png',
      bio: 'Snorky is a recognized entrepreneur and NFT enthusiast. He has been heavily involved in the NFT space for two years and has experience identifying what makes projects successful.',
      bio2: 'Specializing in marketing and focused on scaling the project, Snorky aims to ensure we become a leading crypto security company.',
      twitterUrl: 'https://twitter.com/SnorkyTheSeal',
      discordUrl: 'https://discord.gg/cypherseals',
    },
    {
      name: 'Sergeant',
      role: 'Co-founder',
      imageUrl:
        '/sergeant.png',
      bio: 'Serg is a cyber security consultant with 5+ years of experience. He has worked for a big four consultancy becoming seasoned in auditing large companies.',
      bio2: 'After being rugged by a Solana project, he decided to use his experience to develop an innovative assessment framework to help keep people safe in Web3.',
      twitterUrl: 'https://twitter.com/SergeantTheSeal',
      discordUrl: 'https://discord.gg/cypherseals',
    },
    {
      name: 'Birda',
      role: 'Head of Design',
      imageUrl:
        '/birda.png',
      bio: 'Birda is in charge of delivering the Cypher ecosystem with the dev team. His background in design and creating formidable branding gives him a reputation of high standards and delivering above and beyond.',
      bio2: 'He is an excellent resource supporting the rest of the team to uphold standards across the board.',
      twitterUrl: 'https://twitter.com/birdaNFT',
      discordUrl: 'https://discord.gg/cypherseals',
    },
    {
      name: 'Solus',
      role: 'Head of Engineering',
      imageUrl:
        '/solus.png',
      bio: 'Solus is a full-stack developer who is implementing the Cypher ecosystem along with the development team. With a background in the military of 7 years, Solus is a problem solver with attention to detail and always embraces challenges.',
      bio2: 'While collaborating with his team of developers, he aims to bring the best product to the blockchain ecosystem.',
      twitterUrl: 'https://twitter.com/SolusRGB',
      discordUrl: 'https://discord.gg/cypherseals',
    },
    {
      name: 'Hydrated',
      role: 'Solana Developer',
      imageUrl:
        '/hydrated.png',
      bio: 'Hydrated is a Solana developer responsible for the development of the $CYPH token, staking and raffle platforms.',
      bio2: 'Hydrated is also a cyber-security consultant with a competitive degree and 5+ years experience in providing end-to-end cyber-security services for large brands. He is applying his skills to now help build Web3.',
      twitterUrl: 'https://twitter.com/hydrated_seal',
      discordUrl: 'https://discord.gg/cypherseals',
    },
  ]
  
  export default function Team() {
    return (
      <>
        <div className="mx-auto mt-20 sm:mt-40 py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <a id="team"></a>
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div>
            <h2 className="text-[#92DDFD] tracking-wider pb-3">
                TEAM
            </h2>
            <h1 className="text-4xl xs:text-6xl sm:text-7xl tracking-tight font-bold text-[#e6e6e6] sm:tracking-tight md:tracking-tight lg:tracking-tight xl:tracking-tight">
              Meet the team
            </h1>
            <p className="mt-8 max-w-5xl lg:mx-auto text-lg text-[#e6e6e6] text-opacity-60 sm:text-xl md:mt-5 md:max-w-3xl">
                We&apos;re building the future of Cypher, scaling our services for NFT projects and building our community of smarter investors.
            </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-6">
                      <div className="aspect-w-3 aspect-h-2">
                        <Image 
                        className="object-cover shadow-lg rounded-3xl" 
                        src={person.imageUrl} 
                        alt="Team" 
                        width="640"
                        height="640"
                        />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-2">
                        <h3 className="text-[#e6e6e6] uppercase">{person.name}</h3>
                        <p className="text-[#92DDFD] opacity-80 uppercase">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-[#e6e6e6] opacity-60">{person.bio}</p>
                        <p className="text-[#e6e6e6] opacity-60 mt-5">{person.bio2}</p>
                      </div>
  
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                        <li>
                          <a href={person.discordUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </>
    )
  }
  