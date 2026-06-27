import Navbar from "~/components/navbar";
import type { Route } from "./+types/home";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CV Update" },
    { name: "description", content: "Welcome to CV Update!" },
  ];
}

export default function Home() {


    const{auth} = usePuterStore();
    const navigate = useNavigate();
    
    useEffect(() => { if (!auth.isAuthenticated) navigate('/auth?next=/')  }, [auth.isAuthenticated]);

  return <main className="bg-[url('/images/bg-main.svg')]">
    <Navbar />
     <section className="main-section ">
      <div className="page-heading py-16">
        <h1> Mets a jour ton CV en 1 minutes</h1>
        <h2> Optimises ton CV et augmentes tes chances de trouver un emploi</h2>
      </div>

      {resumes.length > 0 && (
       <div className="resumes-section">
      {
      resumes.map((resume)=>(
        <ResumeCard key={resume.id} resume={resume}/>
      ))
    }
      </div>
    )}
    </section>
    
    
  </main>;
}
