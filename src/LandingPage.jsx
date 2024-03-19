

function LandingPage() {
    return ( <div className="headerBg text-white h-[600px]">
    <header className="flex justify-between item-center px-9 py-8">
      <h1>Logga</h1>
      <nav className="">
        <ul className="flex gap-4 text-xl">
          <li>YH-utbildningar</li>
          <li>Studera hos oss</li>
          <li>Om oss</li>
          <li>Aktuellt</li>
        </ul>
      </nav>
      <button className="bg-blue-400 px-5 py-2 rounded-3xl uppercase 
      font-light tracking-wider hover:bg-white hover:text-blue-400">Ansök</button>
    </header>
    <main className="w-[100%] flex justify-center">
    <div className="flex flex-col items-center justify-center w-[550px]">
      <p className="font-bold text-6xl text-center py-20">CHAS ACADEMY - STEGET NÄRMARE EN KARRIÄR INOM IT</p>
      <p className="w-64 text-lg text-center">CHAS ACADEMY ÄR EN YRKESHÖGSKOLA SOM FÖRBEREDER DIG FÖR ETT ARBETSLIV INOM IT. VILL DU VARA MED PÅ RESAN TILL VÄRLDENS BÄSTA BRANSCH?</p>
    </div>
  </main>
  </div>) 
   
}

export default LandingPage;