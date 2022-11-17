class CheckSixMonths {
  constructor(currentDE, lowDE, highDE, rebuyDE, dataField) {
    this.current = currentDE
    this.low = lowDE
    this.high = highDE
    this.rebuy = rebuyDE
    this.dataField = dataField
    this.averageUsage = []
    this.monthsArray = [1, 2, 3, 4, 5, 6]
    this.getAvg()
    this.getCalc()
  }
  getAvg() {
    this.averageUsage.push ((this.low + this.high)/2)
    document.querySelector('#average').innerText = `About ${this.averageUsage}`
  }
  getCalc() {
    this.monthsArray.forEach ( (el, i) => {
      if (this.current <= this.averageUsage) {
        let result = (this.current - this.averageUsage) + this.rebuy
        this.current = result 

        if(this.monthsArray[i] == 1) {
          this.dataField[i].innerText = `This Month: (Place Order) Current stock will be ${this.current}`
        } else if (this.monthsArray[i] == 2) {
          this.dataField[i].innerText = `Next Month: (Place Order) Current stock will be ${this.current}`
        } else {
          this.dataField[i].innerText = `Month ${i + 1}: (Place Order) Current stock will be ${this.current}`
        }
      } else {
        let result = this.current - this.averageUsage
        this.current = result

        if(this.monthsArray[i] == 1) {
          this.dataField[i].innerText = `This Month: Current stock is ${this.current}`
        } else if (this.monthsArray[i] == 2) {
          this.dataField[i].innerText = `Next Month: Current stock is ${this.current}`
        } else {
          this.dataField[i].innerText = `Month ${i + 1}: Current stock is ${this.current}`
      }
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
  let dataField = document.querySelectorAll('.data')

  let partNumber = new CheckSixMonths (currentDE, lowDE, highDE, rebuyDE, dataField)
}