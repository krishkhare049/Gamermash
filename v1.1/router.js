


const router = new Navigo("/", { hash: true });

// router.hooks({
//   before(done, match) {
//   },
// leave(done, match) {
// }
// });

// Page-s routing-

router.navigate("/");



router
    .on("/", () => {

        console.log("HOME");

        home_icon.classList.add("active_nav_icon");
        games_icon.classList.remove("active_nav_icon");
        creator_icon.classList.remove("active_nav_icon");

        home_page.classList.add("active_page");
        games_page.classList.remove("active_page");
        aboutme_page.classList.remove("active_page");

        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(0, 0);

    })
    .on("/games", () => {

        console.log("GAMES");

        home_icon.classList.remove("active_nav_icon");
        games_icon.classList.add("active_nav_icon");
        creator_icon.classList.remove("active_nav_icon");

        home_page.classList.remove("active_page");
        games_page.classList.add("active_page");
        aboutme_page.classList.remove("active_page");

        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(1, 0);

    })
    .on("/creator", () => {

        console.log("ABOUT ME");

        home_icon.classList.remove("active_nav_icon");
        games_icon.classList.remove("active_nav_icon");
        creator_icon.classList.add("active_nav_icon");

        home_page.classList.remove("active_page");
        games_page.classList.remove("active_page");
        aboutme_page.classList.add("active_page");

        // Scroll body to top-
        document.body.scrollTo(0, 0);

        // PAGE_SWIPER.slideTo(3, 0);

    })

home_icon.addEventListener("click", () => {

    router.navigate("");

});

play_games_here.addEventListener("click", () => {

    router.navigate("games");

});
games_icon.addEventListener("click", () => {

    router.navigate("games");

});

creator_icon.addEventListener("click", () => {

    router.navigate("creator");

});