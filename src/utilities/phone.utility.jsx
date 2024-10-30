/**
* @param {String} phone
* @return {String} 
*/
const formatPhoneNumber = (phone) => {
    const cleaned = phone.replace(/\D/g, '');;
    const match = cleaned.match(/^(1|52|)?(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        const intlCode = match[1] ? '+' + match[1] : match[1];

        return [intlCode, ' (', match[2], ') ', match[3], '-', match[4]].join('');
    }

    return '+' + phone;
}

const phoneUtility = {
    formatPhoneNumber
}

export default phoneUtility;