const styles = () => ({
  MainDiv: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
  },
  logoMain:{
      "textAlign":"center",
      paddingBottom: "20px",
  },
  Title:{
      "textAlign":"center",
      paddingBottom: "20px",
  },
  SignIn:{
      "textAlign":"center",
      paddingBottom: "20px",

      ["& button"]:{
        "justifyContent": "center",
        "width": "100%",
        "height": "60px",
        "backgroundColor": "#fcfcfc",
        "borderRadius": "10px",
        "boxShadow": "0 3px 4px 0 rgba(0, 0, 0, .2)",
        "cursor": "pointer",
        "alignSelf": "center",
        "userSelect": "none",
        "transition": "all 400ms ease 0s",
        "display": "flex",
        "alignItems":"center",
        "border": "0",
      },
      ["& .google-icon-wrapper"]:{
        "marginTop": "1px",
        "marginLeft": "1px",
        "width": "40px",
        "borderRadius": "2px",
        "userSelect": "none",
        

      },
    
      ["&  .btn-text"]:{
        "fontSize": "16px",
        "letterSpacing": ".2px",
        "userSelect": "none",
        "margin":"0",
      },
      ["&  .google-btn"]:{
        ["&:hover"]:{
            "boxShadow": "0 3px 8px rgba(117, 117, 117, .5)",
            "userSelect": "none"
        },
      },
  },
  MainCard:{
    padding: "50px",
    border: "2px solid #01619b",
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
  },
  
});
export default styles;
