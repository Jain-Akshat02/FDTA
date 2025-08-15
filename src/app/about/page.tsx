import Image from "next/image";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggableCard";
export default function About() {
  const items = [
    {
      title: "WE TALK",
      id: 1,
      image:
        "/card4.png",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "FOR YOU",
      id:2,
      image:
        "/card3.png",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "FOR THE ISSUES",
      id:3,
      image:
        "/card2.png",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "THAT MATTER",
      id:4,
      image: "/card1.png",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    }
  ];
  return (
    <div className="bg-gradient-to-br from-primary via-secondary to-primary">
      <section className="px-6 py-20 max-w-6xl mx-auto ">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-center">
          About Our Community
        </h1>
        <p className="text-gray-300 text-lg text-center max-w-3xl mx-auto mb-12">
          Our association plays a pivotal role in connecting businesses,
          fostering global trade partnerships, and empowering industries through
          advocacy, research, and networking opportunities.
        </p>

        {/* Four Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
            <Image
              src="/pic1.png"
              alt="Trade Event"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-center text-gray-300">
              Policy Discussions
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
            <Image
              src="/pic2.png"
              alt="Networking"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-center text-gray-300">
              National Networking
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
            <Image
              src="/pic3.png"
              alt="Export Support"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-center text-gray-300">
              Export & Market Support
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
            <Image
              src="/pic4.png"
              alt="Industry Research"
              width={500}
              height={300}
              className="object-cover w-full h-48"
            />
            <div className="p-4 text-center text-gray-300">
              Members only meets
            </div>
          </div>
        </div>
        <hr className="my-16 border-white/20" />

        {/* G.S. Visiting Card */}

        {/* Big Association Paragraph */}
        <div className="max-w-6xl mx-auto text-gray-300 leading-relaxed text-2xl font-bold">
          {/* You will write this part */}
          <p>
            FDTA works to promote and protect the interests of Delhi’s
            commercial community, ensuring that local businesses operate in an
            environment that supports growth, innovation, and competitiveness.
            We actively engage with Delhi’s government departments, municipal
            bodies, and other relevant authorities to resolve policy issues,
            advocate for favorable regulations, and push for reforms that
            benefit the city’s trade and industry. Our services include
            assisting members in securing approvals, subsidies, reimbursements,
            financing options, and low-cost insurance policies. We also
            facilitate access to legal services, trade fairs, seminars,
            incubation centers, B2B networking platforms, and other business
            development resources. Additionally, FDTA aims to introduce member
            benefits such as the FDTA Privilege Card, offering exclusive
            advantages to make doing business in Delhi easier. At FDTA, we
            believe in the power of collaboration and partnerships. By working
            closely with our members and stakeholders, we strive to create a
            thriving commercial ecosystem in Delhi, enabling businesses to
            prosper and contribute to the city’s economic vitality.
          </p>
        </div>
        <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className} key={item.id}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
      </section>
    </div>
  );
}
