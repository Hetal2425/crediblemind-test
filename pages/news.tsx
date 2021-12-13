import Header from "../components/Header";
import React, { useEffect, useState } from "react";
import index from "../lib/algoliaService";
import moment from "moment";
import client from "../lib/contentfulService";
import Link from "next/link";
import { Grid, Card, Container } from "@material-ui/core";
import { client as alogiraClient } from "../lib/algoliaService";
import InfiniteHits from "../components/InfiniteHits";
import  styles  from "../components/styles/NewsPageStyles";
import useStyle from "../Hooks/useStyle";
import {
  InstantSearch,
  SearchBox,
  ClearRefinements,
  RefinementList,
  Configure,
  connectStats,
} from "react-instantsearch-dom";

function News() {
  const classes = useStyle(styles);
  const [pageData, setpageData] = useState<any>();
  const [threeBlogsData, setThreeBlogsData] = useState<any>();

  useEffect(() => {
    client
      .getEntries()
      .then((entry) => setpageData(entry))
      .catch((err) => console.log(err));
    index
      .search("")
      .then(({ hits }) => {
        setThreeBlogsData(hits?.slice(0, 3));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Stats = ({ nbHits }: any) => (
    <h5 className={`${'mainTitle'} ${classes.mainTitleSearch}`} >{nbHits} Resources Found</h5>
  );
  const CustomStats = connectStats(Stats);
  return (
    <>
      <Header pageData={pageData} />
      <div>
        <div>
          <Container fixed>
            <div className={classes.MainTitle}>
              <h2>{pageData?.items[0].fields.ttile}</h2>
            </div>
          </Container>
          <Container>
            <Grid container spacing={3}>
              {threeBlogsData?.map((blogs: any, index: number) => {
                return (
                  <>
                    <Grid
                      key={index}
                      lg={4}
                      container
                      item
                      className={classes.CardCol}
                    >
                      <div className={classes.MainCardWrp}>
                        <Link href={`/${blogs?.slug}`}>
                          <div className={classes.MainBlogImg}>
                            <img
                              src={blogs?.imageUrl}
                              alt={blogs?.topics[0].title}
                            />
                          </div>
                        </Link>
                        <div className={classes.MainSubTitle}>
                          <p> {blogs?.topics[0].title}</p>
                        </div>
                        <Link href={`/${blogs?.slug}`}>
                          <div className={classes.MainTitleBlog}>
                            <h4>{blogs?._highlightResult.name.value}</h4>
                          </div>
                        </Link>
                        <div className={classes.blogCardBottom}>
                          <div className={classes.date}>
                            {moment(blogs?.publicationDate).format(
                              "MMMM Do YYYY"
                            )}
                          </div>
                          <div className={classes.stageTitle}>
                            {blogs?.organization[0].fields.name}
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </Container>
        </div>
        <InstantSearch indexName="news" searchClient={alogiraClient}>
          <div className={classes.SearchMain}>
            <Container fixed>
              <Grid container spacing={1}>
                <Grid container item lg={3} spacing={3}>
                  <Card className={classes.searchCard}>
                    <div className={classes.searchCardLabel}>
                      <b>{pageData?.items[0].fields.searchLabel}</b>
                    </div>
                    <div className="left-panel">
                      <SearchBox
                        searchAsYouType={false}
                        translations={{
                          placeholder: "Search",
                        }}
                      />
                      <ClearRefinements />
                      <h2>News Type</h2>
                      <RefinementList attribute="topics.title" />
                      <Configure />
                    </div>
                  </Card>
                </Grid>
                 <Grid container item lg={9} spacing={3}>
                  <div className={classes.SearchList}>
                    <CustomStats />
                    <div className="right-panel">
                      <InfiniteHits />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </InstantSearch>
      </div>
    </>
  );
}

export default News;
