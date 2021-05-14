(() => {
    const app = {
        initialize() { //   Dit is hetzelfde als initialize: function () {...}
            console.log('1. Application started!')
            this.showHeader();
            this.showLineup();
            this.showLineupInfo();
            this.showSocials();
            this.showClock();
            this.showFooter();
            this.showFilter();
        },
        showHeader() {
            console.log('2. Cache elements!')
            this.$header = document.querySelector('.header');
            let msg = '';

            // loopt door de data van de objecten
            msg += `
            <div class='announced-date'>
                <p><span class='date'>1 - 4 july</span><br>Festivalpark Werchter Belgium</p>
            </div>`
            msg += `<nav>`
            header.forEach((item) => {
                msg += `<li><a href='${item.link}'>${item.name}</a></li>`;
            });
            msg += `</nav>`

            this.$header.innerHTML = msg;
        },

        showFilter(){
            console.log("filtering days")
            this.$filterDays = document.querySelector('.filter-days')
            let msg = "";

            msg += `
            <li>Overzicht A-Z</li>
            <li class='blue'>Donderdag</li>
            <li class='blue'>Vrijdag</li>
            <li class='blue'>Zaterdag</li>
            <li class='blue'>Zondag</li>
            `


            this.$filterDays.innerHTML = msg;
        },

        showLineup() {
            // toont de lineups
            console.log("lineups")

            this.$lineup = document.querySelector('.lineupDiv')
            let msg = '';
            lineup.forEach((item) => {
                    msg += `
                <article class="artist">
                <img class="image-artist" src="${item.picture.small}" data-id="${item.id}">
                <h2>${item.artist.name}</h2>
                <p class='stage'>${item.isHeadliner ? 'Main stage' : item.place.name}</p>
                </article>`
            })
            
            this.$lineup.innerHTML = msg;


        },

        showLineupInfo() {
            const artists = document.querySelectorAll('.artist .image-artist');
            artists.forEach((item) => {
                item.addEventListener('click', (event) => {
                    const artistData = lineup.find((item) => item.id === event.target.dataset.id);
                    const $artistDetail = document.querySelector('#lineup-info');
                    console.log(artistData.id)
                    $artistDetail.innerHTML = `
            <article class="artist-info">
            <div class='artist-info__image'>
            <img class="image-artist" src="${artistData.picture.small}" data-id="${artistData.id}">
            <h2>${artistData.artist.name}</h2>
            <p class='name-and-day'><span class='bg-blue'>${getDay(artistData.from)}</span> <span class='bg-white'>${artistData.place.name}</span></p>
            </div>
            
            <p class='synopsis'>${artistData.artist.synopsis}</p>
            <a href="${artistData.artist.social.facebook}">Facebook</a>
            <a href="${artistData.artist.social.twitter}">Twitter</a>
            <a href="${artistData.artist.social.instagram}">Instagram</a><br>
            <iframe class="youtube-artist" width="560" height="315" src="${artistData.media.sourceId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            
            });

                function getDay(date) {
                    const day = new Date(date);
                    const days = [
                        'Zondag',
                        'Maandag',
                        'Dinsdag',
                        'Woensdag',
                        'Donderdag',
                        'Vrijdag',
                        'Zaterdag',
                    ];
                    return days[day.getDay()];
                }
            });
        },


        showSocials() {
            console.log("3. show socials")
            this.$socials = document.querySelector(".socials");
            let msg = "";

            social.forEach((item) => {
                msg += `<li><a href='${item.link}'>${item.name}</a></li>`;
            });
            this.$socials.innerHTML = msg;

        },

        showClock() {
            let countDownDate = new Date(1625148000000).getTime();

            let x = setInterval(function () {

                let now = new Date().getTime();

                let distance = countDownDate - now;

                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.querySelector(".clockDisplay").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "

                if (distance < 0) {
                    clearInterval(x);
                    document.querySelector(".clockDisplay").innerHTML = "EXPIRED";
                }
            }, 1000);
        },

        showFooter() {
            this.$footerLeft = document.querySelector('.left');
            this.$footerMiddle = document.querySelector('.middle');
            this.$footerRight = document.querySelector('.right');


            let msg = '';
            let msg2 = "";
            let msg3 = "";

            // loopt door de data van de objecten
            footerLeft.forEach((item) => {
                msg += `<li><a href='${item.link}'>${item.name}</a></li>`;
            });
            this.$footerLeft.innerHTML = msg;

            footerMiddle.forEach(item => {
                msg2 += `<li><a href='${item.link}'>${item.name}</a></li>`
            });
            this.$footerMiddle.innerHTML = msg2;

            footerRight.forEach(item => {
                msg3 += `
                <p>${item.name}</p>
                <input type='text' placeholder='email'><button>schrijf in</button>
                `
            });
            this.$footerRight.innerHTML = msg3;


        },

    };

    app.initialize();
})();

