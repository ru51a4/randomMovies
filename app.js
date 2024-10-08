let movies = [
    { pic: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/05192b4e-6bfe-4140-93b2-00472a1b392f/300x', name: 'Гладиатор', genre: ['история', 'боевик', 'драма', 'приключения'], year: 2000, link: 'https://www.kinopoisk.ru/film/474' },
    { pic: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/7dfa6dbd-15ea-41e9-b869-63dd33ffdb0d/300x', name: 'Властелин колец: Возвращение короля', genre: ['фэнтези', 'приключения', 'боевик'], year: 2003, link: 'https://www.kinopoisk.ru/film/3498' },
    { pic: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/02c6b4cb-a610-4503-9e8c-9dee69b5a584/300x', name: 'Пираты карибского моря: Проклятие Черной жемчужины', genre: ['фэнтези', 'боевик', 'приключения'], year: 2003, link: 'https://www.kinopoisk.ru/film/4374' },
    { pic: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/b4dc319b-c605-4445-a56c-9c27b787b5f4/1920x', name: 'Гордость и предубеждение', genre: ['мелодрама', 'история'], year: 2005, link: 'https://www.kinopoisk.ru/film/81733' },
    { pic: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/6466f696-9b0a-458c-9367-410e3677380f/1920x', name: 'Герцогиня', genre: ['драма', 'мелодрама', 'биография', 'история'], year: 2008, link: 'https://www.kinopoisk.ru/film/393872' },
    { pic: 'https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/7f0e6761-4635-46ad-b804-59d5cf1ae85c/300x450', name: 'Титаник', genre: ['мелодрама', 'история', 'триллер', 'драма'], year: 2008, link: 'https://www.kinopoisk.ru/film/2213' },
    { pic: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/9e9e2b2c-a3c1-462e-8d84-e6a19fbe5b9c/300x450', name: 'Пятый элемент', genre: ['фантастика', 'боевик', 'комедия', 'мелодрама'], year: 1997, link: 'https://www.kinopoisk.ru/film/2656' },
]


class main extends component {
    state = {
        current: movies,
        empty: () => {
            return !this.state.current.length;
        }
    }
    filter() {
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }
        //todo new feature - event select
        let el = document.querySelector(`#genre`)
        let g = el.options[el.selectedIndex].text.toLowerCase();
        let res = movies.filter((elem) => elem.genre.includes(g));
        let cFilm = res[getRandomInt(res.length - 1)];
        this.state.current = !el.selectedIndex ? movies : cFilm ? [cFilm] : [];
    }
    body() {
        return `
        <div>
            <div class="generator">
                <div class="generator__container">
                    <div class="container_title">
                        <h1>Генератор случайных фильмов</h1> 
                    </div>
                    <div class="container__choice">
                        <select class="container__select" name="genre" id="genre">
                            <option value="">Выберите жанр</option>
                            <option value="history">История</option>
                            <option value="action">Боевик</option>
                            <option value="drama">Драма</option>
                            <option value="adventures">Приключения</option>
                            <option value="fantasy">Фентези</option>
                            <option value="melodrama">Мелодрама</option>
                            <option value="biography">Биография</option>
                            <option value="thriller">Триллер</option>
                            <option value="comedy">Комедия</option>
                            <option value="family">Семейный</option>
                            <option value="fantastic">Фантастика</option>
                        </select>
                        <div class="generator__button">
                            <button r-click="filter" class="button_style">Случайный фильм</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="movies">
                <div class="movies__container container_list">
                    <film r-for="current">
                </div>
            </div>
            <div style="display:flex; justify-content:center">
                <h3 r-if="empty">empty</h3>
            </div>
        </div>
        `
    }
}

class film extends component {
    state = {
        pic: () => { return this.getProps().pic },
        name: () => { return this.getProps().name },
        desc: () => { return this.getProps().genre.join(",") + '<br>' + this.getProps().year },
        link: () => { return this.getProps().link }
    }
    body() {
        return `
        <div class="list-movie">
            <img r-bind.src="pic" class="img-style">
            </img>
            <h3 r-bind="name">
            </h3>
            <p r-bind="desc" style="margin-top: auto;width: 100%;" class="p-style">
                
            </p>
            <a class="a-style" r-bind.href="link">
                Фильм на кинопоиске
            </a>
        </div>`
    }
}