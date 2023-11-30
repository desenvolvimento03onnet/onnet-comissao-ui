export default function animacaoOlhos(){
    const pupila = document.querySelector("#olho1");
    const pupila2 = document.querySelector("#olho2");
    return (
        document.addEventListener("mousemove", (e) => {
            let x = e.clientX * 50 / window.innerWidth - 50;
            let y = e.clientY * 50 / window.innerHeight - 50;
            
            pupila.style.left = x + "%";
            pupila.style.top = y + "%";
    
            pupila2.style.left = x + "%";
            pupila2.style.top = y + "%";
        })
    );
  }