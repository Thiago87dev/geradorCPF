import GeraCPF from "./modules/GeraCPF"
import './assets/css/style.css'

const gera = new GeraCPF()
const resultado = document.querySelector('.res')
const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
    resultado.innerHTML = gera.geraNovoCPF()
})
