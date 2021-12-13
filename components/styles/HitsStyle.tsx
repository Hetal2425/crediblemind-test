const styles = (theme:any) => ({
    MainTitle: {
        marginBottom: "100px",
    
        ["& h2"]: {
          textAlign: "center",
          fontSize: "36px",
          color: "#4b4b4b",
        },
      },
      MainCardWrp: {},
      MainBlogImg: {
        ["& img"]: {
          width: "100%",
        },
      },
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
          cursor: "pointer"
        },
      },
      blogCardBottom: {
        display: "flex",
        fontSize:"14px"
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
      searchCardLabel: {
        color: "#383838",
      },
      searchCard: {
        border: "1px solid #fafafa",
        padding: "25px",
    
        "& input": {
          background: "#fff",
          border: "1px solid #bbbbbb",
          height: "30px",
        },
        "& button": {
          fontSize: "16px",
          background: "#01619b",
          outline: "none",
          border: "0",
    
          "& svg": {
            fill: "#fff",
          },
        },
      },
      searchInput: {
        display: "flex",
      },
      SearchMain: {
        marginTop: "100px",
      },
      SearchList: {},
      mainTitleSearch: {
        fontSize: "26px",
        margin: "0",
        color: "#b0b0b0",
      },
      mainSearchImg: {
        cursor:"pointer",
        height: "100%",
        "max-width": "250px",
        " max-height": "250px",
        ["& img"]: {
          width: "100%",
          height: "100%",
          objectFit:"cover"
        },
      },
      mainSearchPost: {
        marginBottom: "30px",
      },
      rightContent: {
        padding: "10px",
      },
      contentMain:{
        width: "490px",
        display:"-webkit-box",
        "-webkit-line-clamp": 3,
        "-webkit-box-orient":" vertical",
        overflow: "hidden",
        margin: "22px auto",
      }

  });
  export default styles
  