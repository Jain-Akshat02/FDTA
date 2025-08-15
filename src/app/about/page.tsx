import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-primary">
    <section className="px-6 py-20 max-w-6xl mx-auto ">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-center">About Our Community</h1>
      <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
        Our association plays a pivotal role in connecting businesses, fostering global trade partnerships, 
        and empowering industries through advocacy, research, and networking opportunities.
      </p>

      {/* Four Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
          <Image src="/pic1.png" alt="Trade Event" width={500} height={300} className="object-cover w-full h-48" />
          <div className="p-4 text-center text-gray-300">Policy Discussions</div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
          <Image src="/pic2.png" alt="Networking" width={500} height={300} className="object-cover w-full h-48" />
          <div className="p-4 text-center text-gray-300">National Networking</div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
          <Image src="/pic3.png" alt="Export Support" width={500} height={300} className="object-cover w-full h-48" />
          <div className="p-4 text-center text-gray-300">Export & Market Support</div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
          <Image src="/pic4.png" alt="Industry Research" width={500} height={300} className="object-cover w-full h-48" />
          <div className="p-4 text-center text-gray-300">Members only meets</div>
        </div>
      </div>
<hr className="my-16 border-white/20" />

      {/* G.S. Visiting Card */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <Image 
          src="/image1.png" 
          alt="Visiting Card" 
          width={400} 
          height={250} 
          className="rounded-2xl shadow-xl border-1 border-black"
        />
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          <strong>Radhey Shyam Sharma</strong> – President of Federation of Delhi Trade Association(FDTA)
        </p>
        <p className="text-lg text-gray-300 text-center max-w-2xl">
          <strong>Davinder Jain</strong> – General Secretary
        </p>
      </div>

      {/* Big Association Paragraph */}
      <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed text-lg">
        {/* You will write this part */}
        <p>
          [Write your detailed paragraph here about how big and influential your association is. Mention
          your reach, history, major projects, global connections, achievements, and how it impacts the 
          trade ecosystem worldwide.]
        </p>
      </div>
    </section>
    </div>
  );
}
