import Image from "next/image";
import thumbNail from "@/public/highschool.jpg";

const people = [
  {
    name: "Gakwerere Seth",
    description: "for always radiating positivity",
  },
  {
    name: "Héritier",
    description: "for not being stingy, despite the religion(Adv)😁",
  },
  {
    name: "Igihozo Kevin",
    description: "For reminding us to pray",
  },
  {
    name: "Anicet",
    description: "For your amazing work ethic",
  },
  {
    name: "Jasmine",
    description: "For being down-to-earth",
  },
  {
    name: "Christmas",
    description: "your unpredictability was insane",
  },
  {
    name: "Christian(Muzimaa)",
    description: "For your mentality 🤣",
  },
  {
    name: "Bryan",
    description: "For your loyalty",
  },
  {
    name: "Elvis",
    description: "For your ability to mind your business",
  },
  {
    name: "Cylia",
    description: "For being the least annoying seat-mate",
  },
  {
    name: "Etienne",
    description: "For never switching up",
  },
  {
    name: "Adam",
    description: "For never hesitating to help",
  },
  {
    name: "Chamah",
    description: "😐😐....",
  },
  {
    name: "Klein",
    description: "It was a pleasure learning side-by-side",
  },
  {
    name: "🍏",
    description: "🤖🤖 **If you know you know**",
  },
];

const gold = [
  {
    name: "Frank",
    description: "You give great advice",
  },
  {
    name: "Cedric",
    description: "I could pay just to see you goof around",
  },
  {
    name: "Cedric",
    description: "I could pay just to see you goof around",
  },
  {
    name: "Vainqueur",
    description: "Ubuse mvuge iki ndeke iki?",
  },
  {
    name: "Tony",
    description: "How do you manage to remain calm🤔",
  },
  {
    name: "Davis",
    description: "I learnt a lot from you",
  },
  {
    name: "Chérubin",
    description: "You had a well balanced dose of goofiness and seriousness",
  },
  {
    name: "Davis",
    description: "I learnt a lot from you",
  },
  {
    name: "Kelly",
    description: "Ugirango se biteye ubwoba",
  },
  {
    name: "Hubert",
    description: "Jules Koundé 🤣🤣",
  },
];

const diamond = [
  {
    name: "Léonce (Therapist 🤣🤣)",
    description:
      "I enjoyed receiving constructive criticism from you. Challenging my thought process.",
  },
  {
    name: "Arcade",
    description: "You several times, took the blame of my own mistakes",
  },
  {
    name: "Alli",
    description:
      "This man right here would tell me to mix our pocket money despite having like the triple amount of what I have",
  },
  {
    name: "Levi Ryan",
    description: "Akariro ku irembo 🔥🔥",
  },
  {
    name: "Gitori",
    description: "Mbuze ikintu mvuga",
  },
];

const Content = () => {
  return (
    <div>
      <div className="mt-4 flex flex-col gap-2">
        <Image src={thumbNail} alt="Thumbnail" />
        <p>
          I believe high school to have been the most shaping/life-defining era
          of my life. Part of what made highschool great is the company; the
          people you starve with, share beds with, learn with and do goofy
          things with. These type of experiences create lifetime memories. I am
          about to give flowers to people who defined my high school journey.
          <em>The order does not matter :)</em>
        </p>
        <h1 className="text-3xl font-semibold underline">🥈Silver Friends</h1>
        <div className="border rounded-lg">
          {people.map((person, index) => (
            <div className="p-3" key={index}>
              <p className="text-lg font-bold">{person.name}</p>
              <p className="text-muted-foreground">{person.description}</p>
              <hr />
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-semibold underline mt-7">
          🥇Gold Friends
        </h1>
        <div className="border rounded-lg">
          {gold.map((person, index) => (
            <div className="p-3" key={index}>
              <p className="text-lg font-bold">{person.name}</p>
              <p className="text-muted-foreground">{person.description}</p>
              <hr />
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-semibold underline mt-7">
          💎Diamond Friends
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {diamond.map((item, index) => (
            <div className="border rounded-lg shadow-sm p-3" key={index}>
              <p className="text-xl font-bold">{item.name}</p>
              <hr />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p>
          While most of these Friends drifted away due their own issues, I still
          acknowledge their impact. I guess that&apos;s how it goes.
        </p>
      </div>
    </div>
  );
};

export default Content;
