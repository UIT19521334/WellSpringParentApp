import { WidthDevice } from '../sizes'
const isIPad = WidthDevice >= 736;
export const FontSize = {
    h0: isIPad ? 620  * .067 : WidthDevice * .067,
    h1: isIPad ? 620  * .06 : WidthDevice * .06,
    h2: isIPad ? 620  * .055 : WidthDevice * .055,
    h3: isIPad ? 620  * .05 : WidthDevice * .05,
    h4: isIPad ? 620  * .042 : WidthDevice * .042,
    h5: isIPad ? 620  * .036 : WidthDevice * .036,
    h6: isIPad ? 620  * .0335 : WidthDevice * .0335,
    h7: isIPad ? 620  * .028206 : WidthDevice * .028206,
    h8: isIPad ? 620  * .0256411 : WidthDevice * .0256411,
};