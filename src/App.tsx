import { Card } from "./components/Card";
import { GradientTitle } from "./components/GradientTitle";
import { BtnCallToAction } from "./components/BtnCallToAction";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center h-screen">
        <GradientTitle>
          Exemple React + TypeScript (composant)
          <br />
        </GradientTitle>
        <Card className="p-6 rounded-xl">
          <GradientTitle>
            Exemple React
            <br />
          </GradientTitle>
          <p>Contenu de la carte</p>
          <p>Contenu de la carte</p>
          <p>Contenu de la carte</p>
          <BtnCallToAction>Me contacter</BtnCallToAction>
        </Card>
      </main>
    </>
  );
}

export default App;
