import React, { useEffect, useState } from 'react'
import index from "../lib/algoliaService";
import { useRouter } from 'next/router'
import {  Container, Grid } from '@material-ui/core';
import moment from 'moment';
import {makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
     MainSubTitle: {
    "& p": {
      color: "#4188b4",
      margin: "0",
      fontSize: '12px'
    },
  },
  MainTitleBlog: {
    "& h4": {
      color: "#4b4b4b",
      marginTop: "10px",
      fontSize: "16px",
    },
  },
  blogCardBottom: {
    display: "flex",
    fontSize: "14px"
  },
  date: {
    color: "#5b5b5b",
    paddingRight: "10px",
  },
  stageTitle: {
    color: "#2a7bab",
    paddingLeft: "10px",
    borderLeft: "1px solid #f0f2f3",
  },
  
  mainSearchImg: {
    height: "185px",
    width: "370px",
    ["& img"]: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  mainSearchPost: {
    margin: "30px 0",
  },
  rightContent: {
    padding: "10px",
  },
});

const Slug = () => {
    const [blog,setBlog] = useState<any>()
    const router = useRouter()
    const classes = useStyles();
  const blogSlug = router.asPath.slice(1)
  console.log("pid => ",blogSlug);
  
    useEffect(() => {
        index
      .search(blogSlug)
      .then(({ hits }) => {
        setBlog(hits);
        console.log("hits => ",hits);
      })
      .catch((err) => {
        console.log(err);
      });

    }, [blogSlug])
    return (
        <Container maxWidth="lg">
            {blog?.map((data:any,index:any) => (
             <Grid
             key={index}
               container
               spacing={1}
               className={classes.mainSearchPost}
             >
               <Grid item lg={4} spacing={3}>
                 <div className={classes.mainSearchImg}>
                   <img
                     src={data?.imageUrl}
                     alt="blog-image"
                   />
                 </div>
               </Grid>
               <Grid
                 item
                 lg={6}
                 spacing={3}
                 className={classes.rightContent}
               >
                 <div className={classes.MainSubTitle}>
                   <p>
                     {" "}
                     {data?.topics[0]?.title}
                   </p>
                 </div>
                 <div className={classes.MainTitleBlog}>
                   <h4
                     dangerouslySetInnerHTML={{__html:(data?._highlightResult.name.value)}}
                   ></h4>
                 </div>
                 <div >
                   <p
                     dangerouslySetInnerHTML={{__html:(data?._highlightResult.description.value)}}
                   ></p>
                 </div>
                 <div className={classes.blogCardBottom}>
                   <div className={classes.date}>
                   {moment(data?.publicationDate).format("MMMM Do YYYY")}
                   </div>
                   <div className={classes.stageTitle}>
                   {data?.organization[0].fields.name}
                   </div>
                 </div>
               </Grid>
             </Grid>
            ))}
          </Container>
    )
}

export default Slug
