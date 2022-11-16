class CheckSixMonths {
  constructor(currentDE, lowDE, highDE, rebuyDE) {
    this.current = currentDE
    this.low = lowDE
    this.high = highDE
    this.rebuy = rebuyDE
    this.averageUsage = []
    this.monthsArray = [1, 2, 3, 4, 5, 6]
    this.getAvg()
    //this.getCalc()
  }
  getAvg() {
    this.averageUsage.push ((this.low + this.high)/2)
    document.querySelector('#average').innerText = this.averageUsage
  }
  getCalc() {
    this.monthsArray.forEach ( el => {
      if (this.crrent < this.averageUsage) {
        let result = (this.current - this.averageUsage) + rebuyDE.innerText
        this.current = result 
      } else {
          let result = this.current - this.averageUsage
          this.current = result
          //Show `After month #${el} stock will be @ ${this.current}
      }
    })
  }
}

document.querySelector('#getCalc').addEventListener('click', lightningProcure)

function lightningProcure() {
  let currentDE = Number(document.querySelector('#currentInput').value)
  let lowDE = Number(document.querySelector('#lowInput').value)
  let highDE = Number(document.querySelector('#highInput').value)
  let rebuyDE = Number(document.querySelector('#rebuyInput').value)

  let partNumber = new CheckSixMonths (currentDE, lowDE, highDE, rebuyDE)
  console.log(partNumber)
}