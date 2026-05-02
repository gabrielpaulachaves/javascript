//pegando arquivo json usando fetch

fetch("pessoas.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.IsTitan)))