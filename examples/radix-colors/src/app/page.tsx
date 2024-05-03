import React from 'react'

import { ModeToggle } from '@/components/ModeToggle'

function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-gray-11 flex h-12 items-center justify-center text-lg">
      {children}
    </div>
  )
}

function Color({ value }: { value: string }) {
  return (
    <div className={`${value} h-12 rounded-md`}></div>
  )
}

export default function Home() {
  return (
    <main className="container mx-auto">
      <header className="flex flex-row items-center justify-center py-10">
        <ModeToggle />
      </header>
      <div className="grid grid-cols-[minmax(64px,1fr)_repeat(12,minmax(0,1fr))] gap-1 py-10">
        {/* Gray */}
        <Title>Gray</Title>
        <Color value="bg-gray-1" />
        <Color value="bg-gray-2" />
        <Color value="bg-gray-3" />
        <Color value="bg-gray-4" />
        <Color value="bg-gray-5" />
        <Color value="bg-gray-6" />
        <Color value="bg-gray-7" />
        <Color value="bg-gray-8" />
        <Color value="bg-gray-9" />
        <Color value="bg-gray-10" />
        <Color value="bg-gray-11" />
        <Color value="bg-gray-12" />

        {/* Mauve */}
        <Title>Mauve</Title>
        <Color value="bg-mauve-1" />
        <Color value="bg-mauve-2" />
        <Color value="bg-mauve-3" />
        <Color value="bg-mauve-4" />
        <Color value="bg-mauve-5" />
        <Color value="bg-mauve-6" />
        <Color value="bg-mauve-7" />
        <Color value="bg-mauve-8" />
        <Color value="bg-mauve-9" />
        <Color value="bg-mauve-10" />
        <Color value="bg-mauve-11" />
        <Color value="bg-mauve-12" />

        {/* Slate */}
        <Title>Slate</Title>
        <Color value="bg-slate-1" />
        <Color value="bg-slate-2" />
        <Color value="bg-slate-3" />
        <Color value="bg-slate-4" />
        <Color value="bg-slate-5" />
        <Color value="bg-slate-6" />
        <Color value="bg-slate-7" />
        <Color value="bg-slate-8" />
        <Color value="bg-slate-9" />
        <Color value="bg-slate-10" />
        <Color value="bg-slate-11" />
        <Color value="bg-slate-12" />

        {/* Sage */}
        <Title>Sage</Title>
        <Color value="bg-sage-1" />
        <Color value="bg-sage-2" />
        <Color value="bg-sage-3" />
        <Color value="bg-sage-4" />
        <Color value="bg-sage-5" />
        <Color value="bg-sage-6" />
        <Color value="bg-sage-7" />
        <Color value="bg-sage-8" />
        <Color value="bg-sage-9" />
        <Color value="bg-sage-10" />
        <Color value="bg-sage-11" />
        <Color value="bg-sage-12" />

        {/* Olive */}
        <Title>Olive</Title>
        <Color value="bg-olive-1" />
        <Color value="bg-olive-2" />
        <Color value="bg-olive-3" />
        <Color value="bg-olive-4" />
        <Color value="bg-olive-5" />
        <Color value="bg-olive-6" />
        <Color value="bg-olive-7" />
        <Color value="bg-olive-8" />
        <Color value="bg-olive-9" />
        <Color value="bg-olive-10" />
        <Color value="bg-olive-11" />
        <Color value="bg-olive-12" />

        {/* Sand */}
        <Title>Sand</Title>
        <Color value="bg-sand-1" />
        <Color value="bg-sand-2" />
        <Color value="bg-sand-3" />
        <Color value="bg-sand-4" />
        <Color value="bg-sand-5" />
        <Color value="bg-sand-6" />
        <Color value="bg-sand-7" />
        <Color value="bg-sand-8" />
        <Color value="bg-sand-9" />
        <Color value="bg-sand-10" />
        <Color value="bg-sand-11" />
        <Color value="bg-sand-12" />

        {/* Tomato */}
        <Title>Tomato</Title>
        <Color value="bg-tomato-1" />
        <Color value="bg-tomato-2" />
        <Color value="bg-tomato-3" />
        <Color value="bg-tomato-4" />
        <Color value="bg-tomato-5" />
        <Color value="bg-tomato-6" />
        <Color value="bg-tomato-7" />
        <Color value="bg-tomato-8" />
        <Color value="bg-tomato-9" />
        <Color value="bg-tomato-10" />
        <Color value="bg-tomato-11" />
        <Color value="bg-tomato-12" />

        {/* Red */}
        <Title>Red</Title>
        <Color value="bg-red-1" />
        <Color value="bg-red-2" />
        <Color value="bg-red-3" />
        <Color value="bg-red-4" />
        <Color value="bg-red-5" />
        <Color value="bg-red-6" />
        <Color value="bg-red-7" />
        <Color value="bg-red-8" />
        <Color value="bg-red-9" />
        <Color value="bg-red-10" />
        <Color value="bg-red-11" />
        <Color value="bg-red-12" />

        {/* Ruby */}
        <Title>Ruby</Title>
        <Color value="bg-ruby-1" />
        <Color value="bg-ruby-2" />
        <Color value="bg-ruby-3" />
        <Color value="bg-ruby-4" />
        <Color value="bg-ruby-5" />
        <Color value="bg-ruby-6" />
        <Color value="bg-ruby-7" />
        <Color value="bg-ruby-8" />
        <Color value="bg-ruby-9" />
        <Color value="bg-ruby-10" />
        <Color value="bg-ruby-11" />
        <Color value="bg-ruby-12" />

        {/* Crimson */}
        <Title>Crimson</Title>
        <Color value="bg-crimson-1" />
        <Color value="bg-crimson-2" />
        <Color value="bg-crimson-3" />
        <Color value="bg-crimson-4" />
        <Color value="bg-crimson-5" />
        <Color value="bg-crimson-6" />
        <Color value="bg-crimson-7" />
        <Color value="bg-crimson-8" />
        <Color value="bg-crimson-9" />
        <Color value="bg-crimson-10" />
        <Color value="bg-crimson-11" />
        <Color value="bg-crimson-12" />

        {/* Pink */}
        <Title>Pink</Title>
        <Color value="bg-pink-1" />
        <Color value="bg-pink-2" />
        <Color value="bg-pink-3" />
        <Color value="bg-pink-4" />
        <Color value="bg-pink-5" />
        <Color value="bg-pink-6" />
        <Color value="bg-pink-7" />
        <Color value="bg-pink-8" />
        <Color value="bg-pink-9" />
        <Color value="bg-pink-10" />
        <Color value="bg-pink-11" />
        <Color value="bg-pink-12" />

        {/* Plum */}
        <Title>Plum</Title>
        <Color value="bg-plum-1" />
        <Color value="bg-plum-2" />
        <Color value="bg-plum-3" />
        <Color value="bg-plum-4" />
        <Color value="bg-plum-5" />
        <Color value="bg-plum-6" />
        <Color value="bg-plum-7" />
        <Color value="bg-plum-8" />
        <Color value="bg-plum-9" />
        <Color value="bg-plum-10" />
        <Color value="bg-plum-11" />
        <Color value="bg-plum-12" />

        {/* Purple */}
        <Title>Purple</Title>
        <Color value="bg-purple-1" />
        <Color value="bg-purple-2" />
        <Color value="bg-purple-3" />
        <Color value="bg-purple-4" />
        <Color value="bg-purple-5" />
        <Color value="bg-purple-6" />
        <Color value="bg-purple-7" />
        <Color value="bg-purple-8" />
        <Color value="bg-purple-9" />
        <Color value="bg-purple-10" />
        <Color value="bg-purple-11" />
        <Color value="bg-purple-12" />

        {/* Violet */}
        <Title>Violet</Title>
        <Color value="bg-violet-1" />
        <Color value="bg-violet-2" />
        <Color value="bg-violet-3" />
        <Color value="bg-violet-4" />
        <Color value="bg-violet-5" />
        <Color value="bg-violet-6" />
        <Color value="bg-violet-7" />
        <Color value="bg-violet-8" />
        <Color value="bg-violet-9" />
        <Color value="bg-violet-10" />
        <Color value="bg-violet-11" />
        <Color value="bg-violet-12" />

        {/* Iris */}
        <Title>Iris</Title>
        <Color value="bg-iris-1" />
        <Color value="bg-iris-2" />
        <Color value="bg-iris-3" />
        <Color value="bg-iris-4" />
        <Color value="bg-iris-5" />
        <Color value="bg-iris-6" />
        <Color value="bg-iris-7" />
        <Color value="bg-iris-8" />
        <Color value="bg-iris-9" />
        <Color value="bg-iris-10" />
        <Color value="bg-iris-11" />
        <Color value="bg-iris-12" />

        {/* Indigo */}
        <Title>Indigo</Title>
        <Color value="bg-indigo-1" />
        <Color value="bg-indigo-2" />
        <Color value="bg-indigo-3" />
        <Color value="bg-indigo-4" />
        <Color value="bg-indigo-5" />
        <Color value="bg-indigo-6" />
        <Color value="bg-indigo-7" />
        <Color value="bg-indigo-8" />
        <Color value="bg-indigo-9" />
        <Color value="bg-indigo-10" />
        <Color value="bg-indigo-11" />
        <Color value="bg-indigo-12" />

        {/* Blue */}
        <Title>Blue</Title>
        <Color value="bg-blue-1" />
        <Color value="bg-blue-2" />
        <Color value="bg-blue-3" />
        <Color value="bg-blue-4" />
        <Color value="bg-blue-5" />
        <Color value="bg-blue-6" />
        <Color value="bg-blue-7" />
        <Color value="bg-blue-8" />
        <Color value="bg-blue-9" />
        <Color value="bg-blue-10" />
        <Color value="bg-blue-11" />
        <Color value="bg-blue-12" />

        {/* Cyan */}
        <Title>Cyan</Title>
        <Color value="bg-cyan-1" />
        <Color value="bg-cyan-2" />
        <Color value="bg-cyan-3" />
        <Color value="bg-cyan-4" />
        <Color value="bg-cyan-5" />
        <Color value="bg-cyan-6" />
        <Color value="bg-cyan-7" />
        <Color value="bg-cyan-8" />
        <Color value="bg-cyan-9" />
        <Color value="bg-cyan-10" />
        <Color value="bg-cyan-11" />
        <Color value="bg-cyan-12" />

        {/* Teal */}
        <Title>Teal</Title>
        <Color value="bg-teal-1" />
        <Color value="bg-teal-2" />
        <Color value="bg-teal-3" />
        <Color value="bg-teal-4" />
        <Color value="bg-teal-5" />
        <Color value="bg-teal-6" />
        <Color value="bg-teal-7" />
        <Color value="bg-teal-8" />
        <Color value="bg-teal-9" />
        <Color value="bg-teal-10" />
        <Color value="bg-teal-11" />
        <Color value="bg-teal-12" />

        {/* Jade */}
        <Title>Jade</Title>
        <Color value="bg-jade-1" />
        <Color value="bg-jade-2" />
        <Color value="bg-jade-3" />
        <Color value="bg-jade-4" />
        <Color value="bg-jade-5" />
        <Color value="bg-jade-6" />
        <Color value="bg-jade-7" />
        <Color value="bg-jade-8" />
        <Color value="bg-jade-9" />
        <Color value="bg-jade-10" />
        <Color value="bg-jade-11" />
        <Color value="bg-jade-12" />

        {/* Green */}
        <Title>Green</Title>
        <Color value="bg-green-1" />
        <Color value="bg-green-2" />
        <Color value="bg-green-3" />
        <Color value="bg-green-4" />
        <Color value="bg-green-5" />
        <Color value="bg-green-6" />
        <Color value="bg-green-7" />
        <Color value="bg-green-8" />
        <Color value="bg-green-9" />
        <Color value="bg-green-10" />
        <Color value="bg-green-11" />
        <Color value="bg-green-12" />

        {/* Grass */}
        <Title>Grass</Title>
        <Color value="bg-grass-1" />
        <Color value="bg-grass-2" />
        <Color value="bg-grass-3" />
        <Color value="bg-grass-4" />
        <Color value="bg-grass-5" />
        <Color value="bg-grass-6" />
        <Color value="bg-grass-7" />
        <Color value="bg-grass-8" />
        <Color value="bg-grass-9" />
        <Color value="bg-grass-10" />
        <Color value="bg-grass-11" />
        <Color value="bg-grass-12" />

        {/* Bronze */}
        <Title>Bronze</Title>
        <Color value="bg-bronze-1" />
        <Color value="bg-bronze-2" />
        <Color value="bg-bronze-3" />
        <Color value="bg-bronze-4" />
        <Color value="bg-bronze-5" />
        <Color value="bg-bronze-6" />
        <Color value="bg-bronze-7" />
        <Color value="bg-bronze-8" />
        <Color value="bg-bronze-9" />
        <Color value="bg-bronze-10" />
        <Color value="bg-bronze-11" />
        <Color value="bg-bronze-12" />

        {/* Gold */}
        <Title>Gold</Title>
        <Color value="bg-gold-1" />
        <Color value="bg-gold-2" />
        <Color value="bg-gold-3" />
        <Color value="bg-gold-4" />
        <Color value="bg-gold-5" />
        <Color value="bg-gold-6" />
        <Color value="bg-gold-7" />
        <Color value="bg-gold-8" />
        <Color value="bg-gold-9" />
        <Color value="bg-gold-10" />
        <Color value="bg-gold-11" />
        <Color value="bg-gold-12" />

        {/* Brown */}
        <Title>Brown</Title>
        <Color value="bg-brown-1" />
        <Color value="bg-brown-2" />
        <Color value="bg-brown-3" />
        <Color value="bg-brown-4" />
        <Color value="bg-brown-5" />
        <Color value="bg-brown-6" />
        <Color value="bg-brown-7" />
        <Color value="bg-brown-8" />
        <Color value="bg-brown-9" />
        <Color value="bg-brown-10" />
        <Color value="bg-brown-11" />
        <Color value="bg-brown-12" />

        {/* Orange */}
        <Title>Orange</Title>
        <Color value="bg-orange-1" />
        <Color value="bg-orange-2" />
        <Color value="bg-orange-3" />
        <Color value="bg-orange-4" />
        <Color value="bg-orange-5" />
        <Color value="bg-orange-6" />
        <Color value="bg-orange-7" />
        <Color value="bg-orange-8" />
        <Color value="bg-orange-9" />
        <Color value="bg-orange-10" />
        <Color value="bg-orange-11" />
        <Color value="bg-orange-12" />

        {/* Amber */}
        <Title>Amber</Title>
        <Color value="bg-amber-1" />
        <Color value="bg-amber-2" />
        <Color value="bg-amber-3" />
        <Color value="bg-amber-4" />
        <Color value="bg-amber-5" />
        <Color value="bg-amber-6" />
        <Color value="bg-amber-7" />
        <Color value="bg-amber-8" />
        <Color value="bg-amber-9" />
        <Color value="bg-amber-10" />
        <Color value="bg-amber-11" />
        <Color value="bg-amber-12" />

        {/* Yellow */}
        <Title>Yellow</Title>
        <Color value="bg-yellow-1" />
        <Color value="bg-yellow-2" />
        <Color value="bg-yellow-3" />
        <Color value="bg-yellow-4" />
        <Color value="bg-yellow-5" />
        <Color value="bg-yellow-6" />
        <Color value="bg-yellow-7" />
        <Color value="bg-yellow-8" />
        <Color value="bg-yellow-9" />
        <Color value="bg-yellow-10" />
        <Color value="bg-yellow-11" />
        <Color value="bg-yellow-12" />

        {/* Lime */}
        <Title>Lime</Title>
        <Color value="bg-lime-1" />
        <Color value="bg-lime-2" />
        <Color value="bg-lime-3" />
        <Color value="bg-lime-4" />
        <Color value="bg-lime-5" />
        <Color value="bg-lime-6" />
        <Color value="bg-lime-7" />
        <Color value="bg-lime-8" />
        <Color value="bg-lime-9" />
        <Color value="bg-lime-10" />
        <Color value="bg-lime-11" />
        <Color value="bg-lime-12" />

        {/* Mint */}
        <Title>Mint</Title>
        <Color value="bg-mint-1" />
        <Color value="bg-mint-2" />
        <Color value="bg-mint-3" />
        <Color value="bg-mint-4" />
        <Color value="bg-mint-5" />
        <Color value="bg-mint-6" />
        <Color value="bg-mint-7" />
        <Color value="bg-mint-8" />
        <Color value="bg-mint-9" />
        <Color value="bg-mint-10" />
        <Color value="bg-mint-11" />
        <Color value="bg-mint-12" />

        {/* Sky */}
        <Title>Sky</Title>
        <Color value="bg-sky-1" />
        <Color value="bg-sky-2" />
        <Color value="bg-sky-3" />
        <Color value="bg-sky-4" />
        <Color value="bg-sky-5" />
        <Color value="bg-sky-6" />
        <Color value="bg-sky-7" />
        <Color value="bg-sky-8" />
        <Color value="bg-sky-9" />
        <Color value="bg-sky-10" />
        <Color value="bg-sky-11" />
        <Color value="bg-sky-12" />

        {/* Empty */}
        <div className="h-8"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>

        {/* Black Alpha */}
        <Title>Black Alpha</Title>
        <Color value="bg-blackA-1" />
        <Color value="bg-blackA-2" />
        <Color value="bg-blackA-3" />
        <Color value="bg-blackA-4" />
        <Color value="bg-blackA-5" />
        <Color value="bg-blackA-6" />
        <Color value="bg-blackA-7" />
        <Color value="bg-blackA-8" />
        <Color value="bg-blackA-9" />
        <Color value="bg-blackA-10" />
        <Color value="bg-blackA-11" />
        <Color value="bg-blackA-12" />

        {/* White Alpha */}
        <Title>White Alpha</Title>
        <Color value="bg-whiteA-1" />
        <Color value="bg-whiteA-2" />
        <Color value="bg-whiteA-3" />
        <Color value="bg-whiteA-4" />
        <Color value="bg-whiteA-5" />
        <Color value="bg-whiteA-6" />
        <Color value="bg-whiteA-7" />
        <Color value="bg-whiteA-8" />
        <Color value="bg-whiteA-9" />
        <Color value="bg-whiteA-10" />
        <Color value="bg-whiteA-11" />
        <Color value="bg-whiteA-12" />
      </div>
    </main>
  )
}
