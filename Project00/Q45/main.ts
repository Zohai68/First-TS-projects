type car = {
    manufacture: string
    model: string
    [key: string]: any;
}
function create_car(manufacture: string, model: string, optional: Record<string, any>): car {
return{
    manufacture,
    model,
    ...optional
}
}

const mycar: car = create_car("Honda","Gli", {color: "black", year: "2024"})
console.log(mycar);