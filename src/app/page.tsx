import CourseCurriculum from "@/components/course-curriculum";
import Header from "@/components/header";
import Hero from "@/components/hero";
import MeetMyke from "@/components/meet-myke";

const Home = () => {
  return (
    <div className=''>
      <div className='bg-[url(/hero-lines.svg)] bg-[center_0] bg-no-repeat bg-cover w-full h-screen'>
        <Header />

        <Hero />

        <CourseCurriculum />

        <MeetMyke />
      </div>
    </div>
  );
};

export default Home;
