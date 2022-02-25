const projects = [
	{
		name: 'The Shoe Store',
		imagename: 'the-shoe-store',
		category: 'webapp',
		url: 'https://the-shoe-store.netlify.app',
		featured: true,
	},
	{
		name: 'Be a Pro',
		imagename: 'be-a-pro',
		category: 'mobileapp',
		url: 'https://play.google.com/store/apps/details?id=com.the_productivity_app',
		featured: true,
	},
	{
		name: 'Take a Quiz',
		imagename: 'take-a-quiz',
		category: 'webapp',
		url: 'https://stee1ix.github.io/take-a-quiz/',
		featured: true,
	},

	{
		name: 'Foodelic',
		imagename: 'foodelic',
		category: 'mobileapp',
		url: 'https://expo.dev/@stee1ix/Foodelic',
	},
	{
		name: 'Football Stats UI',
		imagename: 'football-ui',
		category: 'ui',
		url: 'https://dribbble.com/shots/17280660-Football-Stats-and-News-App-UI',
	},
	{
		name: 'Game Store UI',
		imagename: 'game-shop-ui',
		category: 'ui',
		url: 'https://dribbble.com/shots/17431334-Game-Shop-Mobile-UI',
		featured: true,
	},
	{
		name: 'Be a Pro',
		imagename: 'be-a-pro-ui',
		category: 'ui',
		url: 'https://dribbble.com/shots/17280607-Be-a-Pro-Todo-List-App-Night-Theme-UI',
	},
	{
		name: 'Juiice UI',
		imagename: 'juice-ui',
		category: 'ui',
		url: 'https://dribbble.com/shots/17431399-Material-You-Login-Mobile-UI',
	},
	{
		name: 'Social Change',
		imagename: 'social-change-ui',
		category: 'ui',
		url: 'https://dribbble.com/shots/17280652-Social-Media-App-UI',
	},
	{
		name: 'Picsplash UI',
		imagename: 'picsplash-ui',
		category: 'ui',
		url: 'https://dribbble.com/shots/17431363-Picture-Sharing-Mobile-UI',
		featured: true,
	},
	{
		name: 'Smartflix',
		imagename: 'smartflix-ui',
		category: 'ui',
		url: 'https://dribbble.com/shots/17280644-Dark-Theme-Batman-Movie-Landing-Web-Page',
	},
];

const featuredbutton = document.querySelector('#featured');
const webappbutton = document.querySelector('#webapp');
const mobileappbutton = document.querySelector('#mobileapp');
const uibutton = document.querySelector('#ui');

const cards = document.querySelector('.cards');

const filterProjects = (projectsArray, category) => {
	cards.innerHTML = '';

	if (category === 'featured') {
		projectsArray.forEach(project => {
			if (project.featured === true) {
				const div = document.createElement('div');
				div.className = 'card';
				div.innerHTML = `
                <a href=${project.url} target="_blank">
                    <img src="./assets/${project.imagename}.png" alt="${project.name}">
                </a>
                <h4>${project.name}</h4>
            `;
				console.log(project.imagename);

				cards.appendChild(div);
			}
		});
	} else {
		projectsArray.forEach(project => {
			if (project.category === category) {
				const div = document.createElement('div');
				div.className = 'card';
				div.innerHTML = `
                <a href=${project.url} target="_blank">
                    <img src="./assets/${project.imagename}.png" alt="${project.name}">
                </a>
                <h4>${project.name}</h4>
            `;
				console.log(project.imagename);

				cards.appendChild(div);
			}
		});
	}
};

featuredbutton.addEventListener('click', () => {
	filterProjects(projects, 'featured');
});

webappbutton.addEventListener('click', () => {
	filterProjects(projects, 'webapp');
});

mobileappbutton.addEventListener('click', () => {
	filterProjects(projects, 'mobileapp');
});

uibutton.addEventListener('click', () => {
	filterProjects(projects, 'ui');
});
