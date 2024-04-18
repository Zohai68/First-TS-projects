function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}`)
}

describe_city(`karachi`);
describe_city(`peshawar`,`Khyber Pakhtunkhwa`);
describe_city(`singapore`,`South Asia`);