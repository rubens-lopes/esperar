# Esperar

Micro lib com o intuito de viabilizar o uso de _timeouts_ de maneira assíncrona.

# Exemplo

```javascript
import esperar from `@rubens.lopes/esperar`

console.log(`espera 3 segundos`)
await esperar(3)
console.log(`esperou 3 segundos`)
```