import { Separator } from "@/components/ui/separator";
function About() {
  return (
    <>
      <div>
        <h1>Project Overview</h1>
      </div>
      <main className="p-3">
        <section className="h-dvh flex flex-row justify-between items-center gap-5 ">
          <img
            src="/THE_OPIOID_EPIDEMIC.jpg"
            alt="terms"
            className="w-[30%] max-w-100 h-auto"
          />
          <div className="text-center flex flex-col gap-3">
            <p className="text-4xl">
              Supporting Opioid Recovery through Innovation & Visibility
            </p>
            <p className="text-2xl">
              Funded by the Maryland Department of Behavioral Health (BHA). In
              collaboration with the UMES Counseling Education Program
            </p>
            <p className="">
              The SORIV Project is an initiative designed to bring awareness,
              resources, and community connection to issues related to Opioid
              Use Disorder (OUD) both on campus and throughout the surrounding
              community. Our mission is to bridge education, technology, and
              behavioral health to ensure individuals and families have easy
              access to trusted information, support, and resources.e Opioid
              Crisis
            </p>
          </div>
        </section>
        <Separator className="my-5" />
        <section className="h-dvh flex flex-row justify-between items-center gap-10 ">
          <div>
            <div className="flex flex-col gap-3">
              <p className="text-4xl">A Unique Collaboration</p>
              <p>
                This project brings together students from: UMES Counseling
                Education and UMES Computer Science Working together to create
                innovative virtual tools powered by AI that will:
                <ul className="list-disc list-inside">
                  <li>
                    Provide community members with easy access to relevant
                    behavioral health resources
                  </li>
                  <li>
                    Increase awareness and education around opioid use disorder
                  </li>
                  <li>
                    Support data collection to measure and improve program
                    impact
                  </li>
                  <li>
                    Strengthen the connection between the campus and the
                    community
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <img
            src="/hands.jpeg"
            alt="hands"
            className="w-[30%] max-w-100 h-auto"
          />
        </section>
        <Separator className="my-5" />
        <section className="h-dvh flex flex-row justify-between items-center gap-5 ">
          <img
            src="/opportunity.jpg"
            alt="opportunity"
            className="w-[30%] max-w-100 h-auto"
          />
          <div className="text-center flex flex-col gap-3">
            <p className="text-4xl">
              Opportunity for Counseling Education Students
            </p>
            <p className="text-2xl">
              Counseling Education students are encouraged to apply to
              participate in the SORIV Grant Initiative.
            </p>
            <p className="text-left px-20">
              Participation includes:
              <ul className="list-disc list-inside">
                <li>Professional development experiences</li>
                <li>Completion of a service-learning project</li>
                <li>Assisting with community outreach events</li>
                <li>Helping plan and facilitate awareness activities</li>
                <li>Collaborating with SORIV team members</li>
              </ul>
              <span className="font-bold">
                A stipend will be provided for participation.
              </span>
            </p>
          </div>
        </section>
        <Separator className="my-5" />
        <section className="h-dvh flex flex-row justify-between items-center gap-5 ">
          <img
            src="/impact.jpg"
            alt="impact"
            className="w-[30%] max-w-100 h-auto"
          />
          <div className="text-center flex flex-col gap-3">
            <p className="text-4xl">
              Get Involved. Make an Impact. Be Part of the Solution.
            </p>
            <p className="">
              Our goal is to create a stronger, more informed community by
              combining behavioral health knowledge, student innovation, and
              community engagement to address opioid use disorder in meaningful
              and lasting ways.
            </p>
            <p className="font-bold">
              For more information, contact the SORIV Team through the UMES
              Counselor Education Program
            </p>
            <p className="font-bold">
              Dr. Kimberly Poole-Sykes, Dept Chair Angel Cooper, Program
              Assistant
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
