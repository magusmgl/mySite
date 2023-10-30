function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

    const ul = document.querySelector('.skills_block__list');
    const url = 'http://localhost:3000/skils';

fetch(url)
    .then((resp) => resp.json())
    .then(function(skills) {
        return skills.map(function(skill) {
            let li = createNode('li');
            let p = createNode('p');
            let barContainer = createNode('div');
            let bar = createNode('div');

            li.classList.add("skills_block__item");
            barContainer.classList.add("skills-block__bar-container");
            bar.classList.add("skills-block__bar");

            p.innerHTML = `${skill.name.toUpperCase()}`;
            bar.innerHTML = `${skill.level}%`
            bar.style.width = `${skill.level}%`

            append(li, p);
            append(barContainer, bar)
            append(li, barContainer)
            append(ul, li);
        })
    })
    .catch(function(error) {
        console.log(error);
    });
