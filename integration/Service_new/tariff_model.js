export class Tariffs {
    app_limit;
    keyword_limit;
    teammates_limit;
    replies_limit;
    keyword_stats_limit;
    tabs_available;

    Plans = {
        'Basic': {
            app_limit: 1,
            keyword_limit: 200,
            teammates_limit: 1,
            replies_limit: 100,
            keyword_stats_limit: 400,
            tabs_available: 1
        },
        'Startup_ASO_300': {
            app_limit: 5,
            keyword_limit: 300,
            teammates_limit: 3,
            replies_limit: 100,
            keyword_stats_limit: 600,
            tabs_available: 3
        },
        'Startup_ASO_700': {
            app_limit: 5,
            keyword_limit: 700,
            teammates_limit: 3,
            replies_limit: 100,
            keyword_stats_limit: 1400,
            tabs_available: 3
        },
        'Startup_ASO_1500': {
            app_limit: 5,
            keyword_limit: 1500,
            teammates_limit: 3,
            replies_limit: 100,
            keyword_stats_limit: 3000,
            tabs_available: 3
        },
        'Startup_ASO_300+Reviews_300': {
            app_limit: 5,
            keyword_limit: 300,
            teammates_limit: 3,
            replies_limit: 300,
            keyword_stats_limit: 600,
            tabs_available: 3
        },
        'Startup_ASO_700+Reviews_300': {
            app_limit: 5,
            keyword_limit: 700,
            teammates_limit: 3,
            replies_limit: 300,
            keyword_stats_limit: 1400,
            tabs_available: 3
        },
        'Startup_ASO_1500+Reviews_300': {
            app_limit: 5,
            keyword_limit: 1500,
            teammates_limit: 3,
            replies_limit: 300,
            keyword_stats_limit: 3000,
            tabs_available: 3
        },
        'Startup_Reviews_300': {
            app_limit: 2,
            keyword_limit: 200,
            teammates_limit: 2,
            replies_limit: 300,
            keyword_stats_limit: 400,
            tabs_available: 3
        },
        'Pro_ASO_700': {
            app_limit: 15,
            keyword_limit: 700,
            teammates_limit: 5,
            replies_limit: 100,
            keyword_stats_limit: 2100,
            tabs_available: 10
        },
        'Pro_ASO_1000': {
            app_limit: 15,
            keyword_limit: 1000,
            teammates_limit: 5,
            replies_limit: 100,
            keyword_stats_limit: 3000,
            tabs_available: 10
        },
        'Pro_ASO_1500': {
            app_limit: 15,
            keyword_limit: 1500,
            teammates_limit: 5,
            replies_limit: 100,
            keyword_stats_limit: 4500,
            tabs_available: 10
        },
        'Pro_ASO_700+Reviews_500': {
            app_limit: 15,
            keyword_limit: 700,
            teammates_limit: 5,
            replies_limit: 500,
            keyword_stats_limit: 2100,
            tabs_available: 10
        },
        'Pro_ASO_1000+Reviews_500': {
            app_limit: 15,
            keyword_limit: 1000,
            teammates_limit: 5,
            replies_limit: 500,
            keyword_stats_limit: 3000,
            tabs_available: 10
        },
        'Pro_ASO_1500+Reviews_500': {
            app_limit: 15,
            keyword_limit: 1500,
            teammates_limit: 5,
            replies_limit: 500,
            keyword_stats_limit: 4500,
            tabs_available: 10
        },
        'Pro_Reviews_500': {
            app_limit: 5,
            keyword_limit: 200,
            teammates_limit: 3,
            replies_limit: 500,
            keyword_stats_limit: 400,
            tabs_available: 1
        },
        'Pro_Reviews_1000': {
            app_limit: 5,
            keyword_limit: 200,
            teammates_limit: 3,
            replies_limit: 1000,
            keyword_stats_limit: 400,
            tabs_available: 1
        },

        // Business
        'Business_ASO_2000': {},
        'Business_ASO_4000': {},
        'Business_ASO_6000': {},
        'Business_ASO_2000+Reviews_1000': {},
        'Business_ASO_4000+Reviews_1000': {},
        'Business_ASO_6000+Reviews_1000': {},
        'Business_Reviews_2000': {},
    }

    withTariff(Tariff) {
        return this.Plans[Tariff]
    }

}

// let app_limit;
// let keyword_limit;
// let teammates_limit;
// let replies_limit;
// let keyword_stats_limit;
// let tabs_available;
//
// export function Basic() {
//     app_limit = 1;
//     keyword_limit = 200;
//     teammates_limit = 1;
//     replies_limit = 100;
//     keyword_stats_limit = 400;
//     tabs_available = 1
//     return {app_limit, teammates_limit, replies_limit, keyword_limit, keyword_stats_limit, tabs_available}
// }
//
// export function Startup(Tariff) {
//     // let reports
//     Basic.call(this);
//
//     // this.reports = [];
//     if (Tariff === 'ASO_300') {
//         return {
//             app_limit: 5,
//             keyword_limit: 300,
//             teammates_limit: 3,
//             replies_limit: 100,
//             keyword_stats_limit: 600,
//             tabs_available: 3
//         }
//     } else if (Tariff === 'ASO_700') {
//         return {
//             app_limit: 5,
//             keyword_limit: 700,
//             teammates_limit: 3,
//             replies_limit: 100,
//             keyword_stats_limit: 1400,
//             tabs_available: 3
//         }
//     } else if (Tariff === 'ASO_1500') {
//         return {
//             app_limit: 5,
//             keyword_limit: 1500,
//             teammates_limit: 3,
//             replies_limit: 100,
//             keyword_stats_limit: 3000,
//             tabs_available: 3
//         }
//     } else if (Tariff === 'ASO+Reviews_300') {
//         return {
//             app_limit: 2,
//             keyword_limit: 200,
//             teammates_limit: 2,
//             replies_limit: 300,
//             keyword_stats_limit: 400,
//             tabs_available: 1
//         }
//     }
//
// }
//
// export function ASO(Tariff) {
//     // let reports
//     Basic.call(this);
//     // this.reports = [];
//     if (Tariff === 'Startup') {
//         return {
//             app_limit: 5,
//             keyword_limit: 200,
//             teammates_limit: 3,
//             replies_limit: 300,
//             keyword_stats_limit: 300
//         }
//     } else if (Tariff === 'Pro') {
//         return {
//             app_limit,
//             keyword_limit: 2200,
//             teammates_limit: 33,
//             replies_limit: 3300,
//             keyword_stats_limit: 3300
//         }
//     } else if (Tariff === 'Business') {
//         return {
//             app_limit,
//             keyword_limit: 2200,
//             teammates_limit: 33,
//             replies_limit: 3300,
//             keyword_stats_limit: 3300
//         }
//     } else if (Tariff === 'Business_300+Review_700') {
//         return {
//             app_limit,
//             keyword_limit: 200,
//             teammates_limit: 10,
//             replies_limit: 700,
//             keyword_stats_limit: 3300
//         }
//     }
//
//
//     let Pro = {}
//
//     let Business = {}
//
//     return Tariff
//
// }
//
// export function PRO() {
//     // let reports
//     ASO.call(this);
//     // this.reports = [];
//
//     // app_limit = 5;
//     return {app_limit, keyword_limit, teammates_limit, replies_limit}
//
// }

// ASO.prototype = Object.create(Basic.prototype);
// ASO.prototype.constructor = ASO;



