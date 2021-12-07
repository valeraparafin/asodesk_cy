let app_limit;
let keyword_limit;
let teammates_limit;
let reply_limit;
let keyword_stats_limit;
let tabs_available;

export function Basic() {
    app_limit = 1;
    keyword_limit = 200;
    teammates_limit = 1;
    reply_limit = 100;
    keyword_stats_limit = 200;
    tabs_available = 1
    return {app_limit, teammates_limit, reply_limit, keyword_limit, keyword_stats_limit, tabs_available}
}

export function ASO(Tariff) {
    // let reports
    Basic.call(this);
    // this.reports = [];
    if (Tariff === 'Startup') {
        let startup;
        return {
            app_limit: 5,
            keyword_limit: 200,
            teammates_limit: 3,
            reply_limit: 300,
            keyword_stats_limit: 300
        }
    }
    else if (Tariff === 'Pro') {
        let startup;
        return {
            app_limit,
            keyword_limit: 2200,
            teammates_limit: 33,
            reply_limit: 3300,
            keyword_stats_limit: 3300
        }
    }

    else if (Tariff === 'Business') {
        let startup;
        return {
            app_limit,
            keyword_limit: 2200,
            teammates_limit: 33,
            reply_limit: 3300,
            keyword_stats_limit: 3300
        }
    }


    let Pro = {}

    let Business = {}

    return Tariff

}

export function PRO() {
    // let reports
    ASO.call(this);
    // this.reports = [];

    // app_limit = 5;
    return {app_limit, keyword_limit, teammates_limit, reply_limit}

}

// ASO.prototype = Object.create(Basic.prototype);
// ASO.prototype.constructor = ASO;



