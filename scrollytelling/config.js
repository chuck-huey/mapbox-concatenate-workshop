var config = {
	style: 'mapbox://styles/chuck-huey/ck1j5acuq11481cmj9v3kxfnv', //TODO
	accessToken:
		'pk.eyJ1IjoiY2h1Y2staHVleSIsImEiOiJjazFqMjducXgwNjhqM25tdTE2MmxiY3ozIn0.R8Y-O3ZC1YIkE6KPTBdkAA', //TODO
	title: 'A Short View of my life in Lagos', //TODO
	subtitle: 'My Journey in Lagos, so far...', //TODO
	byline: 'By Ochuko Ekrresa', //TODO
	footer: "Created at Concatenate Lagos 2019, Anjana Vakil's Workshop on MapBox",
	showMarkers: true,
	theme: 'light',
	alignment: 'left',
	chapters: [
		//TODO replace this data with data from the first point in your dataset
		{
			id: 'okota-lagos',
			title: 'Okota, Lagos',
			description: 'The first place I stayed in Lagos. The rent emptied my account at the time.',
			location: {
				center: [3.314588, 6.520303],
				zoom: 16.62894241527768,
				pitch: 60,
				bearing: 12.7999999999995,
			},
		},
		{
			id: 'ihs-towers',
			title: 'IHS Nigeria',
			description:
				'My first job in Lagos. Worked as a Field Engineer. I started working here during my youth service.',
			location: {
				center: [3.411829, 6.428367],
				zoom: 16.62894241527768,
				pitch: 60,
				bearing: 12.7999999999995,
			},
		},
		{
			id: 'decagon',
			title: 'Decagon Institute',
			description:
				'My first job as a Software Engineer. I was trained in web development, and the management refused to let me go, lol. Also, met my girlfriend here.',
			location: {
				center: [3.525621, 6.438452],
				zoom: 16.62894241527768,
				pitch: 60,
				bearing: 12.7999999999995,
			},
		},
		{
			id: 'atlantic',
			title: 'Atlantic View Estate',
			description: 'My current home.',
			location: {
				center: [3.524019, 6.426156],
				zoom: 16.62894241527768,
				pitch: 60,
				bearing: 12.7999999999995,
			},
		},
		//TODO Copy-paste more chapters here - one for each point in your dataset!
	],
};
