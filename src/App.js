import React from 'react';
import Container from "./Container"
import Header from "./Header";
import Section from "./Section";
import Form from "./Section/Form";
import Result from "./Section/Result";
import Footer from "./Footer";

function App() {
  return (
    <Container>
      <Header title="Internetowy kantor" />
      <Section
        title="Wprowadź dane:"
        body={<Form />}
      >
      </Section>
      <Section
        title="Wynik:"
        body={<Result />}
      >
      </Section>
      <Footer
        title="Kontakt:">
      </Footer>
    </Container>
  );
};

export default App;
