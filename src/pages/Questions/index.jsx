import AddQuestion from "../../components/questions/AddQuestion";
import QuestionsList from "../../components/questions/QuestionsList";

export default function Questions() {
  return (
    <div className="space-y-10">
      <AddQuestion />
      <QuestionsList />
    </div>
  );
}
