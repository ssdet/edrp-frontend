import { createStyles } from "@material-ui/core";

export const styles = (theme) => createStyles({
    table:{
        marginLeft:'30px',
        marginBottom:'30px',
        fontFamily: 'arial, sans-serif',
        borderCollapse: 'collapse',
        width: '90%',
    },
    th:{
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
    },
    td:{
        border: '1px solid #dddddd',
        textAlign: 'left',
        padding: '8px',
    },
    img:{
        width:'200px'
    }
})

export default styles;