import { createMuiTheme } from '@material-ui/core/styles';

const uBlue = "#0B72B9";
const uOrange = "#FFBA60";

export default createMuiTheme({

    palette:{
        common:{

            blue: `${uBlue}`,
            orange: `${uOrange}`
        },
        primary: {
            main: `${uBlue}`
        },
        secondary:{
            main: `${uOrange}`
        }
    },
    typography:{
        // h3:{
        //     fontWeight: 300
        // }
    }

});