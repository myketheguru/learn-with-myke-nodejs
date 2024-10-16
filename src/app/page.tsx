import CourseCurriculum from "@/components/course-curriculum";
import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import LetsBuild from "@/components/lets-build";
import MeetMyke from "@/components/meet-myke";
import StartLearning from "@/components/start-learning";
import { coursesIdMap } from "@/lib/course-map";

const Home = async () => {

  const courseId = coursesIdMap["nodejs_backend"]
  let data = await fetch(
    `https://bknd.withmyke.com/api/course/${courseId}`
  ); // Get NodeJS course Info
  let course = await data.json();

  return (
    <>
      <div className="relative bg-[url(/hero-lines.svg)] bg-[center_0] bg-no-repeat bg-cover w-full min-h-screen">
        <Header />

        <Hero courseData={course} />
      </div>

      <CourseCurriculum />

      <MeetMyke />

      <LetsBuild />

      <Faq />

      <StartLearning courseData={course} />

      <Footer />
    </>
  );
};

export default Home;
