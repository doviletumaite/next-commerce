import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        }
    }
})

export default useStyle