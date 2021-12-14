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

        //Startup

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

        //Pro

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

        'Business_ASO_2000': {
            app_limit: 30,
            keyword_limit: 2000,
            teammates_limit: 10,
            replies_limit: 100,
            keyword_stats_limit: 10000,
            tabs_available: 10
        },
        'Business_ASO_4000': {
            app_limit: 30,
            keyword_limit: 4000,
            teammates_limit: 10,
            replies_limit: 100,
            keyword_stats_limit: 20000,
            tabs_available: 10
        },
        'Business_ASO_6000': {
            app_limit: 30,
            keyword_limit: 6000,
            teammates_limit: 10,
            replies_limit: 100,
            keyword_stats_limit: 30000,
            tabs_available: 10
        },
        'Business_ASO_2000+Reviews_1000': {
            app_limit: 30,
            keyword_limit: 2000,
            teammates_limit: 10,
            replies_limit: 1000,
            keyword_stats_limit: 10000,
            tabs_available: 10
        },
        'Business_ASO_4000+Reviews_1000': {
            app_limit: 30,
            keyword_limit: 4000,
            teammates_limit: 10,
            replies_limit: 1000,
            keyword_stats_limit: 20000,
            tabs_available: 10
        },
        'Business_ASO_6000+Reviews_1000': {
            app_limit: 30,
            keyword_limit: 6000,
            teammates_limit: 10,
            replies_limit: 1000,
            keyword_stats_limit: 30000,
            tabs_available: 10
        },
        'Business_Reviews_2000': {
            app_limit: 10,
            keyword_limit: 200,
            teammates_limit: 5,
            replies_limit: 2000,
            keyword_stats_limit: 400,
            tabs_available: 10
        },
    }

    withTariff(Tariff) {
        return this.Plans[Tariff]
    }
}
