import Header from "./components/Header";
import ListOfDocs from "./components/ListOfProjects";


export default function Home() {
  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start" style={{width: '100%'}}>
        <ListOfDocs />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
