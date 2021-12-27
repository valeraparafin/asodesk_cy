/// <reference types="cypress" />
import {Features, Tariffs} from './Classes_library/tariffs'
import {Auth} from "./Classes_library/Auth";
import {Commands} from "./Classes_library/Commands";
import {Plan} from "./Classes_library/accounts_storage";


const auth = new Auth();
const commands = new Commands();
const accounts = new Plan();
const tariffs = new Tariffs();
const features = new Features();
let info;
let feature;

for (let account in accounts.Plans) {
    describe(account + ' tariff should be exactly same as in the document  ', () => {
        //doc: shorturl.at/wOS49

        before('obtain as user with ' + account + ' tariff', () => {
            auth.obtain(accounts.withPlan(account))
        })

        it('Get sidebar info', () => {
            getSidebarInfo();
            getRequestInfo();
        });

        if (tariffs.Plans) {
            it('Compare ' + account + ' model with server JSON', function () {
                const Model_Limits = tariffs.withTariff(account)
                const Model_Limits2 = features.withTariff(account)
                // const Model_Limits3 = features2.withTariff(account)
                console.log(Model_Limits2)
                let User_Limits = {
                    app_limit: info.subscription.app_limit,
                    keyword_limit: info.subscription.keyword_limit,
                    teammates_limit: info.subscription.teammates_limit,

                    replies_limit: info.replies_limit,
                    keyword_stats_limit: info.keyword_stats_limit
                }
                let User_Permissions = {
                    limited_aso_cr: feature.user.available_features["limited-aso-cr"].no_show,
                    limited_table_aso_cr: feature.user.available_features["limited-table-aso-cr"].no_show,
                    kas_good_for_boosting: feature.user.available_features["kas-good-for-boosting"].no_show,
                    googleplayconsole: feature.user.available_features["googleplayconsole"].no_show,
                    appstoreconnect: feature.user.available_features["appstoreconnect"].no_show,
                    app_reviews: feature.user.available_features["app-reviews"].no_show,
                    category_ranking_basic: feature.user.available_features["category-ranking-basic"].no_show,
                    // aso_dashboard: feature.user.available_features["aso-dashboard"].no_show,
                    // traffic_score: feature.user.available_features["traffic-score"].no_show,
                    // optimizer_base: feature.user.available_features["optimizer_base"].no_show,
                    // category_ranking_extended: feature.user.available_features["category-ranking-extended"].no_show,
                    // simple_priority: feature.user.available_features["simple-priority"].no_show,
                    // simple_export: feature.user.available_features["simple-export"].no_show,
                    // week_export: feature.user.available_features["week-export"].no_show,
                    // keyword_manager_advanced: feature.user.available_features["keyword-manager-advanced"].no_show,
                    // km_competitor_keywords: feature.user.available_features["km-competitor-keywords"].no_show,
                    // km_searchads_suggestions: feature.user.available_features["km-searchads-suggestions"].no_show,
                    // km_text_analyzer: feature.user.available_features["km-text-analyzer"].no_show,
                    // km_competitor_keywords_all_tabs: feature.user.available_features["km-competitor-keywords-all-tabs"].no_show,
                    // keyword_density_counter: feature.user.available_features["keyword-density-counter"].no_show,
                    // keyword_shuffler: feature.user.available_features["keyword-shuffler"].no_show,
                    // review_analysis: feature.user.available_features["review-analysis"].no_show
                }
                compareLimits(Model_Limits, User_Limits)
                comparePermissions(Model_Limits2, User_Permissions)
            });
        }
    });
}

function compareLimits(Local, Prod) {
    chai.expect(Local.app_limit).eq(Prod.app_limit, 'App limit');
    chai.expect(Local.keyword_limit).eq(Prod.keyword_limit, 'Keyword limit');
    chai.expect(Local.teammates_limit).eq(Prod.teammates_limit, 'Teammates limit');
    chai.expect(Local.replies_limit).eq(Prod.replies_limit, 'Replies limit');
    chai.expect(Local.keyword_stats_limit).eq(Prod.keyword_stats_limit, 'Keyword stats limit');
}

function comparePermissions(Local, Prod) {
    if (account === 'basic') {chai.expect(Local.limited_aso_cr).eq(Prod.limited_aso_cr, 'Comparative Report Graph');
        chai.expect(Local.limited_table_aso_cr).eq(Prod.limited_table_aso_cr, 'Comparative Report Table');
        chai.expect(Local.kas_good_for_boosting).eq(Prod.kas_good_for_boosting, 'Boosting Campaign');
        chai.expect(Local.googleplayconsole).eq(Prod.googleplayconsole, 'Google Play Console');
        chai.expect(Local.appstoreconnect).eq(Prod.appstoreconnect, 'App Store Connect');
        chai.expect(Local.app_reviews).eq(Prod.app_reviews, 'App Reviews');
        chai.expect(Local.category_ranking_basic).eq(Prod.category_ranking_basic, 'Category Ranking');}

}

function getSidebarInfo() {
    cy.request({
        method: 'GET',
        url: 'api/sidebar-info', // baseUrl is prepended to url
        headers: {
            'accept': 'application/json',
            'Authorization': auth.token,
        }
    })
        .then((response) => {
            info = response.body
        })
}

function getRequestInfo() {
    cy.request({
        method: 'GET',
        url: 'api/request-info', // baseUrl is prepended to url
        headers: {
            'accept': 'application/json',
            'Authorization': auth.token,
        }
    })
        .then((response) => {
            feature = response.body
            console.log(feature)
        })
}
