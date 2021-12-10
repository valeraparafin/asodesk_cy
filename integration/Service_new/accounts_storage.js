// export function withTariff(Tariff) {
//     const basic = 'testgetems+basic@gmail.com';
//     const startup = 'testgetems+startup@gmail.com';
//     const aso = 'testgetems+aso@gmail.com';
//     const pro = 'testgetems+pro@gmail.com';
//
//     const Plans = {'Basic': basic, 'Startup': startup, 'ASO': aso, 'PRO': pro}
//
//     return Plans[Tariff]
//
//     // if (Tariff === 'Basic') {
//     //     return Tariff
//     // } else if (Tariff === 'Startup') {
//     //     return startup
//     // } else if (Tariff === 'ASO') {
//     //     return aso
//     // } else if (Tariff === 'PRO') {
//     //     return pro
//     // }
// }

export class Plan {
    basic = 'testgetems+basic@gmail.com';

    startup_300 = 'testgetems+startup@gmail.com';
    startup_700 = 'testgetems+startup700@gmail.com';
    startup_1500 = 'testgetems+startup1500@gmail.com';
    startup_1500_300 = 'testgetems+startup1500_300@gmail.com';

    pro_300 = 'testgetems+pro@gmail.com';
    pro_700 = 'testgetems+pro700@gmail.com';
    pro_1500 = 'testgetems+startup1500@gmail.com';
    startup_1500_300 = 'testgetems+startup1500_300@gmail.com';

    aso = 'testgetems+aso@gmail.com';
    pro = 'testgetems+pro@gmail.com';

    Plans = {
        'Basic': this.basic,
        'Startup_ASO_300': this.startup_300,
        'Startup_ASO_700': this.startup_700,
        'Startup_ASO_1500': this.startup_1500,
        'Startup_ASO+Reviews_300': this.startup_1500_300,

        'Pro_ASO_300': this.pro_300,
        'Pro_ASO_700': this.pro_700,
        'Pro_ASO_1500': this.pro_1500,
        'Pro_ASO+Reviews_300': this.startup_1500_300,



        'ASO': this.aso,
        'PRO': this.pro
    }

    withPlan(Tariff) {
        return this.Plans[Tariff]
    }
}




