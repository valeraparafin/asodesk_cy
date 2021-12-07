export function withTariff(Tariff) {
    let basicEmail = 'testgetems+basic@gmail.com';
    let ASOEmail = 'testgetems+aso@gmail.com';
    let PROEmail = 'testgetems+pro@gmail.com';

    if (Tariff === 'Basic') {
        return basicEmail
    } else if (Tariff === 'ASO') {
        return ASOEmail
    } else if (Tariff === 'PRO') {
        return PROEmail
    }


}




