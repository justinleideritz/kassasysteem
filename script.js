let totaalPrijs = 0;

function calculate() {
    let aantalWater = parseFloat(document.getElementById("water").value);
    let prijsWater = isNaN(aantalWater) ? 0 : aantalWater * 1.5;;
    let waterArtikel = document.getElementById("waterArtikel");
    let aantalWaterNode = document.getElementById("aantalWater");
    let prijsWaterNode = document.getElementById("prijsWater");
    if (aantalWater > 0) {
        waterArtikel.textContent = "Water";
        aantalWaterNode.textContent = `${aantalWater} x € 1,50`;
        prijsWaterNode.textContent = `€ ${prijsWater.toFixed(2)}`;
    } else {
        waterArtikel.textContent = "";
        aantalWaterNode.textContent = "";
        prijsWaterNode.textContent = "";
    }

    let aantalCola = parseFloat(document.getElementById("cola").value);
    let prijsCola = isNaN(aantalCola) ? 0 : aantalCola * 2.25;;
    let colaArtikel = document.getElementById("colaArtikel");
    let aantalColaNode = document.getElementById("aantalCola");
    let prijsColaNode = document.getElementById("prijsCola");
    if (aantalCola > 0) {
        colaArtikel.textContent = "Cola";
        aantalColaNode.textContent = `${aantalCola} x € 2.25`;
        prijsColaNode.textContent = `€ ${prijsCola.toFixed(2)}`;
    } else {
        colaArtikel.textContent = "";
        aantalColaNode.textContent = "";
        prijsColaNode.textContent = "";
    }

    let aantalBroodjeKaas = parseFloat(document.getElementById("broodjeKaas").value);
    let prijsBroodjeKaas = isNaN(aantalBroodjeKaas) ? 0 : aantalBroodjeKaas * 3.5;;
    let broodjeKaasArtikel = document.getElementById("broodjeKaasArtikel");
    let aantalBroodjeKaasNode = document.getElementById("aantalBroodjeKaas");
    let prijsBroodjeKaasNode = document.getElementById("prijsBroodjeKaas");
    if (aantalBroodjeKaas > 0) {
        broodjeKaasArtikel.textContent = "Broodje kaas";
        aantalBroodjeKaasNode.textContent = `${aantalBroodjeKaas} x € 3.50`;
        prijsBroodjeKaasNode.textContent = `€ ${prijsBroodjeKaas.toFixed(2)}`;
    } else {
        broodjeKaasArtikel.textContent = "";
        aantalBroodjeKaasNode.textContent = "";
        prijsBroodjeKaasNode.textContent = "";
    }

    let aantalHamburger = parseFloat(document.getElementById("hamburger").value);
    let prijsHamburger = isNaN(aantalHamburger) ? 0 : aantalHamburger * 4.75;;
    let hamburgerArtikel = document.getElementById("hamburgerArtikel");
    let aantalHamburgerNode = document.getElementById("aantalHamburger");
    let prijsHamburgerNode = document.getElementById("prijsHamburger");
    if (aantalHamburger > 0) {
        hamburgerArtikel.textContent = "Hamburger";
        aantalHamburgerNode.textContent = `${aantalHamburger} x € 4.75`;
        prijsHamburgerNode.textContent = `€ ${prijsHamburger.toFixed(2)}`;
    } else {
        hamburgerArtikel.textContent = "";
        aantalHamburgerNode.textContent = "";
        prijsHamburgerNode.textContent = ""; 
    }
      // Bereken het totaalbedrag
      totaalPrijs = prijsWater + prijsCola + prijsBroodjeKaas + prijsHamburger;
    
      // Update het totaalbedrag op de pagina
      document.getElementById("totaalPrijs").textContent = `Totaal: €${totaalPrijs.toFixed(2)}`;
    
}
document.getElementById("totaalPrijs").textContent = `Totaal: €${totaalPrijs.toFixed(2)}`;
function reset() {
    let water = document.getElementById("water");
    water.value = 0;
    let cola = document.getElementById("cola");
    cola.value = 0;
    let broodjeKaas = document.getElementById("broodjeKaas");
    broodjeKaas.value = 0;
    let hamburger = document.getElementById("hamburger");
    hamburger.value = 0
    calculate();
}
