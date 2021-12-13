 import React from 'react'
 import { Container } from '@material-ui/core'
 import styles from './styles/HeaderStyle'
 import useStyles from '../Hooks/useStyle'


 const Header = ({pageData}:any) => {
    const classes = useStyles(styles);
     return (
        <header className={classes.headerMain}>
            <Container fixed>
            <div className={classes.logo}>
                <img
                    src={"http:" + pageData?.items[0].fields.logo.fields.file.url}
                    height="55px"
                    width="167px"
                    alt="logo"
                />
            </div>
            <div className={classes.LabelMain}>
                {pageData?.items[0].fields.menuLabel}
            </div>
            </Container>
      </header>
     )
 }

 export default Header

