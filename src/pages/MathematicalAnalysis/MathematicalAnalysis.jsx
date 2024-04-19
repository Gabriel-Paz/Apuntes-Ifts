import PreviousAndNextLink from "../../components/PreviousAndNextLink/PreviousAndNextLink";
import {
  createIconPrimary,
  createIconRecord,
} from "../../utils/createIcons.js";
import Header from "../../components/Header/Header.jsx";
import Start from "../../components/Start/Start";
import Error from "../Error/Error";
import Class1 from "./MathematicalAnalysisClass/MathematicalAnalysisClass1.jsx";
import Class2 from "./MathematicalAnalysisClass/MathematicalAnalysisClass2.jsx";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer.jsx";

const classMathematicalAnalysisDefault = "Ocurrió un error";
const classesMathematicalAnalysis = {
  1: Class1,
  2: Class2,
};

const MathematicalAnalysis = () => {
  let { id } = useParams();

  const numericId = parseInt(id, 10);
  const subjectName = `matematica`;
  const page = `${subjectName}/${id}`;
  const nameClass = `Clase ${id}`;

  // Calculando rango de clases para controlar navegación
  const minId = 1;
  const maxId = Object.keys(classesMathematicalAnalysis).length;
  const isFirstClass = numericId === minId;
  const isLastClass = numericId === maxId;

  // Elegir ícono basado en la clase
  const mathematicalIcon =
    numericId !== 2 ? createIconPrimary(page) : createIconRecord(page);
  const ClassComponent = classesMathematicalAnalysis[numericId];

  if (isNaN(numericId) || numericId < minId || numericId > maxId) {
    return <Error />;
  }

  return (
    <>
      <Header items={mathematicalIcon} />
      <Start title={nameClass} />
      <PreviousAndNextLink
        number={numericId}
        name={subjectName}
        previous={!isFirstClass}
        next={!isLastClass}
      />
      <main>
        {ClassComponent ? (
          <ClassComponent numericId={numericId} />
        ) : (
          classMathematicalAnalysisDefault
        )}
      </main>
      <Footer />
    </>
  );
};

export default MathematicalAnalysis;