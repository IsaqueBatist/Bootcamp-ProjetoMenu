function calc() {
  var total =0
  var resp = document.getElementById('resp')
  resp.innerHTML=''
  var name = document.getElementById('iname')
  resp.innerHTML += `<p>Caro <strong>${name.value}</strong></p><p>Segue os dados do seu pedido</p><p>O seu pedido é:</p>`
  var dishes = document.getElementsByName('quantity')
  for (var input of dishes) {
    var prato = input.id
    var price = input.getAttribute('data-price')
    var quant = input.value
    if (quant!=0){
    resp.innerHTML += `<li>Prato: ${prato} Preço unitário: R$${price} - Quantidade ${quant} - Total R$${Number(price) * Number(quant)} <br>`
    total += Number(price) * Number(quant)
    }
  }
  resp.innerHTML +=  `<p><strong>Preço final: R$${total}</strong></p>`

}