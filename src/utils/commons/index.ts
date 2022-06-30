import Global from "../../Global";
import I18n from "../../i18n";

export const getLabel = (keyName: string, params = {}) => I18n.t(keyName, { locale: Global.locale, ...params });

export const validateEmail = (email: string) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
    }

    return false;
}

export const Modules = {
    PROJECT: 'Project',
    SALES_ORDER: 'SalesOrder',
    INVOICE: 'Invoice',
    HELP_DESK: 'HelpDesk',
    FAQ: 'Faq',
    FEEDBACK: 'Feedback',
    SUPPORT_CHANNEL: 'SupportChannel',
    REPORT: 'Report',
    NEWS: 'News'
}

export const getIconModule = (module: string) => {
    switch (module) {
        case Modules.PROJECT:
            return 'briefcase'
        case Modules.SALES_ORDER:
            return 'file-invoice'
        case Modules.INVOICE:
            return 'file-invoice-dollar'
        case Modules.HELP_DESK:
            return 'exclamation-circle'
        case Modules.FAQ:
            return 'books'
        case Modules.FEEDBACK:
            return 'envelope'
        case Modules.SUPPORT_CHANNEL:
            return 'phone-alt'
        case Modules.REPORT:
            return 'cubes'
        case Modules.NEWS:
            return 'bell'
        default:
            return 'question'
    }
}