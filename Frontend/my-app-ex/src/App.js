
function App() {
  return (
    
      <div> 
        <nav>
          <a href="#">
            Shimelis
          </a>
          <div>
            <li>
              <Link to={"/tutorial"}>
              Tutorials
              </Link>
            </li>
            <li>
              <Link to= {"/add"}>
              Add
              </Link>
            </li>
          </div>
        </nav>
        <div>
          <Route path="/" element={<TutorialsList/>}/>
          <Route path="/tutorials" element={<TutorialsList/>}/>
           <Route path="/add" element={<TutorialsList/>}/> 
            <Route path="/tutorials/:id" element={<TutorialsList/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
