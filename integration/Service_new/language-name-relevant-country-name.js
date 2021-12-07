/// <reference types="cypress" />

import { Commands } from "./Classes_library/Commands";
import { Auth } from "./Classes_library/Auth";

const command = new Commands();
const auth = new Auth();
//let languages; //= {af:"Afrikaans", ar:"Arabic", be:"Belarusian", bg:"Bulgarian", ca:"Catalan", cs:"Czech", da:"Danish", de:"German", el:"Greek", en:"English", es:"Spanish", et:"Estonian", fi:"Finnish", fr:"French", he:"Hebrew", hi:"Hindi", hr:"Croatian", hu:"Hungarian", hy:"Armenian", id:"Indonesian", is:"Icelandic", it:"Italian", ja:"Japanese", ka:"Georgian", kk:"Kazakh", km:"Khmer", ko:"Korean", lt:"Lithuanian", lv:"Latvian", ms:"Malay", nb:"Norwegian", nl:"Dutch", pl:"Polish", pt:"Portuguese", ro:"Romanian", ru:"Russian", si:"Sinhalese", sk:"Slovak", sl:"Slovenian", sq:"Albanian", sr:"Serbian", sv:"Swedish", sw:"Swahili", ta:"Tamil", th:"Thai", tl:"Tagalog", tr:"Turkish", uk:"Ukrainian", vi:"Vietnamese", 'zh-cn':"Chinese", 'zh-hk':"Chinese (Hong-Kong)", zu:"Zulu"}
let languages = [{
    "language_code": "en",
    "language_name": "English",
    "country_code": "US",
    "country_name": "United States"
}, {
    "language_code": "ru",
    "language_name": "Russian",
    "country_code": "RU",
    "country_name": "Russia"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "GB",
    "country_name": "United Kingdom"
}, {
    "language_code": "de",
    "language_name": "German",
    "country_code": "DE",
    "country_name": "Germany"
}, {
    "language_code": "fr",
    "language_name": "French",
    "country_code": "FR",
    "country_name": "France"
}, {
    "language_code": "pt",
    "language_name": "Portuguese",
    "country_code": "BR",
    "country_name": "Brazil"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "ES",
    "country_name": "Spain"
}, {
    "language_code": "it",
    "language_name": "Italian",
    "country_code": "IT",
    "country_name": "Italy"
}, {
    "language_code": "zh-CN",
    "language_name": "Chinese",
    "country_code": "CN",
    "country_name": "China"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "CA",
    "country_name": "Canada"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "AU",
    "country_name": "Australia"
}, {
    "language_code": "sq",
    "language_name": "Albanian",
    "country_code": "AL",
    "country_name": "Albania"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "DZ",
    "country_name": "Algeria"
}, {
    "language_code": "pt",
    "language_name": "Portuguese",
    "country_code": "AO",
    "country_name": "Angola"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "AR",
    "country_name": "Argentina"
}, {
    "language_code": "hy",
    "language_name": "Armenian",
    "country_code": "AM",
    "country_name": "Armenia"
}, {
    "language_code": "de",
    "language_name": "German",
    "country_code": "AT",
    "country_name": "Austria"
}, {
    "language_code": "ru",
    "language_name": "Russian",
    "country_code": "AZ",
    "country_name": "Azerbaijan"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "BH",
    "country_name": "Bahrain"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "BB",
    "country_name": "Barbados"
}, {
    "language_code": "nl",
    "language_name": "Dutch",
    "country_code": "BE",
    "country_name": "Belgium"
}, {
    "language_code": "ru",
    "language_name": "Russian",
    "country_code": "BY",
    "country_name": "Belarus"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "BM",
    "country_name": "Bermuda"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "BO",
    "country_name": "Bolivia"
}, {
    "language_code": "bg",
    "language_name": "Bulgarian",
    "country_code": "BG",
    "country_name": "Bulgaria"
}, {
    "language_code": "km",
    "language_name": "Khmer",
    "country_code": "KH",
    "country_name": "Cambodia"
}, {
    "language_code": "fr",
    "language_name": "French",
    "country_code": "CM",
    "country_name": "Cameroon"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "CL",
    "country_name": "Chile"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "CO",
    "country_name": "Colombia"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "CR",
    "country_name": "Costa Rica"
}, {
    "language_code": "el",
    "language_name": "Greek",
    "country_code": "CY",
    "country_name": "Cyprus"
}, {
    "language_code": "cs",
    "language_name": "Czech",
    "country_code": "CZ",
    "country_name": "Czechia"
}, {
    "language_code": "hr",
    "language_name": "Croatian",
    "country_code": "HR",
    "country_name": "Croatia"
}, {
    "language_code": "da",
    "language_name": "Danish",
    "country_code": "DK",
    "country_name": "Denmark"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "DO",
    "country_name": "Dominican Republic"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "EC",
    "country_name": "Ecuador"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "EG",
    "country_name": "Egypt"
}, {
    "language_code": "et",
    "language_name": "Estonian",
    "country_code": "EE",
    "country_name": "Estonia"
}, {
    "language_code": "fi",
    "language_name": "Finnish",
    "country_code": "FI",
    "country_name": "Finland"
}, {
    "language_code": "ka",
    "language_name": "Georgian",
    "country_code": "GE",
    "country_name": "Georgia"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "GH",
    "country_name": "Ghana"
}, {
    "language_code": "el",
    "language_name": "Greek",
    "country_code": "GR",
    "country_name": "Greece"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "GT",
    "country_name": "Guatemala"
}, {
    "language_code": "zh-HK",
    "language_name": "Chinese (Hong-Kong)",
    "country_code": "HK",
    "country_name": "Hong Kong"
}, {
    "language_code": "is",
    "language_name": "Icelandic",
    "country_code": "IS",
    "country_name": "Iceland"
}, {
    "language_code": "hi",
    "language_name": "Hindi",
    "country_code": "IN",
    "country_name": "India"
}, {
    "language_code": "id",
    "language_name": "Indonesian",
    "country_code": "ID",
    "country_name": "Indonesia"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "IE",
    "country_name": "Ireland"
}, {
    "language_code": "he",
    "language_name": "Hebrew",
    "country_code": "IL",
    "country_name": "Israel"
}, {
    "language_code": "ja",
    "language_name": "Japanese",
    "country_code": "JP",
    "country_name": "Japan"
}, {
    "language_code": "ru",
    "language_name": "Russian",
    "country_code": "KZ",
    "country_name": "Kazakhstan"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "KE",
    "country_name": "Kenya"
}, {
    "language_code": "ru",
    "language_name": "Russian",
    "country_code": "KG",
    "country_name": "Kyrgyzstan"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "KW",
    "country_name": "Kuwait"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "HN",
    "country_name": "Honduras"
}, {
    "language_code": "hu",
    "language_name": "Hungarian",
    "country_code": "HU",
    "country_name": "Hungary"
}, {
    "language_code": "lv",
    "language_name": "Latvian",
    "country_code": "LV",
    "country_name": "Latvia"
}, {
    "language_code": "lt",
    "language_name": "Lithuanian",
    "country_code": "LT",
    "country_name": "Lithuania"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "LB",
    "country_name": "Lebanon"
}, {
    "language_code": "de",
    "language_name": "German",
    "country_code": "LU",
    "country_name": "Luxembourg"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "MT",
    "country_name": "Malta"
}, {
    "language_code": "zh-HK",
    "language_name": "Chinese (Hong-Kong)",
    "country_code": "MO",
    "country_name": "Macao"
}, {
    "language_code": "fr",
    "language_name": "French",
    "country_code": "MG",
    "country_name": "Madagascar"
}, {
    "language_code": "ms",
    "language_name": "Malay",
    "country_code": "MY",
    "country_name": "Malaysia"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "MX",
    "country_name": "Mexico"
}, {
    "language_code": "nl",
    "language_name": "Dutch",
    "country_code": "NL",
    "country_name": "Netherlands"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "NZ",
    "country_name": "New Zealand"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "NI",
    "country_name": "Nicaragua"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "NG",
    "country_name": "Nigeria"
}, {
    "language_code": "nb",
    "language_name": "Norwegian bukmol",
    "country_code": "NO",
    "country_name": "Norway"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "OM",
    "country_name": "Oman"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "PK",
    "country_name": "Pakistan"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "PA",
    "country_name": "Panama"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "PY",
    "country_name": "Paraguay"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "PE",
    "country_name": "Peru"
}, {
    "language_code": "tl",
    "language_name": "Tagalog",
    "country_code": "PH",
    "country_name": "Philippines"
}, {
    "language_code": "pl",
    "language_name": "Polish",
    "country_code": "PL",
    "country_name": "Poland"
}, {
    "language_code": "pt",
    "language_name": "Portuguese",
    "country_code": "PT",
    "country_name": "Portugal"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "QA",
    "country_name": "Qatar"
}, {
    "language_code": "ro",
    "language_name": "Romanian",
    "country_code": "RO",
    "country_name": "Romania"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "SV",
    "country_name": "El Salvador"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "SA",
    "country_name": "Saudi Arabia"
}, {
    "language_code": "fr",
    "language_name": "French",
    "country_code": "SN",
    "country_name": "Senegal"
}, {
    "language_code": "sr",
    "language_name": "Serbian",
    "country_code": "RS",
    "country_name": "Serbia"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "SG",
    "country_name": "Singapore"
}, {
    "language_code": "sk",
    "language_name": "Slovak",
    "country_code": "SK",
    "country_name": "Slovakia"
}, {
    "language_code": "sl",
    "language_name": "Slovenian",
    "country_code": "SI",
    "country_name": "Slovenia"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "ZA",
    "country_name": "South Africa"
}, {
    "language_code": "ko",
    "language_name": "Korean",
    "country_code": "KR",
    "country_name": "South Korea"
}, {
    "language_code": "si",
    "language_name": "Sinhalese",
    "country_code": "LK",
    "country_name": "Sri Lanka"
}, {
    "language_code": "sv",
    "language_name": "Swedish",
    "country_code": "SE",
    "country_name": "Sweden"
}, {
    "language_code": "de",
    "language_name": "German",
    "country_code": "CH",
    "country_name": "Switzerland"
}, {
    "language_code": "zh-HK",
    "language_name": "Chinese (Hong-Kong)",
    "country_code": "TW",
    "country_name": "Taiwan"
}, {
    "language_code": "th",
    "language_name": "Thai",
    "country_code": "TH",
    "country_name": "Thailand"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "TN",
    "country_name": "Tunisia"
}, {
    "language_code": "tr",
    "language_name": "Turkish",
    "country_code": "TR",
    "country_name": "Turkey"
}, {
    "language_code": "ar",
    "language_name": "Arabic",
    "country_code": "AE",
    "country_name": "United Arab Emirates"
}, {
    "language_code": "en",
    "language_name": "English",
    "country_code": "UG",
    "country_name": "Uganda"
}, {
    "language_code": "uk",
    "language_name": "Ukrainian",
    "country_code": "UA",
    "country_name": "Ukraine"
}, {
    "language_code": "es",
    "language_name": "Spanish",
    "country_code": "UY",
    "country_name": "Uruguay"
}, {
    "language_code": "ru",
    "language_name": "Russian",
    "country_code": "UZ",
    "country_name": "Uzbekistan"
}, {
    "language_code": "vi",
    "language_name": "Vietnamese",
    "country_code": "VN",
    "country_name": "Vietnam"
}, { "language_code": "es", "language_name": "Spanish", "country_code": "VE", "country_name": "Venezuela" }]
let language;
let country;
let i = 0

describe('Match label', function () {

    before("Auth", () => {
        auth.signIn('/');

    });
    it("Sign in and prepare data", function () {
        cy.visit('/' + 'settings/integrations')

        cy.get('.mx-16 > .buttonElement').click();
        cy.get(':nth-child(1) > .tb-checkbox__body').click();
        cy.get('.space-x-12 > .buttonElement').click();
        cy.get('.flex-1 > .baseSelector__control > .baseSelector__value-container').click();
        // cy.get('flex-1 > .baseSelector__menu-list').click();

        // cy.request({
        //     method: 'GET',
        //     followRedirect: false, log: true,
        //     url: '/' + 'api/countries-languages',
        //     'accept': 'application/json',
        //     'Authorization': 'Token:' + auth.token,
        //     response: []
        // }).then((response) => {
        //     languages = response.body;
        // });


    });


    for (language in languages) {
        let language_code = languages[language].language_code;
        let language_name = languages[language].language_name;
        let country_name = languages[language].country_name;


        it('Check Language in drop-down list and Select = ' + language_name + '\n Should Match Country in Label = ' + country_name + '', function () {

            // if (cy.get('.flex-1 > .baseSelector__menu').contains(languages[language]) && cy.get('input[type="checkbox"]').should('not.be.checked')) {
            if (cy.get('.flex-1 > .baseSelector__menu').contains(language_name).children('input[type="checkbox"]').should('not.be.checked')) {
                cy.wait(100);
                cy.get('.flex-1 > .baseSelector__menu').contains(language_name, { matchCase: false }).click(); // checkbox true

                cy.wait(100);
                switch (language_name) {
                    case "English":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'United States');
                        break;
                    case "Portuguese":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Brazil');
                        break;
                    case "Spanish":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Spain');
                        break;
                    case "German":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Germany');
                        break;
                    case "Russian":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Russia');
                        break;
                    case "Arabic":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Algeria');
                        break;
                    case "French":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'France');
                        break;
                    case "Greek":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Cyprus');
                        break;
                    case "Chinese (Hong-Kong)":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Hong Kong');
                        break;
                    case "Dutch":
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', 'Belgium');
                        break;
                    default:
                        cy.get('.mt-4 > .min-w-0 > .text-gray-400').should('contain', country_name);
                }

                cy.get('.flex-1 > .baseSelector__menu').contains(language_name, { matchCase: false }).click(); // checkbox false
                cy.wait(200);
            } else {
                skip();

            }

        });
    }
});