import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Layout from "../../components/Layout";
import { Grid, Paper, withStyles, Link } from "@material-ui/core";
// import AccountCircle from "@material-ui/icons/AccountCircle";
import { itemList } from "../../api/itemList";
// import { entry } from "../../model/entry";

const style = () => ({
  root: {
    textAlign: "center",
    height: 96
  },
  gridConIcon: {
    height: 0.6 * 96
  },
  gridConText: {
    height: 0.4 * 96,
    fontSize: 14
  }
});

class Home extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userPath: "/bind"
  //   };
  // }

  componentDidMount = async () => {
    // await entry();
    // if (localStorage.getItem("code")) {
    //   const code = JSON.parse(localStorage.getItem("code"));
    //   if (code === 0) {
    //     this.setState({
    //       userPath: "/user"
    //     });
    //   }
    // }
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <RouterLink to={this.state.userPath}>
          <AccountCircle color="action" className="user-img" fontSize="large" />
        </RouterLink> */}
        <Layout title="学生服务">
          <div style={{ padding: 16 }}>
            <Grid container spacing={16}>
              {itemList.map((item, key) => {
                return (
                  <Grid item xs={4} key={key}>
                    <Link href={item.url} underline="none" color="textPrimary">
                      <Paper classes={{ root: classes.root }}>
                        <Grid container direction="column">
                          <Grid
                            item
                            className={classes.gridConIcon}
                            container
                            justify="center"
                            alignItems="center"
                          >
                            {item.iconClass ? (
                              <i className={item.iconClass} />
                            ) : (
                              <img
                                src={item.imgSrc}
                                alt={item.name}
                                className
                              />
                            )}
                          </Grid>
                          <Grid item className={classes.gridConText}>
                            <span>{item.name}</span>
                          </Grid>
                        </Grid>
                      </Paper>
                    </Link>
                  </Grid>
                );
              })}
              <Grid item xs={4}>
                <Link underline="none" color="textPrimary">
                  <Paper classes={{ root: classes.root }}>
                    <RouterLink to="/about" className="home-page-about-text">
                      <Grid container direction="column">
                        <Grid
                          item
                          className={classes.gridConIcon}
                          container
                          justify="center"
                          alignItems="center"
                        >
                          <i className="iconfont icon-moreApp" />
                        </Grid>
                        <Grid item className={classes.gridConText}>
                          <span>关于我们</span>
                        </Grid>
                      </Grid>
                    </RouterLink>
                  </Paper>
                </Link>
              </Grid>
            </Grid>
          </div>
        </Layout>
      </div>
    );
  }
}

const NewHome = withStyles(style)(Home);

export default NewHome;
