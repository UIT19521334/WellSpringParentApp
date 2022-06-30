type UIPaletteNames = keyof typeof PALETTE_VALES;

const PALETTE_VALES: { [key: string]: { [key: string]: string } } = {
    transparent: { light: 'transparent', dark: 'transparent' },

    brand: { light: 'rgb(0, 130, 200)', dark: 'rgb(0, 130, 200)' },
    brand1: { light: 'rgb(245, 123, 32)', dark: 'rgb(245, 123, 32)' },
    brand2: { light: 'rgb(80, 185, 72)', dark: 'rgb(80, 185, 72)' },
    brand3: { light: 'rgb(252, 176, 52)', dark: 'rgb(252, 176, 52)' },
    brand4: { light: 'rgb(252, 176, 52, 1)', dark: 'rgb(252, 176, 52, 1)' },
    brand5: { light: 'rgba(255, 241, 236, 1)', dark: 'rgba(255, 241, 236, 1)' },
    brand6: { light: '#008DA8', dark: '#008DA8' },
    brand7: { light: 'rgba(230, 244, 247, 1)', dark: 'rgba(230, 244, 247, 1)' },
    brand8: { light: 'rgb(205, 233, 238)', dark: 'rgb(205, 233, 238)' },

    black: { light: '#333', dark: '#fff' },
    black1: { light: '#525252', dark: '#525252' },
    black2: { light: '#666666', dark: '#666666' },
    black3: { light: '#7A7A7A', dark: '#7A7A7A' },
    black4: { light: '#8A8A89', dark: '#8A8A89' },
    black5: { light: '#A3A3A3', dark: '#A3A3A3' },
    black6: { light: '#B8B8B8', dark: '#B8B8B8' },
    black7: { light: '#CCCCCC', dark: '#CCCCCC' },
    black8: { light: '#E0E0E0', dark: '#E0E0E0' },
    black9: { light: '#faf9fe', dark: '#faf9fe' },

    white: { light: '#fff', dark: '#333' },

    accent: { light: '#008DA8', dark: '#008DA8' },
    accent1: { light: '#008DA8', dark: '#008DA8' },
    accent2: { light: '#008DA8', dark: '#008DA8' },
    accent3: { light: '#0076F5', dark: '#0076F5' },
    accent4: { light: '#1F8BFF', dark: '#1F8BFF' },
    accent5: { light: '#47A0FF', dark: '#47A0FF' },
    accent6: { light: '#70B5FF', dark: '#70B5FF' },
    accent7: { light: '#99CAFF', dark: '#99CAFF' },
    accent8: { light: '#C2DFFF', dark: '#C2DFFF' },
    accent9: { light: '#f5f7fb', dark: '#f5f7fb' },
   
    useful: { light: '#CB2314', dark: '#CB2314' },
    useful1: { light: '#E93120', dark: '#E93120' },
    useful2: { light: '#F0766A', dark: '#F0766A' },
    useful3: { light: '#F49890', dark: '#F49890' },
    useful4: { light: '#FCDCDA', dark: '#FCDCDA' },
    
    positive: { light: '#238060', dark: '#238060' },
    positive1: { light: '#30B083', dark: '#30B083' },
    positive2: { light: '#63C09B', dark: '#63C09B' },
    positive3: { light: '#8CCFB5', dark: '#8CCFB5' },
    positive4: { light: '#CFF2E6', dark: '#CFF2E6' },
    
    careful: { light: '#664200', dark: '#664200' },
    careful1: { light: '#FFA600', dark: '#FFA600' },
    careful2: { light: '#FFB845', dark: '#FFB845' },
    careful3: { light: '#FFC15E', dark: '#FFC15E' },
    careful4: { light: '#FFEAC2', dark: '#FFEAC2' },
}

export const UIColor = {
    white: 'white',
    transparent: 'transparent',

    brand: 'brand',
    brand1: 'brand1',
    brand2: 'brand2',
    brand3: 'brand3',
    brand4: 'brand4',
    brand5: 'brand5',
    brand6: 'brand6',
    brand7: 'brand7',
    brand8: 'brand8',

    black: 'black',
    black1: 'black1',
    black2: 'black2',
    black3: 'black3',
    black4: 'black4',
    black5: 'black5',
    black6: 'black6',
    black7: 'black7',
    black8: 'black8',
    black9: 'black9',

    accent: 'accent',
    accent1: 'accent1',
    accent2: 'accent2',
    accent3: 'accent3',
    accent4: 'accent4',
    accent5: 'accent5',
    accent6: 'accent6',
    accent7: 'accent7',
    accent8: 'accent8',
    accent9: 'accent9',
   
    useful: 'useful',
    useful1: 'useful1',
    useful2: 'useful2',
    useful3: 'useful3',
    useful4: 'useful4',

    positive: 'positive',
    positive1: 'positive1',
    positive2: 'positive2',
    positive3: 'positive3',
    positive4: 'positive4',

    careful: 'careful',
    careful1: 'careful1',
    careful2: 'careful2',
    careful3: 'careful3',
    careful4: 'careful4',
    
  };

export const BackgroundGradient = ['#ED5345', '#E93120', '#CB2314']

export const systemColor = (
    color: string
  ): string => {
    const colorValues = PALETTE_VALES[color];
    
    if (colorValues) {
      return colorValues['light']
    }
    
    return color;
  };