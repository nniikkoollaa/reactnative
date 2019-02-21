export async function getUpcommingEvents(){
    try {
        return [
            {
                _id: 1,
                name: "Novi Sad AI #4.0 Event",
                location: "Startit Centar Novi Sad",
                date: "02/27/2019",
                description: "Event 1 description"
            },
            {
                _id: 2,
                name: "Vlatko Stefanovski Akustični Koncert",
                location: "Srpsko Narodno Pozoriste",
                date: "02/10/2019",
                description: "Event 1 description"
            },
            {
                _id: 3,
                name: "Green Love / Deborah De Luca",
                location: "SPENS Novi Sad",
                date: "03/09/2019",
                description: "Event 1 description"
            },
        ];

        let response = fetch('http://');
        let responseJson = await response.json();
        return responseJson.events;
    } catch (error){
        console.error(error);
    }
}

export async function getFeaturedEvents(){
    try {
        return [
            {
                _id: 4,
                name: "Humanitarni koncert 'Retko, ali važno'",
                location: "Studio M",
                date: "02/28/2019",
                description: "Event 1 description"
            },
            {
                _id: 5,
                name: "Svirka u knjižari // Rambo Amadeus",
                location: "Bulevard Books knjizara",
                date: "02/28/2019",
                description: "Event 1 description"
            },
            {
                _id: 6,
                name: "KONTEH - Sajam poslovnih mogućnosti i strucnih praksi",
                location: "Fakultet tehnickih nauka",
                date: "03/13/2019",
                description: "Event 1 description"
            }
        ];
    } catch(error) {

    }
}