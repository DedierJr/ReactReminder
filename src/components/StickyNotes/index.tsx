import { For } from "million/react";
import { useContext } from "react";
import NotesContext from "../../hooks/notesContext";
import { Container, Grid } from "./styles";

export function StickyNotes() {
  const { notes } = useContext<any>(NotesContext);

  // Função para calcular a cor com base no índice
  const calcularCor = (index: number) => {
    const cores = ["--cor_1", "--cor_2", "--cor_3"];
    const corIndex = index % cores.length;
    return `var(${cores[corIndex]})`;
  };

  return (
    <Container>
      <div className="reminderTitle">
        <h1>Lembretes - {notes.length}</h1>
      </div>
      <Grid>
        <For each={notes} as="div" index>
          {(nota: any, index: number) => (
            <div key={nota.title} style={{ backgroundColor: calcularCor(index) }}>
              <h2>{nota.title}</h2>
              <p>{nota.description}</p>
            </div>
          )}
        </For>
      </Grid>
    </Container>
  );
}
