import Header from "./components/Header";
import PersonalForm from "./components/Forms/PersonalForm";
import EducationForm from "./components/Forms/EducationForm";
import ExperienceForm from "./components/Forms/ExperienceForm";


function App() {
  return (
    <div className="App">
      <Header />
      <PersonalForm />
      <EducationForm />
      <ExperienceForm />
    </div>
  );
}

export default App;
