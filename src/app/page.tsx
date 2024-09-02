import CourseCurriculum from "@/components/course-curriculum";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LetsBuild from "@/components/lets-build";
import MeetMyke from "@/components/meet-myke";
import StartLearning from "@/components/start-learning";

const Home = () => {
  return (
    <>
      <div className='relative bg-[url(/hero-lines.svg)] bg-[center_0] bg-no-repeat bg-cover w-full h-screen'>
        <Header />

        <Hero />
      </div>

      <CourseCurriculum />

      <MeetMyke />

      <LetsBuild />

      <Faq />

      <StartLearning />

      <Footer />
    </>
  );
};

export default Home;
