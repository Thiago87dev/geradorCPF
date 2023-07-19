// 705.484.450-52 070.987.720-03
export default class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    isSequencia(){
        return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
    }

    geraNovoCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos)
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)
        this.novoCPF = cpfSemDigitos + digito1 + digito2
    }

    static geraDigito(cpfSemDigitos){
        let total = 0
        let reverso = cpfSemDigitos.length + 1

        for(let i of cpfSemDigitos){
            total += reverso * Number(i)
            reverso--
        }

        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito)
    }

    valida(){
        if(!this.cpfLimpo) return false
        if(typeof this.cpfLimpo !== 'string') return false
        if(this.cpfLimpo.length !== 11) return false
        if (this.isSequencia()) return false
        this.geraNovoCpf()

        return this.novoCPF === this.cpfLimpo
    }
}




