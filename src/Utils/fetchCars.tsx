import { CarType } from "../Types";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f3c71cf5efmsh3104c46aeb586ebp1afd28jsn61f174e74820',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};
type FilterType ={
	make?: string,
	model?:string,
	limit?:string,
	fuel_type?: string,
	year?:string,

}
export async function fetchCars(filter: FilterType):Promise<CarType[]>{
//varsayılan değer ataması, birşey aratılmadığı zaman örneğin bmw m3 gelsin

const {	make="bmw", model="m3", limit="5", year="", fuel_type=""} = filter

    const res = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&limit=${limit}&fuel_type=${fuel_type}&year=${year}`,options)

    const data = await res.json()

    return data
}
