/* Context:
    You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.
*/


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
}
  
// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}
  
// Create a pAequor specimen factory function
const pAqequorFactory = (number, dna) => {
    return {
        specimenNum: number,
        dna: dna,

        // Mutates the DNA
        mutate() {
            const randomBase = Math.floor(Math.random() * this.dna.length);
            let newStrand;
            do {
                newStrand = returnRandBase();
            } while (newStrand === this.dna[randomBase])
            this.dna[randomBase] = newStrand;
        },

        // Compares the DNA with other specimen's DNA, shows percentage of similarity
        compareDNA(otherSpecimen) {
            let matches = 0;
            let percentage;
            for (let i = 0; i < this.dna.length; i++) {
                if (this.dna[i] === otherSpecimen.dna[i]) {
                matches++;
                }
            }
            percentage = (matches / this.dna.length * 100).toFixed(2);
            console.log(`Specimen #${this.specimenNum} and specimen #${otherSpecimen.specimenNum} have ${percentage}% DNA in common`);
        },

        // Returns "true" if 60% or more of DNA is "C" or "G"
        willLikelySurvive() {
            let counter = 0;
            this.dna.forEach(base => {
                if (base === 'C' || base === 'G') {
                    // console.log(base)
                    counter++;
                }
            })

            return counter / this.dna.length >= 0.6 ? true : false;
        }
    }
}

// Array for specimens that will likely to survive
const potentials = [];

// Create 30 random specimens
for (let i = 0; i < 30; i++) {
    const newOrganism = pAqequorFactory(i, mockUpStrand());
    if (newOrganism.willLikelySurvive()) {
        potentials.push(newOrganism);
    }   
}

// Log out the specimens that will likely to survive
console.log(potentials)
  
  
  
  
  
  