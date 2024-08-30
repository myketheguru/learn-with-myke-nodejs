import CourseCurriculum from "@/components/course-curriculum";
import Header from "@/components/header";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <div className=''>
      <div className='bg-[url(/hero-lines.svg)] bg-[center_0] bg-no-repeat bg-cover w-full h-screen'>
        <Header />

        <Hero />

        <CourseCurriculum />
      </div>
    </div>
  );
};

export default Home;
