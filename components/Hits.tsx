import React from 'react';
// import { Highlight } from 'react-instantsearch-dom';
import Link from 'next/link'
import { Grid } from '@material-ui/core';
import styles from './styles/HitsStyle';
import useStyle from "../Hooks/useStyle";
import moment from 'moment';


function Hit(props:any) {
    const classes = useStyle(styles);
    return (
      <Grid container spacing={1} className={classes.mainSearchPost}>
          <Grid item lg={4} spacing={3}>
              <Link href={`/${props.hit?.slug}`}>
            <div className={classes.mainSearchImg}>
              <img
                src={
                  props.hit?.imageUrl
                    ? props.hit?.imageUrl
                    : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"
                }
                alt="blog-image"
              />
            </div>
            </Link>
          </Grid>
          <Grid item lg={6} spacing={3} className={classes.rightContent}>
            <div className={classes.MainSubTitle}>
              <p>{props.hit?.topics[0]?.title}</p>
            </div>
            <Link href={`/${props.hit?.slug}`}>
            <div className={classes.MainTitleBlog}>
              <h4
                dangerouslySetInnerHTML={{
                  __html: props.hit?._highlightResult.name.value,
                }}
              ></h4>
            </div>
            </Link>
            <div>
              <p className={classes.contentMain}
                dangerouslySetInnerHTML={{
                  __html: props.hit?._highlightResult.description.value,
                }}
              ></p>
            </div>
            <div className={classes.blogCardBottom}>
              <div className={classes.date}>
                {moment(props.hit?.publicationDate).format("MMMM Do YYYY")}
              </div>
              <div className={classes.stageTitle}>
                {props.hit?.organization[0].fields.name}
              </div>
            </div>
          </Grid>
        </Grid>
    );
  }

  export default Hit;